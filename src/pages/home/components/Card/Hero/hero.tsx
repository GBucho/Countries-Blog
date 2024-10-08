import "./hero.css";
import travel from "../../../../../assets/travel.png";

export default function hero() {
  return (
    <div className="banner-photo">
      <img src={travel} className="hero-photo" />
    </div>
  );
}
