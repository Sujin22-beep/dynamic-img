import React from "react"
import ReactDom from "react-dom/client"
import ImageCard from "./components/imageCard"
import "./app.css"


function App() {
    const images = [
        {
            imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
            title: "Beautiful Nature",
            description: "Enjoy the beauty of green mountains and nature."
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
            title: "Beach View",
            description: "Relax and enjoy the beautiful beach."
        },
        {

            imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500",
            title: "Mountain View",
            description: "Explore the amazing mountain landscapes."
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500",
            title: "Sunrise",
            description: "Experience the beautiful sunrise."
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
            title: "Forest",
            description: "Discover the peaceful forest environment."
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500",
            title: "Lake View",
            description: "Enjoy the peaceful view of the lake."
        }
    ]
     return (
    <>
      <div className="gallery-container">

        <h1>Image Gallery</h1>
        <p>Explore beautiful images from nature</p>

        <div className="image-grid">

          {images.map((item) => {
            return (
              <ImageCard
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
              />
            )
          })}

        </div>
      </div>
    </>
  )
}
export default App