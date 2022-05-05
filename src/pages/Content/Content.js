import React from "react";
import ArticleList from "./components/ArticleList";
import './Content.css';

const Content = () => {

    return <div className="content">
        <div className="content-hero-container">
            <div className="content-hero-welcome">
                <h1> Welcome to "Martian" Project</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div> 
        </div>
        <div className="content-news-container">
            <h2>Latest Space News</h2>
            <div className="content-news-articles-container">
                <ArticleList className="content-news-article-list">
                </ArticleList>
            </div>
        </div>
            
            
        
    
    
    </div>
}

export default Content;