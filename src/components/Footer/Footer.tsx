import "./Footer.scss";
import EmailIcon from "../../assets/emailIcon.png";
import TwitterIcon from "../../assets/twitterIcon.png";
import LinkedinIcon from "../../assets/linkedinIcon.png";
import InstagramIcon from "../../assets/InstagramIcon.png";
import FacebookIcon from "../../assets/facebookIcon.png";
import YoutubeIcon from "../../assets/YoutubeIcon.png";
import Button from "../ui/Button/Button";
import LinkUI from "../ui/Link/LinkUI";

const Footer = () => {
  const socialLinks = [
    {
      id: 1, 
      to: "#",
      img: TwitterIcon
    }, 
    {
      id: 2, 
      to: "#", 
      img: LinkedinIcon
    }, 
    {
      id: 3, 
      to: "#",
      img: InstagramIcon
    }, 
    {
      id: 4, 
      to: "#", 
      img: FacebookIcon
    }, 
    {
      id: 5, 
      to: "#", 
      img: YoutubeIcon
    }
  ]
  return (
    <div className="footer">
      <div className="footerBody">
        <div className="footerContact">
          <div className="footerContactEmail">
            <img src={EmailIcon} alt="email-icon" />
            <p>hello@swiftsign.com</p>
          </div>
          <p className="footerContactConnect">Connect with us</p>

          <div className="footerContactLinks">
            {socialLinks.map((socialLink) => (
              <LinkUI 
                key={socialLink.id} 
                children={<img src={socialLink.img} alt="twitter-icon" />}
                to={socialLink.to} 
              />
            ))}
          </div>
        </div>
        <div className="footerInput">
          <div>
            <input type="text" placeholder="Enter your email" />
            <Button text="Subscribe to our newsletter" />
          </div>
        </div>

        <div className="footerOthers">
          <div>
            <p>Cookie Policy</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>

      <p className="footerCopyRight">Copyright © 2023. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
