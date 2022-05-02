import "./topbar.css"
import {Search} from "@mui/icons-material"
import axios from "axios"
import { useNavigate } from "react-router"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Topbar() {
  
  
  const navigate = useNavigate();
  const {profilePicture , flag} = useSelector(state=>state);
  const [searchData , setsearchdata] = useState();
  const dispatch = useDispatch();
  
  
  const profileHandler = (e)=>{
    e.preventDefault();
   
    navigate('/profile' );
  }
  const logoHandler = (e)=>{
    e.preventDefault();
    console.log(window.location.pathname);
    if(window.location.pathname === '/home')
      dispatch({type:"set_flag" , value: (!flag) });
    else
      navigate('/home' );
    
  }
  const searchHandler = async(e)=>{
      e.preventDefault();
      console.log(searchData);
      await axios.post(
        "http://localhost:3000/users/searchuser",
        {
          "username":searchData
        }
      ).then((res)=>{
        navigate('/searchprofile' , {state:res.data});
      }).catch((err)=>{
        alert("Error Occured");
        setsearchdata('');
      })
  }
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo" onClick={logoHandler}>Esocial</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="Search for friends ,post or video" className="searchinput" value={searchData} onChange={event => setsearchdata(event.target.value)}/>
            <input type="button" value="search" className="topbarSearchButton" onClick={searchHandler}></input>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <a href = "http://localhost:5000"  className="topbarLogoutButton"> Logout </a>
          </div>
          
          <img src={profilePicture} alt="" className="topbarImg" onClick={profileHandler} />
        </div>


        </div>
  )
}