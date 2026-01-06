import Dashboard from "../components/Dashboard/Dashboard";
import Footer from "../shared/Footer/Footer";
import Home from "../components/Home/Home";
import Nav from "../shared/Nav/Nav";

const page = () => {
  return (
    <section>
      <Nav />
      <Home />
      <Dashboard />
      <Footer />
    </section>
  );
};

export default page;
