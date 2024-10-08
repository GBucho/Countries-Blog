// import Footer from "@/components/base/footer/footer";
// import Header from "@/components/base/header/header";
// import { PageContainer } from "@/components/base/page-container/page-container";
import { Outlet } from "react-router-dom";

import Header from "../components/base/header/header";
import { PageContainer } from "../components/base/page-container/page-container";
import Footer from "../components/base/footer/footer";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
