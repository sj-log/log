import App from 'next/app';
import React, {Fragment} from 'react';
import Router from 'next/router';

// styling
import '../style/all.scss'


// Loading component
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {PageTransition} from 'next-page-transitions'



export default class RootApp extends App {
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
                        exit: 0
                    }}
                        loadingClassNames="loading-indicator">
                        <Component {...pageProps}></Component>
                        </PageTransition>
                </Fragment>

            )
        }

    }
};
