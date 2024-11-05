import React, { CSSProperties } from "react";

interface ArticleProps {
  children: React.ReactNode;
  style?: CSSProperties; // Optional style prop
}

const Article: React.FC<ArticleProps> = ({ children, style }) => {
  return <div style={style}>{children}</div>;
};

export default Article;
