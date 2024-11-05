import { useParams } from "react-router-dom";
import { getTranslationContent } from "../home/components/Card/static/language";
import { Container } from "~/src/components/base/container/container";

export const AboutView = () => {
  const params = useParams();
  const lang = params.lang as string;
  const about = getTranslationContent(lang);

  return (
    <Container>
      <section>
        <p>{about("aboutPage")}</p>
      </section>
    </Container>
  );
};

// const handleSubmit = (payload) => {
//   axios.post("http://localhost:3000/countries", payload).then((response) => {

// const [isLoading, setIsLoading] = useState<boolean>(true);

// useEffect(() => {
//   const getCountry = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/countries");
//       setCountries(response.data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       console.log("ეშვება ნებიმისმიერ შემთხვევაში");
//     }
//   };
//   getCountry();
// axios
//   .get("https://restcountries.com/v3.1/all")
//   .then((response) => {
//     setCountries(response.data);
//     setIsLoading(false);
//   })
//   .catch((e) => {
//     console.log("catch ში შემოვიდა", e);
//   });
// fetch("https://restcountries.com/v3.1/all")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("gaerorda");
//     }
//     return response.json();
//   })
//   .then()
//   .catch((e) => {
//     console.log("catch ში შემოვიდა", e);
//   });
//   }, []);
//   return <div style={{ margin: 10 }}> {counties?.[0]?.name}</div>;
// };
