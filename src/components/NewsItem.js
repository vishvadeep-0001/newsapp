import React from 'react'

const NewsItem =(props)=>{
        let { title, description, imageUrl, newsUrl, publishedAt, author, source} = props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl ? imageUrl : ""} className="card-img-top" alt="" style={{ height: "150px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {source}
                        </span></h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                        <p className="card-text mb-0 mt-1"><small className="text-muted">{new Date(publishedAt).toGMTString()}</small></p>
                        <p className="card-text mb-0"><small className="text-muted">{!author ? "Unknown" : author}</small></p>
                    </div>

                </div>
            </div>
        )
}
export default NewsItem
