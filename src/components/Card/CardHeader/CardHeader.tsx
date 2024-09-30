import { PropsWithChildren } from "react";
import "./Cardheader.mosule.css";
const CardHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return <h2>{children}</h2>;
};

export default CardHeader;
