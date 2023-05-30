import  Footer  from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import {
  Hero,
 
} from "../screens";
import Alert from "../components/Alert";
import Navbar from "../components/navbar/Navbar";
import Values from "../components/values/Values";

const Page = ({Languages}) => (
  <div className="bg-primary-black overflow-hidden">
        <div className="gradient-03 z-0" />
    <Navbar />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Hero />
    <div className="relative">
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
    </div>
    <Values />
    <Contact />
    <Footer />
    <Alert />
  </div>
);

export default Page;
