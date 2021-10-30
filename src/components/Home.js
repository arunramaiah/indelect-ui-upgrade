import React from "react";
import SocialMedia from "./SocialMedia";

const Home = () => {
  return (
    <React.Fragment>
      <div>
   
        <div class="welcome-text">
        <p class="paragraph">
          <br></br>
          <hr></hr>
          <br></br>
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
        </div>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="..\..\assets\home\pixxgen-home.png"
              data-slide-to="0"
              alt="Pixxgen Products"
              class="active"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="..\..\assets\home\shimadzu-home.png"
              data-slide-to="1"
              alt="Shimadzu Products"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="..\..\assets\home\gel-pads-home.png"
              data-slide-to="2"
              alt="Gel Pads"
            />
          </div>
        </div>
      </div>
      <div class="portfolio">
        <div class="column">
          <ul class="stylized-list-ul">
            <li class="stylized-list-li">
              <h3>Radiology</h3>
              <h5>Shimadzu X-Ray Systems</h5>
              <h5>Genuine X-Ray Systems</h5>
              <h5>Pixxgen DR Systems</h5>
            </li>
          </ul>
        </div>
        <div class="column">
          <ul class="stylized-list-ul">
            <li class="stylized-list-li">
              <h3>Human</h3>
            </li>
            <li class="stylized-list-li">
              <h3>Veterinary</h3>
            </li>
          </ul>
        </div>
        <div class="column">
          <ul class="stylized-list-ul">
            <li class="stylized-list-li">
              <h3>Neuro Surgical Stereotactic Device</h3>
            </li>
            <li class="stylized-list-li">
              <h3>Surgical Instruments and Gelpads</h3>
            </li>
          </ul>
        </div>
        <div class="column">
          <ul class="stylized-list-ul">
            <li class="stylized-list-li">
              <h3>Support</h3>
              <h5>X-Ray Equipments</h5>
              <h5>QA Services for Diagnostics Radiology Equipments</h5>
            </li>
          </ul>
        </div>
      </div>
      <footer class="page-footer">
      <SocialMedia/>
      </footer>
    </React.Fragment>
  );
};
export default Home;
