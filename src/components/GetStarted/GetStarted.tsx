import Button from "../ui/Button/Button";
import "./GetStarted.scss";

const GetStarted = () => {
  return (
    <div className="getStarted">
      <p className="getStartedHeader">
        Effortlessly create, manage, and share your electronic signatures on the
        go.
      </p>

      <p className="getStartedText">Join the revolution today</p>

      <Button text="Start Free Trial" />
    </div>
  );
};

export default GetStarted;
