import defaultImg from "../assets/Default_img.png";

export default function NewsItem({title,description,src,url,author}) {
  return (
    <>
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 border" style={{ width: "18rem" }} >
        <img src={src ? src : defaultImg} alt="news" style={{height:"200",width:"250px"}} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">
           {description?description.slice(0,50):"No Description Available"}
          </p>
          <div class="author m-3">
            <pre><span>Source :<br/> {author?author:"Unknown"}</span></pre>
          </div>
          <a href={url} className="btn btn-primary">
           Read More
          </a>
        </div>
      </div>
    </>
  );
}
