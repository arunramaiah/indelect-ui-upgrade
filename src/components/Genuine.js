import React from "react";
import images from "../data/image-gallery-data";

const Genuine = () => {
    const processedImages = images.filter(item => item.manufacturer === "Genuine");
  return (
    <div class="row">
      <React.Fragment>
        {processedImages.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div class="col-lg-4 col-md-14 mb-6 mb-lg-0">
                <figure>
                  <img
                    src={processedImages[index].location}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                  />
                  <figcaption class="caption-text">{processedImages[index].title} </figcaption>
                </figure>
              </div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    </div>
  );
};

export default Genuine;
