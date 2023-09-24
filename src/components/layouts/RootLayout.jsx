import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-16 lg:pt-0">{children}</div>
      <Footer />
    </>
  );
};
export default RootLayout;
