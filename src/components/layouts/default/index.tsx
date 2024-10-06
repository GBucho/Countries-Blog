import Header from "@/base/header/header";
import Footer from "@/base/footer/footer";
// import { Outlet } from "react-router-dom";
import { PageContainer } from "@/base/page-container/page-container";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
};

export default DefaultLayout;
