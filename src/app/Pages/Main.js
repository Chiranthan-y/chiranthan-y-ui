import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mx-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
