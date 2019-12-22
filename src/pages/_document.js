import ReactGA from 'react-ga';

// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file ./pages/_document.js
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps
        }
    }

    componentDidMount() {

        ReactGA.initialize('UA-116676814-1')
        ReactGA.pageview(document.location.pathname)

    }

    render() {
        return (
            <Html lang="KO">
                <Head/>
                <body>
                    {/* <!-- Google Tag Manager (noscript) --> */}
                    <noscript
                        dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NF4XRBL" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                    }}></noscript>
                    {/* <!-- End Google Tag Manager (noscript) --> */}
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument