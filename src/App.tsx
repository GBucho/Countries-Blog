import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts";
import ArticlesListView from "./pages/home/view/list";
import SingleArticleView from "./pages/home/view/single";
import AboutView from "./pages/about/views/about";
import NotFoundPage from "./pages/404";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      {/* <DefaultLayout>
        <ArticlesListView />
      </DefaultLayout> */}

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<div> Landing </div>} />
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
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
