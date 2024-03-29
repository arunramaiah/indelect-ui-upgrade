import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <div class="welcome-text">
        <p class="paragraph">
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
              class="d-block w-100 active"
              src="..\..\assets\home\pixxgen-home.png"
              data-slide-to="0"
              alt="Pixxgen Products"
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
            &#9864; Radiology
            <li class="stylized-list-li">&#10003; Shimadzu X-Ray Systems</li>
            <li class="stylized-list-li">&#10003; Genuine X-Ray Systems</li>
            <li class="stylized-list-li">&#10003; Pixxgen DR Systems</li>
          </ul>
        </div>
        <div class="column">
          <ul class="stylized-list-ul">&#9864; Human</ul>
          <ul class="stylized-list-ul">&#9864; Veterinary</ul>
        </div>
        <div class="column">
          <ul class="stylized-list-ul">
          &#9864; Neuro Surgical Stereotactic Device
          </ul>
          <ul class="stylized-list-ul">
          &#9864; Surgical Instruments and Gelpads
          </ul>
        </div>
        <div class="column">
          <ul class="stylized-list-ul"> &#9864; Support
            <li class="stylized-list-li">&#10003; X-Ray Equipments </li>
            <li class="stylized-list-li">&#10003; QA Services for Diagnostics Radiology Equipments </li>
          </ul>
        </div>
      </div>

    </React.Fragment>
  );
};
export default Home;
