import * as React from 'react'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

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
                    <h1>{frontmatter.title}</h1>
                    <h3>{reformatDate(frontmatter.date)}</h3>
                </div>
                <div className="blog__body">
                    <ReactMarkdown source={markdownBody}/>
                </div>
            </article>

        </Layout>
    );

}

BlogTemplate.getInitialProps = async function (ctx) {
    const {slug} = ctx.query
    const content = await import (`../../posts/${slug}.md`)
    const config = await import (`../../data/config.json`)
    const data = matter(content.default);
    return {
        siteTitle: config.title,
        ...data
    }
}