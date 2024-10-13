import { useState } from "react";
import Article from "../article/article";
import CardHeader from "../CardHeader/CardHeader";
import "./article-list.css";
import { Link } from "react-router-dom";
import country from "../static/data";

const ArticleList: React.FC = () => {
  const [countryList, setCountryList] = useState<
    {
      name: string;
      population: string;
      capital: string;
      id: string;
      vote: number;
    }[]
  >(country);

  const handleUpvoteCountry = (id: string) => {
    const updatedCountriesList = countryList.map((mycountry) => {
      if (mycountry.id === id) {
        return { ...mycountry, vote: mycountry.vote + 1 };
      }
      return { ...mycountry };
    });

    setCountryList(updatedCountriesList);
  };

  const handleCountryVoteSort = (type: "asc" | "dec") => {
    const copiedCountriesList = [...countryList];
    if (type === "asc") {
      const sortedCountryList = copiedCountriesList.sort((a, b) => {
        return a.vote - b.vote;
      });
      setCountryList(sortedCountryList);
    }
    if (type === "dec") {
      const sortedCountryList = copiedCountriesList.sort((a, b) => {
        return b.vote - a.vote;
      });
      setCountryList(sortedCountryList);
    }
  };

  return (
    <>
      <div className="vote-stats">
        <button
          onClick={() => {
            handleCountryVoteSort("asc");
          }}
        >
          ASC
        </button>
        <button
          onClick={() => {
            handleCountryVoteSort("dec");
          }}
        >
          DEC
        </button>
      </div>
      <section className="country-list">
        {countryList.map((mycountry) => {
          return (
            <Article key={mycountry.id}>
              <CardHeader
                name={`${mycountry.name}`}
                onUpVote={() => handleUpvoteCountry(mycountry.id)}
                voteCount={mycountry.vote}
              ></CardHeader>
              <div>
                <Link
                  style={{
                    color: "blue",
                    textDecoration: "none",
                    fontSize: 24,
                  }}
                  to={`${mycountry.id}`}
                >
                  More info
                </Link>
              </div>
            </Article>
          );
        })}
      </section>
    </>
  );
};

export default ArticleList;
