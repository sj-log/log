import { useEffect} from 'react';
import ReactGA from 'react-ga';

// components

import Header from "./Header";
import Meta from './Meta'
// styling
import '../style/all.scss'

const Layout = props => {

  useEffect(() => {
    ReactGA.initialize('UA-116676814-1')
    ReactGA.pageview(document.location.pathname)
    
    console.log('React-ga done!');
}, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour


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