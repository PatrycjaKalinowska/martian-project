import React, { useEffect, useState, useRef } from "react";
import Article from "./Article";
import './ArticleList.css'

const ArticleList = (props) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [element, setElement] = useState(null);

    const observer = useRef (
        new IntersectionObserver((entries) => {
            const first = entries[0];
            if(first.isIntersecting) {
                 setPage(prev => prev+1)
            };
        }, {threshold: 1})
    );

    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if(currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if(currentElement) {
                currentObserver.unobserve(currentElement);
            }

        };

    }, [element]);


    useEffect(()=> {
        fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${page}`)
        .then(res => res.json()).then(resData => {
            return setData(resData)})
    }, [page]);

    if (!data) return <p className="loading">Data is loading... ... ...</p>

    return <ul>
            {data.map((item, index) => <li ref={setElement} key={index}><Article className='content-news-article' key={index}>{item}</Article></li> )}
    </ul>
}

export default ArticleList;