import DigitalSignatureCreation from "../../assets/digitalSignatureCreation.png";
import FastDocumentSharing from "../../assets/fastDocumentSharing.png";
import MultipleDocumentSharing from "../../assets/multipleDocSupport.png";
import FeatureCard from "../ui/FeatureCard/FeatureCard";
import "./Features.scss";

const Features = () => {
  const cardData = [
    {
      id: 1,
      title: "Digital Signature Creation",
      text: "Allow users to create digital signatures using various  input methods such as drawing with a stylus or finger, uploading an  image of their handwritten signature, or using a predefined font",
      image: DigitalSignatureCreation,
      background: "#F3F3F3",
      imagePadding: "2.5rem 3rem",
    },
    {
      id: 2,
      title: "Multiple Document Support",
      text: "Allow users to create digital signatures using various  input methods such as drawing with a stylus or finger, uploading an  image of their handwritten signature, or using a predefined font",
      image: MultipleDocumentSharing,
      background: "#F8F1DE",
      imagePadding: "36px",
    },
    {
      id: 3,
      title: "Fast Document Sharing",
      text: "Allow users to create digital signatures using various  input methods such as drawing with a stylus or finger, uploading an  image of their handwritten signature, or using a predefined font",
      image: FastDocumentSharing,
      background: "#F6FCE7",
      imagePadding: "36px",
    },
    {
      id: 4,
      title: "Team Collaboration",
      text: "Allow users to create digital signatures using various  input methods such as drawing with a stylus or finger, uploading an  image of their handwritten signature, or using a predefined font",
      image: DigitalSignatureCreation,
      background: "#EFE9F8",
      imagePadding: "2.5rem 3rem",
    },
  ];
  return (
    <div className="features">
      <div className="featuresList">
        {cardData.map((cardDatum) => (
          <FeatureCard 
            key={cardDatum.id}
            cardText={cardDatum.text}
            cardTitle={cardDatum.title}
            img={cardDatum.image}
            imgBackground={cardDatum.background}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
