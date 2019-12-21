import * as React from 'react'
import matter from "gray-matter";
import Disqus from "disqus-react";

// client side rendering components
import dynamic from 'next/dynamic'
const ReactMarkdown = dynamic(()=>import("react-markdown"),{ssr:false})

// components
import Layout from '../../components/Layout'

export default function BlogTemplate(props) {
    function reformatDate(fullDate) {
        const date = new Date(fullDate)
        return date
            .toDateString()
            .slice(4);
    }
    const markdownBody = props.content
    const frontmatter = props.data

    return (
        <Layout
            siteTitle={props.siteTitle}
            postExcerpt={props.postExcerpt}
            siteUrl={props.siteUrl}
            postThumbnail={props.postThumbnail}>
            <article className="blog">

                <div className="blog__info">
                    <h1 className="post-title">{frontmatter.title}</h1>
                    <h3 className="post-date">{reformatDate(frontmatter.date)}</h3>
                </div>
                <div className="blog__body">
                    <ReactMarkdown escapeHtml={false} source={markdownBody}/>
                </div>
            </article>
            <footer className="disqus-footer">
                <Disqus.DiscussionEmbed
                    shortname={props.disqusShortname}
                    config={props.disqusConfig}/>

            </footer>

        </Layout>
    );

}

BlogTemplate.getInitialProps = async function (ctx) {

    const {slug} = ctx.query
    const content = await import (`../../posts/${slug}.md`)
    const config = await import (`../../data/config.json`)
    const data = matter(content.default);
    const title = data.data.title;
    const siteUrl = config.siteUrl + ctx.asPath;
    const postExcerpt = data
        .content
        .substring(155, 0);
    var postThumbnail = data.data.thumbnail;
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
        siteTitle: config.title + " | " + title,
        ...data
    }
}