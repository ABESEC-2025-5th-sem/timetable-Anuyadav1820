import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
    const images = [
  'https://images.unsplash.com/photo-1601758123927-33d47c3b5a0b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=800&q=80',
];

  
  const [index, setIndex] = useState(0);

  
  const prev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  
  const next = () => {
    setIndex((index + 1) % images.length);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Image Slider</h2>
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        style={{ width: '400px', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={prev} style={{ marginRight: '10px', padding: '8px 16px' }}>
          Previous
        </button>
        <button onClick={next} style={{ padding: '8px 16px' }}>
          Next
        </button>
      </div>
      <div style={{ marginTop: '10px' }}>
        {/* Dots for navigation */}
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              height: '10px',
              width: '10px',
              margin: '0 5px',
              display: 'inline-block',
              borderRadius: '50%',
              backgroundColor: i === index ? '#333' : '#ccc',
              cursor: 'pointer',
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

