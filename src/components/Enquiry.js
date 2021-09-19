import { React } from "react";
import emailjs from "emailjs-com";

const Enquiry = () => {
  function sendEmail(e) {
    e.preventDefault();
    //console.log('Clicked Send');
    const btn = document.getElementById("button");
    btn.value = "Sending...";
    emailjs
      .sendForm(
        "indect-web-enquiry",
        "template_qq8g54v",
        e.target,
        "user_QSog1g5jxVpfjLGuagGzF"
      )
      .then(
        (result) => {
          console.log(result.text);
          btn.value = "Enquiry Sent!";
        },
        (error) => {
          console.log(error.text);
          btn.value = "Send Email";
        }
      );
  }

  return (
    <div className="form-container">
      <div className="form-heading">Send an enquiry</div>
      <div className="contact-form">
      <form onSubmit={sendEmail}>
        <div className="mb-3 row">
          <label>Name</label>
          <input type="text" name="from_name" id="from_name" placeholder="Your Name" />
        </div>
        <div className="mb-3 row">
          <label>Email Address</label>
          <input
            type="text"
            name="from_email"
            id="from_email"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3 row">
          <label>Message</label>
          <textarea name="message" id="message" rows="5" placeholder="Your Enquiry" />
        </div>  
        <div className="btn btn-default btn-lg">
          <input type="submit" id="button" value="Send Enquiry" />
        </div>
      </form>
      </div>
    </div>
  );
};

export default Enquiry;
