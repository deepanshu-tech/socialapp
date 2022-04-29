import { useLocation } from "react-router";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import Register from "../register/Register";
import "./home.css"

export default function Home() {
  const location = useLocation();
  // console.log(location.state._id);
  return (
    
    <div>
      <Topbar/>
      <div className="homeContainer">
      <Sidebar/>
    <Feed userDetails = {location.state}/>
    <Rightbar/>
    </div> 
    

    
    </div>
  );
}
    {/* <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div> */}