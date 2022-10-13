import React, { useEffect, useState, useRef } from "react";
import Article from "./Article";
import './ArticleList.css'

const ArticleList = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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
        }
    }, [element]);


    useEffect(()=> {
        fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${page}`)
        .then(res => {
            if(!res.ok) {
                throw Error('could not fetch the data for that resource')
            }
            return res.json()
        }).then(resData => {
            setData(prev => [...resData]);
            setIsLoading(false);
        }).catch(err => 
            console.log(err))
    }, [page, isLoading]);

    return <ul>
            { !isLoading ? data.map((item, index) => <li className='content-article-list-li' ref={setElement} key={index}><Article className='content-news-article' key={index}>{item}</Article></li> ) :
            <li className="loading">Data is loading... ... ...</li>}
           
    </ul>
}

export default ArticleList;