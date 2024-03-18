import "./FaqCard.scss";
import FaqIcon from "../../../assets/faqIcon.png";
import { useState } from "react";

type FaqCardProp = {
  question: string;
  answer: string;
};

const FaqCard = ({ question, answer }: FaqCardProp) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="faqCard">
      <div className="faqCardQuestion">
        <p>{question}</p>
        <img
          onClick={() => setAccordionOpen(!accordionOpen)}
          className={accordionOpen ? "flipImg" : ""}
          src={FaqIcon}
          alt="faq-icon"
        />
      </div>

      {accordionOpen && (
        <div
          className={`
        faqCardAnswer
        ${accordionOpen && "accordionOpen"}
      `}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqCard;
