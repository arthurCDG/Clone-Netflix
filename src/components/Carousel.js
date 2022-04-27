import React from "react";

const Carousel = ({ images }) => {
  return (
    <div className="carousel">
      {images.map((imageURL, indexOfImage) => {
        return (
          <img
            className="carousel-img"
            key={indexOfImage}
            src={imageURL}
            alt="imagezz"
          ></img>
        );
      })}
    </div>
  );
};

export default Carousel;
