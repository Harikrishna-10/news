import {useEffect, useState} from 'react';

function Main() {
    const[articles,setArticles]=useState([]);
    const[search,setSearch]=useState("microsoft")
    
    useEffect(()=>{
        let url="https://newsapi.org/v2/everything?q=microsoft&apiKey=4e47acf9f1864c2b885a7b95294c6f77";
        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            console.log(news.articles);
            setArticles(news.articles);
        })
    },[]) 
    function readValue(value){
        setSearch(value);
        }
    function searchNews(){
        let url=`https://newsapi.org/v2/everything?q=${search}&apiKey=4e47acf9f1864c2b885a7b95294c6f77`;
        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            console.log(news.articles)
            setArticles(news.articles);
        })


    }
    useEffect(()=>{
        let url=`https://newsapi.org/v2/everything?q=${search}&apiKey=4e47acf9f1864c2b885a7b95294c6f77`;
        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            console.log(news.articles)
            setArticles(news.articles);
        })
    },[search]) 
    
    

    

    return (
        <div className="container">
        <div className="padd">
            <div className="filter">
                <input type="search" onChange={(event)=>(readValue(event.target.value))} placeholder="Search here..."/>
                <button className="but" onClick={searchNews}>search</button>
            </div>
            <h1>News Now</h1>
        {
                articles.length === 0 ?(<h2>No data</h2>):
                articles.map((articles,index)=>(
                    <div key={index}className="articles"> 
                    <div className="pad-art">
                        <div className="news-img">
                        <img src={articles.urlToImage}/>
                        </div>
                        <div className="news">
                        <h2>{articles.title}</h2>
                        <p>{articles.author}</p>
                        <p>{articles.description}</p>
                        <p>
                            <a href ={articles.url} target='blank'>
                            <button className="but">read..</button>
                            </a>
                            </p>
                        </div>
                        
                        
                        </div>
                    </div>
                ))
        }



</div>

        </div>
    );
    
}
export default Main;