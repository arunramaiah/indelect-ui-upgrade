import { React } from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';



const SocialMedia = () => {
    return (
        <div class="social-media">
        <a href="https://www.facebook.com/pages/category/Community/Indelect-TechnologiesPvtLtd-144370088984560/" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/p/CVA2AF1Buse/?utm_medium=copy_link" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/indelect-technologies-pvt-ltd/about/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.jdmart.com/GOJ-ENZ1631687855?skip" target="_blank" rel="noreferrer">
          <img src="../../assets/logos/justdial.svg" height="50px" width="100px" alt="Just Dial Logo"/>
        </a>
        <a href="https://www.indiamart.com/indelecttechonologies/" target="_blank" rel="noreferrer">
          <img src="../../assets/logos/indiamart.svg" height="50px" width="100px" alt="India Mart Logo"/>
        </a>
      </div>
    )
}

export default SocialMedia;