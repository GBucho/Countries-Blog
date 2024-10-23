import { getTranslationContent } from "~/src/pages/home/components/Card/static/language";
import classes from "./footer.module.css";
import { useParams } from "react-router-dom";
import { Container } from "../container/container";

export default function Footer() {
  const params = useParams();
  const lang = params.lang as string;
  console.log(lang);

  const t = getTranslationContent(lang);

  return (
    <Container>
      <footer className={classes.footerRoot}>
        © {new Date().getFullYear()} {t("copyRight")}
      </footer>
    </Container>
  );
}
