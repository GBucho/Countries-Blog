import { useParams } from "react-router-dom";
import "./single.css";
import { Container } from "~/src/components/base/container/container";
import { getTranslationContent } from "../../components/Card/static/language";
import { useState } from "react";
import { Country } from "../../components/Card/article-list/article-list";
import { getCountries } from "~/src/api/countries";
import { useQuery } from "@tanstack/react-query";

const SingleArticleView = () => {
  const [myCountry, setMyCountry] = useState<Country | null>(null);

  const { id, lang } = useParams();
  console.log(setMyCountry, id);

  const itemTranslation = getTranslationContent(lang);

  const notFound = getTranslationContent(lang);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["Country-List"],
    queryFn: getCountries,
    retry: 0,
  });

  console.log(data);
  console.log(isLoading);
  console.log(isError);

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/countries/${id}`).then((responce) => {
  //     setMyCountry(responce.data);
  //     console.log(responce.data);
  //   });
  // }, [id]);

  // useEffect(() => {

  // getCountries().then((myCountry) => setMyCountry(myCountry));

  // const getCountries = async () => {
  //   try {
  //     const responce = await axios.get(
  //       `http://localhost:3000/countries/${id}`
  //     );
  //     setMyCountry(responce.data);
  //     console.log(responce.data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log("ეშვება ნებისმიერ შემთხვევაში");
  //   }
  // };
  // getCountries();

  // }, [id]);

  //mekargeba ID ????

  if (!myCountry) {
    return <div> {notFound("notfound")}</div>;
  }

  return (
    <div>
      {isLoading ? "Is Loading" : null}
      {isError ? " Is Error " : null}
      {/* <Container>
        {data?.map((country: any) => {
          return country.name;
        })}
      </Container> */}
      <Container>
        <div className="country-details">
          <span>
            {itemTranslation("name")} - {myCountry?.name}
          </span>
          <span>
            {itemTranslation("population")} - {myCountry?.population}{" "}
          </span>
          <span>
            {itemTranslation("capital")} - {myCountry?.capital}
          </span>
        </div>
      </Container>
    </div>
  );
};
export default SingleArticleView;
