// import { PropsWithChildren } from "react";
import "./CardContent.module.css";
// import classes from "./CardContent.module.css";

const CardContent: React.FC<{ location: string }> = (props) => {
  return <h2>{props.location}</h2>;
};

export default CardContent;
