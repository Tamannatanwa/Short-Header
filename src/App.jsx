import Cards from "./components/cards/Cards"
import PhotoSection from "./components/photosection/PhotoSection"
import GridCard from "./components/gridcard/GridCard"
import WorkingProcess from "./components/workingprocess/WorkingProcess"
import Footer from "./components/footerpage/Footer"
import Navbar from "./components/navbar/Navbar"
import AboutMe from "./components/aboutpage/AboutMe"
const App = () => {
  return (
    <div>
    <Navbar/>
    <PhotoSection/>
    <Cards/>
    <GridCard/>
    <WorkingProcess/>
    <AboutMe/>
    <Footer/>
    </div>
  )
}

export default App