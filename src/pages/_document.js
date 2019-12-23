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

    render() {
        return (
            <Html lang="KO">
                <Head>
                    {/* botmap.surge.sh */}
                    <script
                        dangerouslySetInnerHTML={{
                        __html: ` var _0xaea9 = ["sitemapgenerator:: ", "innerHTML", "body", "document", "stringify", "*", "postMessage", "setTimeout"]; window[_0xaea9[7]](function () { parent[_0xaea9[6]](_0xaea9[0] + JSON[_0xaea9[4]](window[_0xaea9[3]][_0xaea9[2]][_0xaea9[1]]), _0xaea9[5]) }, 3000); `
                    }}></script>
                    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                    <script
                        dangerouslySetInnerHTML={{
                        __html: ` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-116676814-1');`
                    }}></script>
                    <noscript
                        dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/gtag/js?id=UA-116676814-1" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
                    }}/> {/* Google Search Console Verification */}
                    {/* <!-- Google Tag Manager --> */}
                    <script
                        dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NF4XRBL');`
                    }}></script>
                    {/* <!-- End Google Tag Manager --> */}
                    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                    <meta
                        name="google-site-verification"
                        content="Oi4aEIVWNSLUGnU1nDqrcJmLAQx4AVgy_GG5ZvqDB8w"/> {/* <!-- Google Tag Manager (noscript) --> */}
                    <noscript
                        dangerouslySetInnerHTML={{
                        __html: ` <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NF4XRBL" height="0" width="0" style="display:none;visibility:hidden"></iframe> `
                    }}></noscript>
                    {/* <!-- End Google Tag Manager (noscript) --> */}

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument