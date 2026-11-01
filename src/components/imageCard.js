import React from "react"
import ReactDom from "react-dom/client"
function ImageCard(props) {

  return (
    <div className="image-card">

      <img
        src={props.imageUrl}
        alt={props.title}
      ></img>

      <div className="card-content">

        <h2>{props.title}</h2>

        <p>{props.description}</p>

      </div>

    </div>
  )
}

export default ImageCard