import { React } from "react";
import Enquiry from "./Enquiry";
import SocialMedia from "./SocialMedia";

const iframe =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.978745087113!2d80.2014911148706!3d13.100533015580488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526576cd3c5eb9%3A0xe2ded01e55cf55fe!2sIndelect%20Technologies%20Pvt%20Limited!5e0!3m2!1sen!2sin!4v1631687052910!5m2!1sen!2sin" width="1400" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

const Iframe = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
};

const Contact = () => {
  return (
    <div>
        <div className="flex-container">
          <Enquiry />
          <div class="address-container">
            <div class="address-heading">Address</div>
            <p class="address-title">Indelect Technologies Pvt Limited</p>
            <p class="address-text">Address: 
              #15/53, 1st Floor, Thirunagar, Villivakkam, Chennai-600049.
            </p>
            <p class="address-text">Sales: +91 93802 43402 </p>
            <p class="address-text">Service Support:+91 93825 43299 </p>
            <p class="address-text">Email:
              <a href="mailto:sales@indelect.com"> sales@indelect.com</a>
            </p>
          </div>  
        </div>
        <div className="google-maps">
            <div className="google-maps-heading">Our Location</div>
            <Iframe iframe={iframe} />
          </div>
    </div>
  );
};

export default Contact;
