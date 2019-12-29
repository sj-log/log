import dynamic from 'next/dynamic'
import {object} from 'prop-types';
// components

const Layout = dynamic(() => import ("../components/Layout"), {ssr: false})
const BlogList = dynamic(() => import ("../components/BlogList"), {ssr: false})

const Index = props => {
    const allBlogs = props.allBlogs
    return (
        <Layout
            pathname="/"
            siteTitle={props.title}
            siteDescription={props.description}>
            <section>
                <BlogList allBlogs={allBlogs}></BlogList>
            </section>

        </Layout>
    );
};

export default Index;

Index.getInitialProps = async function (context) {
    const siteConfig = await import (`../data/config.json`)
    //get posts & context from folder
    const classifiedMds = (context => {

        const keys = context.keys(); // this is the sorted
        const values = keys.map(context);
        const data = keys.map((key, index) => {
            // Create slug from filename
            const slug = key
                .replace(/^.*[\\\/]/, "")
                .split(".")
                .slice(0, -1)
                .join("."); // remove hypens and dot
            const value = values[index];

            // Parse frontMatter & markdownbody in document
            const FullMdString = value.default;
            const dirtyFrontMatter = FullMdString.split(/---/g, 2);
            const cleanFM = dirtyFrontMatter[1]
            const moreCleanFM = cleanFM.split(/[\n\r]/g)

            // input into key-value obj
            let fm = moreCleanFM.reduce((obj, data) => {

                let [k,
                    v] = data.split(/:/)

                // thumbnail link catcher
                let isKeyThumbnail = k.includes("thumbnail")
                if (isKeyThumbnail) {
                    [k, v] = data.split(/thumbnail : /)
                    k = 'thumbnail'
                } else {
                    [k, v] = data.split(/:/g)
                }

                // remove blanks its head and tail proc
                (typeof v != "undefined")
                    ? v = v.replace(" ", '')
                    : v;

                var trimmedK = k.trim()
                obj[trimmedK] = v
                return obj
            }, {})

            return {FullMdString, slug, fm};
        });

        return data;

    })(await require.context("../posts", true, /\.md$/));

    return {
        allBlogs: classifiedMds,
        ...siteConfig
    }
}