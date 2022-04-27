import React from "react";
import ArticleList from "./ArticleList";

const Content = () => {

    return <div className="content">
        <div className="content-hero">
            <div className="content-hero-welcome">
                <h1> Welcome to "Martian" Project</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
            <div className="content-news">
                <div className="content-news-container">
                    <h2>Space News</h2>
                    <div className="content-news-articles-container">
                        <ArticleList>
                        </ArticleList>
                    </div>
                </div>
            </div>
            
            
        </div>
    
    
    </div>
}

export default Content;