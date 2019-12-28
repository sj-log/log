// components
import Header from "./Header";
import Meta from './Meta'

const Layout = props => {

    return (
                <section className={`layout ${props.pathname == "info" && "info_page"}`}>
                    <Meta
                        siteTitle={props.siteTitle}
                        siteDescription={props.siteDescription}
                        postExcerpt={props.postExcerpt}
                        siteUrl={props.siteUrl}
                        postThumbnail={props.postThumbnail}/>

                    <div className="content">{props.children}</div>
                    <Header siteTitle={props.siteTitle}/>

                </section>
            );
        }

export default Layout;