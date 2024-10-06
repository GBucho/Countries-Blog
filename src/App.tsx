// import DefaultLayout from "@/layouts/default";
import DefaultLayout from "@/layouts/default";
import NotFoundPage from "@/pages/404";
import AboutDescription from "@/pages/about/components/description";
import ConstactInformationView from "@/pages/contact/views/contact";
import ArticlesListView from "@/pages/home/view/list";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <DefaultLayout>
        <ArticlesListView />
      </DefaultLayout> */}

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<ArticlesListView />} />
            <Route path="about" element={<AboutDescription />} />
            <Route path="contact" element={<ConstactInformationView />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
