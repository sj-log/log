import * as React from 'react'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Disqus from 'disqus-react';

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
        <Layout siteTitle={props.siteTitle}>
            <article className="blog">
                {/* <figure className="blog__hero">
                    <img src={frontmatter.hero_image} alt={`blog_hero_${frontmatter.title}`}/>
                </figure> */}
                <div className="blog__info">
                    <h1 className="post-title">{frontmatter.title}</h1>
                    <h3 className="post-date">{reformatDate(frontmatter.date)}</h3>
                </div>
                <div className="blog__body">
                    <ReactMarkdown escapeHtml={false} source={markdownBody}/>
                </div>
            </article>
            <footer>
                    {console.log(props.disqusShortname, props.disqusConfig)}
                <Disqus.DiscussionEmbed shortname={props.disqusShortname} config={props.disqusConfig}/>

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
   
    console.log(config.siteUrl, config.disqusShortName)

    // comment part
    const disqusShortname = config.disqusShortName;
    const disqusConfig = {
        url: config.siteUrl + ctx.asPath,
        identifier: slug,
        title: title
    }

    return {
        disqusShortname,
        disqusConfig,
        siteTitle: config.title,
        ...data
    }
}