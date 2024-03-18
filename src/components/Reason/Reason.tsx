import "./Reason.scss";
import ReasonImage from "../../assets/reasonImg.png";
import ReasonCard from "../ui/ReasonCard/ReasonCard";

const Reason = () => {
  const reasonData = [
    {
      id: 1,
      title: "Efficiency",
      text: "SwiftSign streamlines the signing process, allowing users to sign documents quickly and effortlessly, saving valuable time.",
    },
    {
      id: 2,
      title: "Convenience",
      text: "With SwiftSign, users can sign documents anytime, anywhere, using their  preferred device, eliminating the need for printing, scanning, or  faxing.",
    },
    {
      id: 3,
      title: "Collaboration",
      text: "Collaborate seamlessly with others by sending documents for signature,  tracking the signing progress, and receiving notifications when  documents are signed.",
    },
  ];

  return (
    <div className="reason">
      <h2 className="reasonHeader">
        Effortlessly create, manage, and share your electronic signatures on the
        go.
      </h2>

      <div className="reasonBody">
        <div className="reasonBodyLeft">
          <p>Personalize and sign with ease</p>
          <div className="reasonBodyLeftImg">
            <img src={ReasonImage} alt="reason-image" />
          </div>
        </div>

        <div className="reasonBodyRight">
          {reasonData.map((reasonDatum) => (
            <ReasonCard
              key={reasonDatum.id}
              title={reasonDatum.title}
              text={reasonDatum.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reason;
