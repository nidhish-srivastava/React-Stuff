import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index === images.length - 1) {  //* WHen we reach at last, we set the index again to 0
      setIndex(0);
    } else {
      setIndex(()=>index + 1);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(()=>index - 1);
    }
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>Prev</button>
      <img src={images[index]} alt={`Slide ${index}`} width='300px'  />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
