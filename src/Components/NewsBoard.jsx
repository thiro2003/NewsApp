import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

export default function NewBoard({category}) {
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
  fetch(url).then((res)=>res.json()).then((data)=>setArticles(data.articles))

  },[category])
  console.log(import.meta.env.VITE_API_KEY)
  return (
   <div className="container mt-4">
  <h2 className="text-center mb-4">
    Latest <span className="badge bg-danger">News</span>
  </h2>

  <div className="d-flex flex-wrap justify-content-center gap-4">
    {articles && articles.length > 0 ? (
  articles.map((news, index) => (
    <NewsItem
      key={index}
      title={news.title}
      description={news.description}
      src={news.urlToImage}
      url={news.url}
      author={news.author}
    />
  ))
) : (
  <p>No news available</p>
)}

  </div>
</div>


  )
}
