import Hero from "../../components/Card/Hero/hero";

import ArticleList from "../../components/Card/article-list/article-list";
import "./content.css";

const ArticlesListView = () => {
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
