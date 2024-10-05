// import { PropsWithChildren } from "react";
import "./Cardheader.mosule.css";
export const CardHeader: React.FC<{ name: string }> = (props) => {
  const { name } = props;
  return <h2>{name}</h2>;
};

// export default CardHeader;
