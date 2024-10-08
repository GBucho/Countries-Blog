// import { PropsWithChildren } from "react";
import "./Cardfooter.module.css";
// import classes from "./Cardfooter.module.css";

const CardFooter: React.FC<{ Capital: string }> = (props) => {
  const { Capital } = props;
  return <h2>{Capital}</h2>;
};

export default CardFooter;
