import { PropsWithChildren } from "react";
import "./CardContent.module.css";

const CardContent: React.FC<PropsWithChildren> = ({ children }) => {
  console.log(children);
  return <h2>{children}</h2>;
};

export default CardContent;
