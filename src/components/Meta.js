import Head from 'next/head'
import {Fragment} from 'react'

export default function Meta(props) {

    return (
        <Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <title>{props.siteTitle}</title>
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
                }}/>
                {/* Google Search Console Verification */}
<meta name="google-site-verification" content="Oi4aEIVWNSLUGnU1nDqrcJmLAQx4AVgy_GG5ZvqDB8w" />
            </Head>
        </Fragment>
    )
}
