import Layout from "../components/Layout";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";



export default function Info(props) {
  const frontmatter = props.data
  const markdownBody = props.content
  return (
    <Layout pathname='Info' bgColor={frontmatter.background_color} siteTitle={props.title}>
    <section className="info_blurb">
      <ReactMarkdown escapeHtml={true} source={markdownBody} />
    </section>
  </Layout>
  );
}


Info.getInitialProps = async function() {
  const content = await import(`../data/info.md`)
  const config = await import(`../data/config.json`)
  const data = matter(content.default)

  return {
    title: config.title,
    ...data
  }
}