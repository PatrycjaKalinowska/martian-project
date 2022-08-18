import React, { useEffect } from "react";
import ArticleList from "./components/ArticleList";
import './Content.css';

const Content = () => {

    return <div  className="content">
        <div className="content-hero-container">
            <div className="content-hero-welcome">
                <h1> Welcome Space Rangers!</h1>
                <p>This is a place where you can find some interesting information about space-related topics.
                You can read the latest news, see some photos taken by Mars rovers, check the weather on Mars and more. Enjoy! </p>
            </div> 
        </div>
        <div className="content-news-container" >
            <h2>Latest Space News</h2>
            <div className="content-news-articles-container">
                <ArticleList className="content-news-article-list">
                </ArticleList>
            </div>
        </div>
            
            
        
    
    
    </div>
}

export default Content;