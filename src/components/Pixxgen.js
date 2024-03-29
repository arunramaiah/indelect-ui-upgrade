import React from "react";
import images from "../data/image-gallery-data";

const Pixxgen = () => {
    const processedImages = images.filter(item => item.manufacturer === "Pixxgen");
  return (
    <div class="row">
      <React.Fragment>
        {processedImages.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 shadow">
                <figure>
                  <img
                    src={processedImages[index].location}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                  />
                  <figcaption class="caption-text"> </figcaption>
                </figure>
              </div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    </div>
  );
};

export default Pixxgen;