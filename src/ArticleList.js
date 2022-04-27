import React, { useEffect, useState } from "react";
import Article from "./Article";
import './ArticleList.css'

const ArticleList = (props) => {
    const [data, setData] = useState();

    useEffect(()=> {
        fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=6')
        .then(res => res.json()).then(resData => {
            console.log(resData);
            return setData(resData)})
    }, []);

    if (!data) return <p>Loading...</p>

    return <ul>
            {data.map((item, index) => <li><Article className='content-news-article' key={index}>{item}</Article></li> )}
    </ul>
}

export default ArticleList;