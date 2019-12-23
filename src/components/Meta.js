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
                <link rel="manifest" crossOrigin="use-credentials" href="/manifest.json"></link>
                <link
                    rel="apple-touch-icon"
                    href="https://user-images.githubusercontent.com/35059428/71328167-e608b680-2555-11ea-940b-c337ce221b95.png"></link>
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
