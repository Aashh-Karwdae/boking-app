import "./list.css"
import { Navbar } from '../../Components/navbar/Navbar.js';
import { Header } from '../../Components/Header/Header.js';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { RightList } from "../../Components/RightList/RightList.js";

export const List = () => {
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination);
  const [openDate,setOpenDate] = useState(false);
  const [date,setDate] =useState(location.state.date);
  const [options,setOptions] =useState(location.state.options)
  
  
  return (
    <div className='listpage'>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="leftList">
            <h1 className="listTitle">Search</h1>
            <div className="leftListItems">
              <label className="listLabel">Destination</label>
              <input type="text"  placeholder={destination}/>
            </div>
            <div className="leftListItems">
              <label className="listLabel">Check in date</label>
              <input type="text" onClick={()=>setOpenDate(!openDate)} placeholder={`${format(date[0].startDate, "mm/dd/yyyy")} to  ${format(date[0].endDate, "mm/dd/yyyy")}`}/>
              { openDate && (<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date}/>)}
            </div>
            <div className="leftListItems">
              <label className="Optionlabel">Options</label>
              
              <div className="OptionsItem">
                <span className="optionText">Min price <small>per night</small></span>
                <input type="number" />
              </div>
              <div className="OptionsItem">
                <span className="optionText">Max price <small>per night</small></span>
                <input type="number" />
              </div>
              <div className="OptionsItem">
                <span className="optionText">Adults</span>
                <input type="number" min={1} placeholder={options.Adults}/>
              </div>
              <div className="OptionsItem">
                <span className="optionText">Children</span>
                <input type="number" min={0} placeholder={options.Children} />
              </div>
              <div className="OptionsItem">
                <span className="optionText" >Room</span>
                <input type="number" min={1} placeholder={options.Room} />
              </div>
            </div>
            <Link to="/hotels/id"><button className="leftlistBtn">Search</button></Link>
          </div>
          <div className="rightList">
            <RightList/>
          </div>
        </div>
      </div>
    </div>
  )
}
