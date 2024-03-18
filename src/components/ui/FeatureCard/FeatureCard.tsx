import ExploreSwift from "../ExploreSwift/ExploreSwift";
import "./FeatureCard.scss";

type FeatureCardProp = {
  img: string;
  imgBackground: string;
  // imgPadding?: string;
  cardTitle: string;
  cardText: string;
};

const FeatureCard = ({ img, imgBackground, cardTitle, cardText }: FeatureCardProp) => {
  return (
    <div className="featureCard">
      <div className="featureCardImg" style={{ background: imgBackground }}>
        <img src={img} alt="digitalSignature" />
      </div>

      <h3 className="featureCardTitle">{cardTitle}</h3>
      {/* add the satoshi font */}
      <p className="featureCardBody">{cardText}</p>

      <div className="featureCardFooter">
        <ExploreSwift />
      </div>
    </div>
  );
};

export default FeatureCard;
