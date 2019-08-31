import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';
import Services from './Services';
import Footer from './Footer';

export default class Main extends Component {
    render() {
        return(
            <div>
                <Menu />
                <div className="container">
                    <Header />
                </div>
                <Services />
                <Footer />
            </div>
        )
    }
}