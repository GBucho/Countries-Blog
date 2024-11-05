import { FormEvent, useEffect, useState } from "react";
import Article from "../article/article";
import CardHeader from "../CardHeader/CardHeader";
import "./article-list.css";
import { Link, useParams } from "react-router-dom";
import CountryCreateForm from "../country-create-form/country-create-form";

import { getTranslationContent } from "../static/language";

import axios from "axios";

export interface Country {
  id: string;
  name: string;
  population: string;
  capital: string;
  image: string;
  vote: number;
}
const ArticleList: React.FC = () => {
  const params = useParams();
  const lang = params.lang as "ka" | "en";
  const t = getTranslationContent(lang);

  // const [countryList, dispatch] = useReducer(countryReducer, country[lang]);

  const [counryList, setCountryList] = useState<Array<Country>>([]);

  const getList = () => {
    axios.get("http://localhost:3000/countries").then((res) => {
      setCountryList(res.data);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  // const handleUpvoteCountry = (id: string) => {
  //   dispatch({ type: "upvote", payload: { id } });
  // };

  // const handleCountryVoteSort = (sortType: "asc" | "dec") => {
  //   dispatch({ type: "sort", payload: { sortType } });
  // };

  const handleCreateCountry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const countryObject: any = {};
    const formData = new FormData(e.currentTarget);
    for (const [key, value] of formData) {
      countryObject[key] = value;
    }

    if (countryObject.capital.length < 3) {
      alert("double check please the Capital length");
    }
    axios.post("http://localhost:3000/countries", countryObject).then(() => {
      console.log("created");
      getList();
    });
    // dispatch({ type: "create", payload: { countryObject } });
  };

  const handleCountryDelete = (id: string) => {
    // dispatch({ type: "delete", payload: { id } });
    axios.delete(`http://localhost:3000/countries/${id}`).then(() => {
      console.log("deleted?");
      getList();
    });
  };

  // const handleCountryRestore = (id: string) => {
  //   dispatch({ type: "restore", payload: { id } });
  // };

  return (
    <>
      <div className="vote-stats">
        {/* <button onClick={() => handleCountryVoteSort("asc")}>ASC</button>
        <button onClick={() => handleCountryVoteSort("dec")}>DEC</button> */}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CountryCreateForm onCountryCreate={handleCreateCountry} />
      </div>
      <section className="country-list">
        {counryList
          // .sort((a, b) => {
          //   if (a.deleted && !b.deleted) return 1;
          //   if (!a.deleted && b.deleted) return -1;
          //   return 0;
          // })
          .map((mycountry) => {
            return (
              <Article
                key={mycountry.id}
                // style={{
                //   opacity: mycountry.deleted ? 0.5 : 1,
                // }}
              >
                <CardHeader
                  name={`${mycountry.name}`}
                  onUpVote={() => {}}
                  // onUpVote={() => handleUpvoteCountry(mycountry.id)}
                  voteCount={mycountry.vote}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    textAlign: "center",
                  }}
                >
                  <span>
                    <Link
                      style={{
                        color: "blue",
                        textDecoration: "none",
                        fontSize: 24,
                      }}
                      to={`${mycountry.id}`}
                    >
                      {t("moreinfo")}
                    </Link>
                  </span>

                  <span
                    style={{
                      color: "red",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCountryDelete(mycountry.id);
                    }}
                  >
                    Delete
                  </span>
                </div>
              </Article>
            );
          })}
      </section>
    </>
  );
};

export default ArticleList;
