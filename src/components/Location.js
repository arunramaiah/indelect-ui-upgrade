import { React } from "react";

const iframe =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31090.149390425795!2d80.1590560786839!3d13.08215136012901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666a322c7eed%3A0x15cbbff0d16a7972!2sIndelect%20Technologies.Pvt.Ltd!5e0!3m2!1sen!2sin!4v1632380457902!5m2!1sen!2sin" width="1200" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

const Iframe = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
};

const Location = () => {
  return (
    <div class="bg-color">
      <div className="flex-container">
        <div className="google-maps">
          <div className="google-maps-heading">Our Location</div>
          <Iframe iframe={iframe} />
        </div>
        {/* <Enquiry /> */}
        <div>
          <div>
            <h6 class="google-maps-heading">Contact</h6>
            <p><i class="fas fa-home me-3"></i>#15/53, 1st Floor, Thirunagar, Villivakkam, Chennai - 600 095 </p>
            <p>
              <a href="mailto:salesindelect@gmail.com">
                <i class="fas fa-envelope me-3"></i>
                salesindelect@gmail.com
              </a>
            </p>
            <p>
              <i class="fas fa-phone me-3"></i> Sales: + 91 93802 43402
            </p>
            <p>
              <i class="fas fa-phone me-3"></i> Service: + 91 93802 43402
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
