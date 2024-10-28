/* eslint-disable react-hooks/rules-of-hooks */
import {
  getTranslationContent,
  locale,
} from "~/src/pages/home/components/Card/static/language";
import "./header.css";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
// import { getTranslationCountry } from "~/src/pages/home/components/Card/static/data";
import { Container } from "../container/container";

export default function header() {
  const location = useLocation();
  const params = useParams();
  const lang = params.lang as string;
  const contentTranslation = getTranslationContent(lang);
  // const countryTranslation = getTranslationCountry(lang);

  const navItems = [
    { name: contentTranslation("home"), path: `/${lang}/home` },
    { name: contentTranslation("about"), path: "about" },
    { name: contentTranslation("contact"), path: "contact" },
  ];

  return (
    <Container>
      <header>
        <nav className="nav">
          <div className="nav-header">
            <Link to={`/${lang}/home`}>
              <h1>{contentTranslation("title")}</h1>
            </Link>
          </div>

          <ul className="nav-items">
            {navItems.map(({ name, path }) => (
              <li key={path}>
                <NavLink end to={path}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="nav-items">
            {locale.map((locale) => (
              <li key={locale}>
                <Link to={`/${locale}${location.pathname.slice(3)}`}>
                  {locale}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Container>
  );
}
