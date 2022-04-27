import React from "react";
import './Article.css'

const Article = ( { children } ) => {

 return <div className="content-news-article-container">
    <div className="content-news-article-image">
        <img src={children.imageUrl} alt="space" width='200px' height='200px'></img>
    </div>
    <h3 className="content-news-article-title">{children.title}</h3>
    <div className="content-news-article-text">{children.summary}</div>
    <a className="content-news-article-link" href={children.url}>More...</a>
</div>
}

export default Article;