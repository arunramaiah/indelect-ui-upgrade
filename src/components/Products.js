import React from "react";
import images from "../data/image-gallery-data";

const Products = () => {
  return (
    <div class="bg-color">
    <div class="row">
      <React.Fragment>
        {images.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <figure>
                  <img
                    src={images[index].location}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                  />
                  <figcaption class="caption-text">{images[index].title} </figcaption>
                </figure>
              </div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
      </div>
    </div>
  );
};

export default Products;
