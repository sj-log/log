import App from 'next/app';
import React, {Fragment} from 'react';
import Router from 'next/router';
import withGA from 'next-ga';
import config from '../data/config.json';
// styling
import '../style/all.scss'

class RootApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {pageProps}
    }

    render() {

        const {Component, pageProps} = this.props;

        return (
            <Fragment>
                < Component { ...pageProps }></Component>
            </Fragment>
        )

    }

};
export default withGA(config.GATrackingID, Router)(RootApp)