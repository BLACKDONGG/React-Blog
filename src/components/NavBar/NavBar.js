import React, { Component } from 'react';
import './navbar.css'
import {Link} from "react-router-dom";
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger:false
        };
    }
    render() {
        return (
            <div className="nav">
                <div className="nav-base nav-logo">
                    <a href="https://www.ditto.ink">
                        <img width="50px" src={require('./v2-11672998199a764791de99cadf290697.jpg')} />
                    </a>
                </div>
                <div className="nav-base nav-list">
                    <span className="link-wrapper">
                        <Link to="/notes/list" target="_blank">笔记</Link>
                    </span>
                    <span className="link-wrapper">
                        <Link to="/blog/list" target="_blank">博文</Link>
                    </span>
                    <span className="link-wrapper">
                        <Link to="/recent" target="_blank">最近</Link>
                    </span>
                    <span className="link-wrapper">
                        <Link to="/link" target="_blank">友链</Link>
                    </span>
                    <span className="link-wrapper">
                        <Link to="/lab" target="_blank">实验室</Link>
                    </span>
                </div>
            </div>
        );
    }
}

export default NavBar;
