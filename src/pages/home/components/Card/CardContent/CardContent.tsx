// import { PropsWithChildren } from "react";
import "./CardContent.module.css";
// import classes from "./CardContent.module.css";

const CardContent: React.FC<{ Population: string }> = (props) => {
  const { Population } = props;
  return <h2>{Population}</h2>;
};

export default CardContent;
