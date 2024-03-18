import Button from "../ui/Button/Button";
import "./Header.scss";
import HeroImage from "../../assets/heroImg.png";

const Header = () => {
  return (
    <div className="header">
      <h2>Unlock the power of electronic signatures.</h2>

      <p className="headerText">
        Swiftsign enables you to sign all your documents with ease and sign with
        assurance.
      </p>

      <div className="headerButtons">
        <Button
          text="Start Free Trial"
          backgroundColor="#D3E4FD"
          color="black"
        />
        <Button text="Create Account" />
      </div>

      <div className="headerImage">
        <img src={HeroImage} alt="hero-image" />
      </div>
    </div>
  );
};

export default Header;
