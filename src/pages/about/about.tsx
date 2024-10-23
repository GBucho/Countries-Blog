import { useParams } from "react-router-dom";
import { getTranslationContent } from "../home/components/Card/static/language";
import { Container } from "~/src/components/base/container/container";

const AboutView = () => {
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

export default AboutView;
