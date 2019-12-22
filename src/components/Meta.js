import Head from 'next/head'
import {Fragment} from 'react'

export default function Meta(props) {

    return (
        <Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="theme-color" content="#000000"></meta>
                <link
                    rel="icon"
                    href="https://user-images.githubusercontent.com/35059428/71327996-5cf08000-2553-11ea-9bf3-b536be607d98.png"></link>
                <link rel="manifest" href="/manifest.json"></link>
                <link rel="apple-touch-icon" href="https://user-images.githubusercontent.com/35059428/71328167-e608b680-2555-11ea-940b-c337ce221b95.png"></link>
                <title>{props.siteTitle}</title>
                <meta
                    name="google-site-verification"
                    content="Oi4aEIVWNSLUGnU1nDqrcJmLAQx4AVgy_GG5ZvqDB8w"/>
                <meta name="Description" content={props.postExcerpt}></meta>
                <meta name="robots" content="index"/>
                <meta property="og:title" content={props.siteTitle}/>
                <meta property="og:type" content="article"/>
                <meta property="og:url" content={props.siteUrl}/>
                <meta property="og:image" content={props.postThumbnail}/>
                <meta property="og:description" content={props.postExcerpt}/> {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}

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
            </Head>
        </Fragment>
    )
}
