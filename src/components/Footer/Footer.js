import React,{Component} from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            info:[
                {
                    blog_id: 39,
                    title: "axios远程获取markdown文件中，使用代理解决，跨域资源共享"
                },
                {
                    blog_id: 26,
                    title: "React+React-Marked+React-Syntax-Highlighter实现代码高亮"
                },
                {
                    blog_id: 25,
                    title: "apply与call"
                },
                {
                    blog_id: 24,
                    title: "Array与Object的循环比较"
                }
            ],
            ratings: []
        }
    }
    getTheLastBlog=()=>{
        axios.get('/thisblog/api/TheLast')
            .then((response)=>{
                this.setState({
                    info:response.data
                })
            })
    };
    getTheLastRatings=()=>{
        axios.get('/thisblog/api/GetTheLastRatings')
            .then((response)=>{
                this.setState({
                    ratings: response.data
                })
            })
    };
    componentDidMount() {
        this.getTheLastBlog();
        this.getTheLastRatings();
    }

    render(){
        return(
            <div className="footer">
               <div className="footer-information">
                   <i className="the-design"></i>
                   <p className="record">闽ICP备19004486号</p>
                   <p>Theme is Reference By Sangsir.com</p>
                   <p>©2019 BLACKDONG</p>
               </div>
               <div className="footer-article">
                   <p className="footer-article-title">最近的文章</p>
                   {
                       this.state.info.map((v,k)=>{
                           return(
                               <Link to={`/display?id=${v.blog_id}`}>
                                   <p className="title">
                                       {
                                           v.title
                                       }
                                   </p>
                               </Link>
                           )
                       })
                   }
               </div>
               <div className="footer-comment">
                   <p className="footer-comment-title">最新的评论</p>
                   {
                       this.state.ratings.map((rating,key)=>{
                           return(
                               <Link to={`/display?id=${rating.blog_id}`}>
                                   <p className="title">
                                       {`${rating.name}: ${rating.words}`}
                                   </p>
                               </Link>
                           )
                       })
                   }
               </div>
            </div>
        )
    }
}
