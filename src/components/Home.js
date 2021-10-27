import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <p class="paragraph">
          Indelect Technologies Pvt.Ltd. established in the year 1995 by the
          Technocrats having over 18 years of combined expertise in technology
          and mentoring experience in advanced areas of Biomedical Engineering,
          Medical Imaging Technology and Power Electronics.
          <br></br>
          <br></br>
          Indelect, over these years has acclaimed a high reputation in the
          international markets apart from serving the domestic Indian market.
          With a sustainable and consistently growing progress, Indelect
          Technologies Pvt. Ltd. has evolved into a dominant player in the
          distribution of Biomedical, Medical Imaging & Power Electronic
          equipments. The organization has expanded vastly in its length and
          breadth and has its foot firmly grounded to diverse activities.
        </p>
        <br></br>
        <br></br>

        <div class="flex-container">
          <div>
            <ul>
              <p class="list-title">Sales</p>
              <li>Radiology</li>
              <ul>
                <li>Shimadzu X-Ray Systems</li>
                <li>Genuine X-Ray Systems</li>
                <li>Pixxgen DR Systems</li>
                <ul>
                <li>Human</li>
                <li>Veterinary</li>
              </ul>
              </ul>             
              <li>Neuro Surgical Stereotactic Device</li>
              <li>Surgical Instruments and Gelpads</li>
            </ul>
          </div>
          <div class="tile-background">
            <ul>
              <p class="list-title">Support</p>
              <li> X-Ray Equipments</li>
              <li> QA Services for Diagnostics Radiology Equipments</li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="column">
            <a href="#">
              <div class="container">
                <img src="../../assets/sample-image.jpeg" class="image"/>
                <div class="overlay">
                  <div class="text">Example 1</div>
                </div>
              </div>
            </a>
          </div>
          <div class="column">
            <a href="#">
              <div class="container">
                <img src="../../assets/sample-image.jpeg" class="image"/>
                <div class="overlay">
                  <div class="text">Example 3</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
