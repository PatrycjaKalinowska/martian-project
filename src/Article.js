import React from "react";

const Article = ( { children } ) => {

 return <div className="content-news-article">
    <div className="content-news-article-image">
        <img src={children.imageUrl} alt="space" width="200" height="200"></img>
    </div>
    <h3 className="content-news-article-title">{children.title}</h3>
    <div className="content-news-article-text">{children.summary}</div>
    <a href={children.url}>More...</a>
</div>
}

export default Article;