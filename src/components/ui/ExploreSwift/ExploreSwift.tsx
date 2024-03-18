import "./ExploreSwift.scss";
import ArrowIcon from "../../../assets/ExploreArrowIcon.png";

const ExploreSwift = () => {
  return (
    <button className="exploreSwiftButton">
      Explore Swift <img src={ArrowIcon} alt="arrow-icon" />{" "}
    </button>
  );
};

export default ExploreSwift;
