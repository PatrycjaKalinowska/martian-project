import React from "react";
import ArticleList from "./components/ArticleList";
import './News.css';

const News = () => {

    return <div  className="content">
        <div className="content-news-container" >
            <h2>Latest Space News</h2>
            <div className="content-news-articles-container">
                <ArticleList className="content-news-article-list">
                </ArticleList>
            </div>
        </div>    
    </div>
}

export default News;