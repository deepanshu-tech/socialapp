// created by Ishan Bajaj at 20220502 12:19.
// 
// this is made by me

import  "./FriendProfile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import {PermMedia} from "@mui/icons-material"
import { useLocation } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState , useEffect } from "react";

export default function FriendProfile() {
    const location = useLocation();
    const {userId} = useSelector(state=>state);
    
    const followHandler = (e)=>{
        e.preventDefault();
        axios.post(
            "http://localhost:3000/users/"+location.state._id+"/follow",
            {
                "userId":userId
            }
        ).then((res)=>{
            alert("User Followed!");
            
        }).catch(err=>{
            alert("Some error Happened!")
        })

    }

    const unfollowHandler = (e)=>{
        e.preventDefault();
        axios.post(
            "http://localhost:3000/users/"+location.state._id+"/unfollow",
            {
                "userId":userId
            }
        ).then((res)=>{
            alert("User unfollowed!");
            
        }).catch(err=>{
            alert("Some error Happened!")
        })

    }
  return (
    <div>
            <>
        <Topbar/>
        <div className="profile">
        
            <div className="profileRight">
                <div className="profileRightTop">

                    <div className="profileCover">
                        <img src={location.state.coverpicture} className="profileCoverImg" alt="" />
                        <img src={location.state.profilepicture} className="profileUserImg" alt="" />
                    </div>

                    

                    <div className="profileInfo">
                        <h4 className="profileInfoName">{location.state.username} </h4>
                        <p className="profileInfoDesc">{location.state.bio}</p>
                    </div>
                </div>
                <input type="button" value ="follow" onClick={followHandler}></input>
                <input type="button" value ="Unfollow" onClick={unfollowHandler}></input>
            </div>
        </div> 
    </> 
    </div>
  )
}
