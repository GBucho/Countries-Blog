// import { PropsWithChildren } from "react";
import "./Cardfooter.module.css";
export const CardFooter: React.FC<{ population: string }> = (props) => {
  return <h2> {props.population}</h2>;
};

// export default CardFooter;
