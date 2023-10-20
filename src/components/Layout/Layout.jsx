import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Questions from "../Questions/Questions";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Questions />
      <Footer />
    </div>
  );
};

export default Layout;
