import "./Navbar.scss";
import Logo from "../ui/Logo/Logo";
import Button from "../ui/Button/Button";
import LinkUI from "../ui/Link/LinkUI";
import MenuIcon from "../../assets/menuIcon.png";

const Navbar = () => {
  const navLinks = [
    {
      id: 1, 
      to: "#", 
      text: "Products"
    }, 
    {
      id: 2, 
      to: "#", 
      text: "Pricing"
    }, 
    {
      id: 3, 
      to: "#", 
      text: "Resources"
    }
  ]
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <Logo />
      </div>
      <div className="navbarLinks">
        {navLinks.map((navLink) => (
          <LinkUI 
            key={navLink.id}
            to={navLink.to} 
            children={navLink.text}
          />
        ))}
      </div>
      <div className="navbargetStarted">
        <LinkUI 
          children="Login"
        />

        <Button text="Start Free Trial" />
      </div>

      <div className="navbarMenuIcon">
        <img src={MenuIcon} alt="menuIcon-img" />
      </div>
    </div>
  );
};

export default Navbar;
