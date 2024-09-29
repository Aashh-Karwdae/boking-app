import "./header.css"
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {DateRange} from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate} from "react-router-dom";



export const Header = ({type}) => {
     const [destination,setDestination] =useState("");
     const [openOption, setOpenOption]= useState(false);
     const [options,setOptions] =useState({
          Adults:1,
          Children:0,
          Room:1,
     })
     
     

     const [openDate,SetOpenDate] = useState(false);
     const [date, setDate] = useState([
          {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
          } 
        ]);
        
        const handleOption = (name, operation) =>{
             setOptions((prev)=>{
               return{
                    ...prev,
                    [name] : operation === "i" ? options[name] +1 : options[name]-1,
               };
             });
        }


        const navigate = useNavigate();

        const handleSearch = () =>{
          navigate("/hotels", {state: {destination,date,options}} )
     }
       
   
  return (
    <div className='Header'>
        <div className={type === "list" ? "HeaderContainer listMode" : "HedaerContainer"}>
           <div className="HeaderList">
              <div className="HeaderListItem active">
                   <FontAwesomeIcon icon={faBed}/>
                   <span>Stays</span>
              </div>
              <div className="HeaderListItem">
                   <FontAwesomeIcon icon={faPlane}/>
                   <span>Flights</span>
              </div>
              <div className="HeaderListItem">
                   <FontAwesomeIcon icon={faCar}/>
                   <span>Car rentals</span>
              </div>
              <div className="HeaderListItem">
                   <FontAwesomeIcon icon={faBed}/>
                   <span>Attraction</span>
              </div>
              <div className="HeaderListItem">
                   <FontAwesomeIcon icon={faTaxi}/>
                   <span>Airport taxis</span>
              </div>
        </div>
           { type !== "list" && <> <h1 className="HeaderTitle">Where Relaxation Meets Luxury !!</h1>
           <p className="HeaderDisc">A commercial establishment that provides lodging, meals, and other services to guests, travelers, and tourists</p>
           <button className="HeaderBtn">Sign in / Register</button>
     <div className="HeaderSearch">
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="HeaderIcon"/>
            <input type="text" className="SearchInput" onChange={e=>setDestination(e.target.value)} placeholder="Where are you going?"/>
        </div>
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="HeaderIcon"/>
            <span onClick={()=>SetOpenDate(!openDate)} className="HeaderSerchItem">{`${format(date[0].startDate, "dd/mm/yyyy")} to  ${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
            {openDate && <DateRange
            className="Date"
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
            />}
        </div>
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="HeaderIcon"/>
            <span onClick={()=>setOpenOption(!openOption)} className="HeaderSearchItem">{`${options.Adults} Adult . ${options.Children} Children . ${options.Room} room`}</span>
             { openOption && <div className="Options">
                <div className="OptionItem">
                    <span className="OptioName">Adult</span>
                    <div className="optionBtnItem">
                      <button disabled= {options.Adults <=1} className="optionBtn" onClick={()=>handleOption("Adults", "d")} >-</button>
                      <span>{options.Adults}</span>
                      <button className="optionBtn"  onClick={()=>handleOption("Adults", "i")}>+</button>
                     </div>
                </div>
                <div className="OptionItem">
                    <span className="OptioName">Children</span>
                    <div className="optionBtnItem">
                      <button disabled= {options.Children <=1} className="optionBtn" onClick={()=>handleOption("Children", "d")} >-</button>
                      <span >{options.Children}</span>
                      <button className="optionBtn"  onClick={()=>handleOption("Children", "i")}>+</button>
                     </div>
                </div>
                <div className="OptionItem">
                    <span className="OptioName">Room</span>
                     <div className="optionBtnItem">
                      <button className="optionBtn" disabled= {options.Room <=1}  onClick={()=>handleOption("Room", "d")} >-</button>
                      <span>{options.Room}</span>
                      <button className="optionBtn" onClick={()=>handleOption("Room", "i")}>+</button>
                     </div>
                    </div>
                </div> 
                }
             </div>
             <div className="headerSearchItem">
            <button className="headerSearchBtn" onClick={handleSearch}>Search</button>
        </div> 
        </div> 
</>}
        
     </div>
      </div>
    
  )
}
