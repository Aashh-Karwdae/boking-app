import "./home.css"
import { Navbar } from '../../Components/navbar/Navbar.js';
import { Header } from '../../Components/Header/Header.js';
import FeaturedCities from '../../Components/featuredcities/FeaturedCities.js';
import ProprtyList from "../../Components/Proprtylist/ProprtyList.js";
import { FeaturedProperty } from "../../Components/FeaturedProperty/FeaturedProperty.js";
import { MailList } from "../../Components/MailList/MailList.js";
import { Footer } from "../../Components/Footer/Footer.js";


export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
          <FeaturedCities/>
          <h1 className="propTitle">Browse by property type</h1>
          <ProprtyList/>
          <h1 className="fpropTitle">Homes guests love</h1>
          <FeaturedProperty/>
          <MailList/>
          <Footer/>
      </div>
    </div>
    
  )
}

