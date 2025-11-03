import React, { useState } from "react";

function App() {
  
  const images = [
  "https://picsum.photos/id/1011/400/200",
  "https://picsum.photos/id/1015/400/200",
  "https://picsum.photos/id/1016/400/200",
  "https://picsum.photos/id/1020/400/200",
  "https://picsum.photos/id/1024/400/200"
];


  
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  
  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="img-slider" style={{ textAlign: "center" }}>
      <h1>Image Slider Component</h1>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: "400px", height: "200px", marginBottom: "10px" }}
      />
      <div className="slider-btns">
        <button onClick={prev} style={{ marginRight: "10px" }}>
          Left
        </button>
        <button onClick={next}>Right</button>
      </div>
    </div>
  );
}

export default App;
