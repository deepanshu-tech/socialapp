// created by Ishan Bajaj at 20220502 12:21.
// 
// this is made by me

import { useSelector } from "react-redux";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import Register from "../register/Register";
import "./home.css"

export default function Home() {
  return (
    
    <>
    <div>
      <Topbar/>
      <div className="homeContainer">
      <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div> 
    

    
    </div>
    </>
  );
}
    {/* <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div> */}