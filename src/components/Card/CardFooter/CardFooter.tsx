import { PropsWithChildren } from "react";
import "./Cardfooter.module.css";
const CardFooter: React.FC<PropsWithChildren> = ({ children }) => {
  return <h2> {children}</h2>;
};

export default CardFooter;
