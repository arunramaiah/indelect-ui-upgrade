import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <br></br>
        <br></br>
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
      
          <li class="stylized-list-li">
            <h3>Human</h3> </li>
            
          <li class="stylized-list-li">
            <h3>Veterinary</h3> 
          </li>
          </ul>
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
        <h4> Our Partners </h4>
        <div class="footer-image">
          <img src="..\..\assets\shimadzu-logo.png" width="400" height="100" />
          <img src="..\..\assets\pixxgen-logo.png" width="200" height="100" />
          <img src="..\..\assets\genuine-logo.png" width="200" height="100"/>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Home;
