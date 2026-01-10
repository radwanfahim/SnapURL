import Footer from "../_shared/Footer/Footer";
import Nav from "../_shared/Nav/Nav";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/Home/Home";


const page = async () => {
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
