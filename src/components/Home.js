import React,{Component} from 'react';
import Layout from '../components/Layout.js';
import './Content/content.css';
import './Footer/footer.css';
import '../assets/css/header.css';
import Music from "./Music/Music";
// import Location from "./Location";

export default class Home extends Component{
    render(){
        return (
            <div className="header-content-footer">
                <Layout/>
                <Music/>
            </div>
        );
    }
}
