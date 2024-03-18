import FaqCard from "../ui/FaqCard/FaqCard";
import "./FAQ.scss";

const FAQ = () => {
  const faqQuestions = [
    {
      id: 1,
      question: "How does SwiftSign work?",
      answer:
        "SwiftSign enables users to upload documents, create electronic  signatures, and apply them to the documents digitally. The signed  documents can then be securely saved or shared with others.",
    },
    {
      id: 2,
      question: "Is SwiftSign legally binding?",
      answer:
        "SwiftSign enables users to upload documents, create electronic  signatures, and apply them to the documents digitally. The signed  documents can then be securely saved or shared with others.",
    },
    {
      id: 3,
      question: "How much does SwiftSign cost?",
      answer:
        "SwiftSign enables users to upload documents, create electronic  signatures, and apply them to the documents digitally. The signed  documents can then be securely saved or shared with others.",
    },
    {
      id: 4,
      question: "Is SwiftSign secure?",
      answer:
        "SwiftSign enables users to upload documents, create electronic  signatures, and apply them to the documents digitally. The signed  documents can then be securely saved or shared with others.",
    },
    {
      id: 5,
      question: "How much does SwiftSign cost?",
      answer:
        "SwiftSign enables users to upload documents, create electronic  signatures, and apply them to the documents digitally. The signed  documents can then be securely saved or shared with others.",
    },
    {
      id: 6,
      question: "Does SwiftSign integrate with other platforms?",
      answer:
        "SwiftSign enables users to upload documents, create electronic  signatures, and apply them to the documents digitally. The signed  documents can then be securely saved or shared with others.",
    },
  ];
  return (
    <div className="faq">
      <p className="faqHeader">Frequently Asked Questions</p>

      <div className="faqBody">
        {faqQuestions.map((question) => (
          <FaqCard
            key={question.id}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
