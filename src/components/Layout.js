import React, { Component } from 'react';
import NavBar from "./NavBar/NavBar";
import '../assets/css/layout.css';
import Footer from "./Footer/Footer";
import Content from "./Content/Content";
class Layout extends Component {
    render() {
        return (
            <div className="header-header">
                <NavBar/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
