import { useParams } from "react-router-dom";
import Hero from "../../components/Card/Hero/hero";

import ArticleList from "../../components/Card/article-list/article-list";
import "./content.css";

const ArticlesListView = () => {
  const { lang } = useParams();
  console.log(lang);
  return (
    <>
      <div className="card-content">
        <Hero />
        <div className="articleList">
          <ArticleList />
        </div>
      </div>
    </>
  );
};

export default ArticlesListView;
