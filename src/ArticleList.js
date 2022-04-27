import React, { useEffect, useState } from "react";
import Article from "./Article";
import './ArticleList'

const ArticleList = (props) => {
    const [data, setData] = useState();

    useEffect(()=> {
        fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=3')
        .then(res => res.json()).then(resData => {
            console.log(resData);
            return setData(resData)})
    }, []);

    if (!data) return <p>Loading...</p>

    return <>
        <ul>
            {data.map((item, index) => <li key={index}>{item.title}</li> )}
        </ul>
    </>
}

export default ArticleList;