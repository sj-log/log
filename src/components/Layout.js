import Header from "./Header";
import Meta from './Meta'

import '../style/all.scss'

export default function Layout(props) {
  return (
    <section
    className={`layout ${
      props.pathname == "info" &&
      "info_page"}`
    }
  >
    <Meta
      siteTitle={props.siteTitle}
      siteDescription={props.siteDescription}
    />
    <div className="content">{props.children}</div>
    <Header siteTitle={props.siteTitle} />
  
  </section>
  );
}