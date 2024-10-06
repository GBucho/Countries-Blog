// import { PropsWithChildren } from "react";
import "./Cardheader.mosule.css";
// import classes from "./Cardheader.mosule.css";

const CardHeader: React.FC<{ name: string }> = (props) => {
  const { name } = props;
  return <h2>{name}</h2>;
};

export default CardHeader;
