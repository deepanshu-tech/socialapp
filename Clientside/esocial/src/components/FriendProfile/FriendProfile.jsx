import  "./FriendProfile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import {PermMedia} from "@mui/icons-material"
import { useLocation } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

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
                        <img src="assets/post/2.jpeg" className="profileCoverImg" alt="" />
                        <img src="assets/post/1.jpeg" className="profileUserImg" alt="" />
                    </div>

                    

                    <div className="profileInfo">
                        <h4 className="profileInfoName">Username here </h4>
                        <p className="profileInfoDesc">username info here</p>
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
