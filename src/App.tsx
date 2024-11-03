import { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import DefaultLayout from "./layouts";
import ArticlesListView from "./pages/home/view/list";
import SingleArticleView from "./pages/home/view/single";
import NotFoundPage from "./pages/404";
import Contact from "./pages/contact";
import {
  defaultLocale,
  locales,
} from "./pages/home/components/Card/static/data";
import AboutView from "./pages/about/about";
import OTPPage from "./pages/OTP";

const LangGuard: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;

  if (!locales.includes(lang)) {
    return <Navigate to={`/${defaultLocale}`} />;
  }

  return <Outlet />;
};

function App() {
  return (
    <div>
      {/* <DefaultLayout>
        <ArticlesListView />
      </DefaultLayout> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/ka/home" />} />
          <Route path=":lang" element={<LangGuard />}>
            <Route element={<DefaultLayout />}>
              <Route
                errorElement={<div> Error </div>}
                path="home"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <ArticlesListView />
                  </Suspense>
                }
              />

              <Route path="home/:id" element={<SingleArticleView />} />

              <Route path="about" element={<AboutView />} />
              <Route path="contact" element={<Contact />} />
              <Route path="Test" element={<OTPPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
