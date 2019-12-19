import Head from 'next/head'
import {Fragment} from 'react'

export default  function Meta(props) {
  
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
                <meta property="og:description" content={props.postExcerpt}/>
            </Head>
        </Fragment>
    )
}
