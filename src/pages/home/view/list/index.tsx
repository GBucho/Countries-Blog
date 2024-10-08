import Hero from "../../components/Card/Hero/hero";
import { lazy } from "react";
import { country } from "../../static/dummy-data";
import Article from "../../components/Card/article/article";
import ArticleList from "../../components/Card/article-list/article-list";
import "./content.css";

const LazyCardHeader = lazy(
  () => import("../../components/Card/CardHeader/CardHeader")
);

// const LazyCardContent = lazy(
//   () => import("../../components/Card/CardContent/CardContent")
// );

// const LazyCardFooter = lazy(
//   () => import("../../components/Card/CardFooter/CardFooter")
// );

const ArticlesListView = () => {
  return (
    <>
      <div className="card-content">
        <Hero />
        <div className="articleList">
          <ArticleList>
            <Article id={country[0].id}>
              <LazyCardHeader name={`${country[0].name}`}></LazyCardHeader>
              {/* <LazyCardContent
              Population={`Population - ${country[0].population}`}
            ></LazyCardContent>
            <LazyCardFooter
              Capital={`Capital - ${country[0].capital}`}
            ></LazyCardFooter> */}
            </Article>

            <br></br>
            <Article id={country[1].id}>
              <LazyCardHeader name={`${country[1].name}`}></LazyCardHeader>
              {/* <LazyCardContent
              Population={`Population - ${country[1].population}`}
            ></LazyCardContent>
            <LazyCardFooter
              Capital={`Capital - ${country[1].capital}`}
            ></LazyCardFooter> */}
            </Article>

            <br></br>
            <Article id={country[2].id}>
              <LazyCardHeader name={`${country[2].name}`}></LazyCardHeader>
              {/* <LazyCardContent
              Population={`Population - ${country[2].population}`}
            ></LazyCardContent>
            <LazyCardFooter
              Capital={`Capital - ${country[2].capital}`}
            ></LazyCardFooter> */}
            </Article>
            <br></br>

            <Article id={country[3].id}>
              <LazyCardHeader name={` ${country[3].name}`}></LazyCardHeader>
              {/* <LazyCardContent
              Population={`Population - ${country[3].population}`}
            ></LazyCardContent>
            <LazyCardFooter
              Capital={`Capital - ${country[3].capital}`}
            ></LazyCardFooter> */}
            </Article>
          </ArticleList>
        </div>
      </div>
    </>
  );
};

export default ArticlesListView;
