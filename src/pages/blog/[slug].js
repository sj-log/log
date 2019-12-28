import {DiscussionEmbed} from "disqus-react";

// client side rendering components
import dynamic from 'next/dynamic'
const ReactMarkdown = dynamic(() => import ("react-markdown"), {ssr: false})

// components
import Layout from '../../components/Layout'

export default function BlogTemplate(props) {

    function reformatDate(fullDate) {
        const date = new Date(fullDate)
        return date
            .toDateString()
            .slice(4);
    }
    const markdownBody = props.markdownBody

    return (
        <Layout
            siteTitle={props.siteTitle}
            postExcerpt={props.postExcerpt}
            siteUrl={props.siteUrl}
            postThumbnail={props.postThumbnail}>
            <article className="blog">

                <div className="blog__info">
                    <h1 className="post-title">{props.postTitle}</h1>
                    <h3 className="post-date">{reformatDate(props.date)}</h3>
                </div>
                <div className="blog__body">
                    <ReactMarkdown escapeHtml={false} source={markdownBody}/>
                </div>
            </article>
            <footer className="disqus-footer">
                <DiscussionEmbed shortname={props.disqusShortname} config={props.disqusConfig}/>

            </footer>

        </Layout>
    );

}

BlogTemplate.getInitialProps = async function (ctx) {

    const {slug} = ctx.query
    const content = await import (`../../posts/${slug}.md`)
    const config = await import (`../../data/config.json`)

    // Parse frontMatter & markdownbody in document
    const FullMdStr = content.default;
    const dirtyFrontMatter = FullMdStr.split(/---/g, 2);
    const cleanFM = dirtyFrontMatter[1]
    const moreCleanFM = cleanFM.split(/[\n\r]/g)

    // fm obj by input into key-value
    let fm = moreCleanFM.reduce((obj, data) => {

        let [k,
            v] = data.split(/:/);

            // if double semicolon found proc
        let isKeyThumbnail = k.includes("thumbnail")
        if (isKeyThumbnail) {
            [k, v] = data.split(/thumbnail : /)
            k = 'thumbnail'
        } else {
            [k, v] = data.split(/:/g)
        }

        var trimmedK = k.trim()
        obj[trimmedK] = v
        console.log(obj)
        return obj
    }, {})

    // original [slug]

    const date = fm.date;
    const title = fm.title;
    const postExcerpt = FullMdStr
        .split(/---/g)[2]
        .replace(/[#-/]/g, "")
        .substr(0, 155)
        .replace(/\r\n/g, " ")
    const markdownBody = FullMdStr.split(/---/g)[2]
    const siteUrl = config.siteUrl + ctx.asPath;
    var postThumbnail = fm.thumbnail;
    console.log(fm)
    if (postThumbnail == undefined) {
        postThumbnail = "https://user-images.githubusercontent.com/35059428/71152640-57a4e400-227a-11ea-8" +
                "d95-788d168e3764.png"
    }

    // comment part
    const disqusShortname = config.disqusShortName;
    const disqusConfig = {
        url: siteUrl,
        identifier: slug,
        title: title
    }

    return {
        disqusShortname,
        disqusConfig,
        postThumbnail: postThumbnail,
        postExcerpt: postExcerpt,
        siteDescription: postExcerpt,
        siteUrl: siteUrl,
        date: date,
        postTitle: title,
        siteTitle: config.title + " | " + title,
        markdownBody: markdownBody
        // ...data
    }
}