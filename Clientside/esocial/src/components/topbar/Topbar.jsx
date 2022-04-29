import "./topbar.css"
import { Person, Search ,Chat,Notifications } from "@mui/icons-material"

import { useNavigate } from "react-router"

export default function Topbar() {
  const navigate = useNavigate();
  const logoutHandler = ()=>{
    navigate('/');
  }
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo" >Esocial</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="Search for friends ,post or video" className="searchinput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <button className="topbarLink" onClick={logoutHandler}>Logout</button>
           
          </div>
          <div className="topbarIcons">
            {/* <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div> */}
            {/* <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">2</span>
            </div> */}
            {/* <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div> */}
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>


        </div>
  )
}