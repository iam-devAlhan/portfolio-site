import Navbar from './components/navbar/navbar';
import SectionOne from './components/sections/sectionOne'
import SectionTwo from './components/sections/sectionTwo'
import SectionThree from './components/sections/portfolioSection';
import './App.css'
import SectionFour from './components/sections/sectionfour';
import Footer from './components/footer/footer';
function App() {
  

  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  )
}

export default App
