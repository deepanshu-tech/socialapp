// created by Ishan Bajaj at 20220502 12:22.
// 
// this is made by me

import  "./profile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Profile() {
    const {username , profilePicture , coverPicture , bio} = useSelector(state=>state);
    const navigate = useNavigate();
  return (
    <div>
            <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">

                    <div className="profileCover">
                        {console.log(coverPicture)}
                        <img src= {coverPicture} className="profileCoverImg" alt="" />
                        <img src= {profilePicture} className="profileUserImg" alt="" />
                    </div>

                    <div className="shareOption"> 
                        {/* <PermMedia htmlColor="tomato" className="shareIcon" />  */}
                        <input type="button" className="shareOptionText" onClick={ e=> navigate('/userDetails')} value = "Update Your Details"></input>
                    
                    </div> 

                    <div className="profileInfo">
                        <h4 className="profileInfoName">{username} </h4>
                        <p className="profileInfoDesc">{bio}</p>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar type = "profile"/>
                </div>
            </div>
        </div> 
    </> 
    </div>
  )
}
