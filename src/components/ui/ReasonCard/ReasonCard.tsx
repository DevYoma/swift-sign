import "./ReasonCard.scss";

type ReasonCard = {
  title: string;
  text: string;
};

const ReasonCard = ({ title, text }: ReasonCard) => {
  return (
    <div className="reasonCard">
      <h3 className="reasonCardTitle">{title}</h3>
      <p className="reasonCardText">{text}</p>
    </div>
  );
};

export default ReasonCard;
