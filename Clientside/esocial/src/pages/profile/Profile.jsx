import  "./profile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <div>
            <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
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
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div> 
    </> 
    </div>
  )
}
