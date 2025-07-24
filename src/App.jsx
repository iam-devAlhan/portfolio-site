import Navbar from "./features/navbar/navbar";
import SectionOne from "./features/sections/sectionOne";
import SectionTwo from "./features/sections/sectionTwo";
import SectionThree from "./features/sections/portfolioSection";
import "./App.css";
import Footer from "./features/footer/footer";
function App() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
}

export default App;
