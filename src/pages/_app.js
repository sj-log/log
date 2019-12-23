import App from 'next/app';
import React, {Fragment} from 'react';
import Router from 'next/router';
import withGA from 'next-ga';
import config from '../data/config.json';
// styling
import '../style/all.scss'


// Loading component
// import Loader from 
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {PageTransition} from 'next-page-transitions'

// client side rendering
import dynamic from 'next/dynamic'
const Loader = dynamic(()=>import('react-loader-spinner'),{ssr:false})


class RootApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
        return { pageProps }
    }        
    
    state = {
        isLoading: false
    };
    componentDidMount() {
        Router
            .events
            .on('routeChangeStart', url => this.setState({isLoading: true}));
        Router
            .events
            .on('routeChangeComplete', () => this.setState({isLoading: false}));
        
        Router
            .events
            .on('routeChangeError', () => console.log("3"));
    }
  

    render() {

        const {Component, pageProps} = this.props;
        const {isLoading} = this.state;

        if (isLoading) {
            return (
                <Fragment>
              < Loader className = 'load-spinner' type = "MutatingDots" color = "Grey" height = {
                        100
                    }
                    width = {
                        100
                    }
                    timeout = {
                        3000
                    } />


                </Fragment>
            )
        } else {
            return (
                <Fragment>
                   <PageTransition
                        timeout={400}
                        classNames="page-transition"
                        loadingComponent={null}
                        loadingDelay={3500}
                        loadingTimeout={{
                        enter: 400,
                        exit: 5000
                    }}
                        loadingClassNames="loading-indicator">
                        <Component {...pageProps}></Component>
                        </PageTransition>
                </Fragment>

            )
        }

    }
};
export default withGA(config.GATrackingID, Router)(RootApp)