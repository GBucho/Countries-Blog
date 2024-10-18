// import React, { Children } from "react";
// import { Link } from "react-router-dom";

// const Article: React.FC<React.PropsWithChildren<{ id: string }>> = ({
//   id,
//   children,
// }) => {
//   return (
//     <Link style={{ color: "black", textDecoration: "none" }} to={`/home/${id}`}>
//       <div> {children}</div>
//     </Link>
//   );
// };
import React, { CSSProperties } from "react";

interface ArticleProps {
  children: React.ReactNode;
  style?: CSSProperties; // Optional style prop
}

const Article: React.FC<ArticleProps> = ({ children, style }) => {
  return (
    <div style={style}>
      {" "}
      {/* Apply the style prop here */}
      {children}
    </div>
  );
};

export default Article;

// import "./article.module.css";

// const Article: React.FC<React.PropsWithChildren> = ({ children }) => {
//   return <div> {children}</div>;
// };

// export default Article;
