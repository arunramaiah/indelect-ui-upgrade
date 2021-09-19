import React from "react";
import installations from "../data/installation-data";

const Customers = () => {
  return (
    <React.Fragment>
    
      <div class="text-container">
        <p class="main-heading">Our Customers</p>
        <p class="paragraph">
          Within a short span of time, Indelect as an organization has had the
          great privilege of working with a number of prominent organizations
          and individuals. With an enormous base of clientele, growing at a
          sound pace, Indelect aspires to build long lasting ties by providing
          world class services and solutions
        </p>
        <ul class="list-unstyled">
          {installations.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <li> &#10070; {item.location} </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Customers;
