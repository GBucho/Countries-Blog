// import React, { Children } from "react";
import { Link } from "react-router-dom";
import "./article.module.css";

const Article: React.FC<React.PropsWithChildren<{ id: string }>> = ({
  id,
  children,
}) => {
  return (
    <Link style={{ color: "black", textDecoration: "none" }} to={`/home/${id}`}>
      <div> {children}</div>
    </Link>
  );
};

export default Article;
