
import React, { useState, useEffect } from 'react';

const ImageRotation = () => {
  const images = [
    'https://via.placeholder.com/400x200?text=Image+1',
    'https://via.placeholder.com/400x200?text=Image+2',
    'https://via.placeholder.com/400x200?text=Image+3',
    'https://via.placeholder.com/400x200?text=Image+4',
  ];

  const [index, setIndex] = useState(0);

  // Go to previous image
  const prev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  // Go to next image
  const next = () => {
    setIndex((index + 1) % images.length);
  };

  // Automatic rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Image Slider with Rotation</h2>
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
        {/* Display dots for current slide */}
        {images.map((_, i) => (
          <span
            key={i}
            style={{
              height: '10px',
              width: '10px',
              margin: '0 5px',
              display: 'inline-block',
              borderRadius: '50%',
              backgroundColor: i === index ? '#333' : '#ccc',
              cursor: 'pointer',
            }}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageRotation;
