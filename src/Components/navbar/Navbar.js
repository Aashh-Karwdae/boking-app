import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="NavbarContainer">
            <span className="Navheading">BookingByAashh.com</span>
            <div className="navItem">
               <button className="navButton">Register</button>
               <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}
