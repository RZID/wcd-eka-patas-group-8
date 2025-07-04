// Components
import Navbar from "@/components/navbar";

// Sections
import Home from "@/sections/home";
import Route from "@/sections/route";
import Agent from "@/sections/agent";
import About from "@/sections/about";
import Footer from "@/sections/footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Route />
      <Agent />
      <About />
      <Footer />
    </div>
  );
};

export default Page;
