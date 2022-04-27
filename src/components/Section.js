import React from "react";

import Carousel from "./Carousel";

const Section = ({ categoryObject }) => {
  return (
    <div>
      <p>{categoryObject.category}</p>

      <Carousel images={categoryObject.images} />
    </div>
  );
};

export default Section;
