import { ArrowDropDown } from "@material-ui/icons"
import { Notifications } from "@material-ui/icons"
import { Search } from "@material-ui/icons"
import { useState } from "react"
import "./navbar.scss"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <span>HomePage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My list</span>
            </div>
            <div className="right">
              <Search className=" icon "/>
              <span>KID</span>
              <Notifications className=" icon "/>
              <img src="https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/248025620_1846841505518217_5261267730171766465_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xlXeG_FNDMcAX-ACsky&_nc_ht=scontent.ftun10-1.fna&oh=00_AT8NDxRKyzr0loWnDAl4ry7hXo5J5181t3dlywbjwhfPgA&oe=6244382C" alt=""/>
              <div className="profile">
                <ArrowDropDown className=" icon "/>
                <div className="options">
                 <span>Settings</span>
                 <span>Logout</span>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar