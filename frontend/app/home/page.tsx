import Dashboard from "../components/Dashboard/Dashboard";
import Footer from "../shared/Footer/Footer";
import Home from "../components/Home/Home";

const page = () => {
  return (
    <section>
      <Home />
      <Dashboard />
      <Footer />
    </section>
  );
};

export default page;
