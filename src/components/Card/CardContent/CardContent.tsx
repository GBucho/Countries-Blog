// import { PropsWithChildren } from "react";
import "./CardContent.module.css";

export const CardContent: React.FC<{ location: string }> = (props) => {
  return <h2>{props.location}</h2>;
};

// export default CardContent;
