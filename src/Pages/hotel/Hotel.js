import "./hotel.css"
import { Navbar } from '../../Components/navbar/Navbar.js';
import { Header } from "../../Components/Header/Header.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MailList } from "../../Components/MailList/MailList.js";
import { Footer } from "../../Components/Footer/Footer.js";
import { useState } from "react";

export const Hotel = () => {

  const [sliderNumber,SetSliderNumber]= useState(0)
  const [open, setOpen] = useState(false);

  const photos =[
    {
    src:"https://tse1.mm.bing.net/th?id=OIP.iIGscdIzIyU9TRdvzFGXvQHaE8&pid=Api&P=0&h=180"
    },
    {
    src:"https://tse2.mm.bing.net/th?id=OIP.nVRna3j7Xlv_QAZMby-A9wHaFd&pid=Api&P=0&h=180"
    },
    {
    src:"https://tse3.mm.bing.net/th?id=OIP.u_051WJmnzt3mOoaBbATmgHaEr&pid=Api&P=0&h=180"
    },
    {
    src:"https://tse2.mm.bing.net/th?id=OIP.QDILzrB5XYo7y5SQBenvPQHaEo&pid=Api&P=0&h=180"
    },
    {
    src:"https://tse4.mm.bing.net/th?id=OIP.VSWO2tgzayQHtWoXNO_YcgHaEK&pid=Api&P=0&h=180"
    },
    {
    src:"https://tse3.mm.bing.net/th?id=OIP.055EP7G98Z1m2VFpX9EQggHaEo&pid=Api&P=0&h=180"
    },

  ];

  const handleOpen = (i)=>{
    SetSliderNumber(i)
    setOpen(true);

  }

 const handleArrows = (direction)=>{
    let newSlidernumber;

    if(direction === "p"){
      newSlidernumber = sliderNumber === 0 ? 5 : sliderNumber-1;
    }else{
      newSlidernumber = sliderNumber === 5 ? 0 : sliderNumber+1;
    }

    SetSliderNumber(newSlidernumber);
 }

  return (
    <div className="hotel">
      <Navbar/>
      <Header type="list"/>
       <div className="hotelContainer">
        { open && <div className="slider">
          <FontAwesomeIcon onClick={()=>setOpen(false)} icon={faCircleXmark} className="close"/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow"  onClick={()=>handleArrows("p")} />
          <div className="SliderWrapper">
            <img src={photos[sliderNumber].src} alt="" className="sliderImg"  />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleArrows("n")}/>
        </div>}
        <div className="hotelsWrapper">
          <div className="hotelAddress">
            <div className="TitlewBtn">
             <h1 className="htitle">Dream Hotel !!</h1>
             <button className="Btn">Reserve or Book Now!</button>
             </div>
             <div className="detailsBox">
             <div className="hmapIcon">
             <FontAwesomeIcon className="Icon" icon={faLocationDot}/>
             <span className="address">4 Tumsar, 441907 India</span>
             </div>
             <span className="location">Excellent location - 500m from center</span>
             <span className="disc">Book a stay over $114 at this Property and get a free airport taxi</span>
             </div>
         </div>
         <div className="hotelsImg">
            {photos.map((photo,i)=>(
              <div className="ImageWrapper">
                <img onClick={()=>handleOpen(i)}  className="Image" src={photo.src} alt=""/>
              </div>
            ))}
         </div>
         <div className="PgrpgDescDiv">
            <div className="DescDiv">
              <h1 className="pGDTitle">Stay  in the heart of Dream Rooms</h1>
               <p className="paragraph">
                Many travellers want to find out everything they can about your hotel before they book. They would want as much information as possible about the holiday experience they will be buying. A well thought out hotel description is a great tool to sell your hotel to potential guests. A detailed property description should position your hotel well and reassure the traveller that you provide a high quality and trustworthy service. Forget cookie-cutter copy! Craft hotel descriptions that ignite imaginations, tug at heartstrings, and drive bookings through the roof.Learn the secrets of word magic that paint vivid pictures of relaxation, adventure, and unforgettable experiences.
                Whether you’re wooing luxury seekers, charming families, or captivating solo travelers, 
                </p>
            </div>
            <div className="DetailsHotels">
              <div className="allDetails">
                <h3>Perfect for a 9-nignt stay</h3>
                <p>Located in the real heart of deream hotel. this properly has an excellent location score of 9.8!</p>
                <h2><b>$945</b> (9 nights)</h2>
                <button>Reserve or Book Now</button>
              </div>
            </div>
         </div>
        </div>
        <MailList/>
        <Footer/>
       </div>
       
       
    </div>
  
  )
}


















{/* <div className="hotelsContainer">
        <div className="hotelsItems">
          <div></div>
         <h1 className="hotelTitle">Dream Hotel !!</h1>
         <div className="hotelAddress">
            
            
         </div>  
            
            <div className="hotelsImgs">
            {photos.map(photo=>{
              return(
              <div className="images">
                <img className="eachImg" src={photo.src} alt=""/>
              </div>
              )
            })}
            </div>
         </div>
      </div> */}