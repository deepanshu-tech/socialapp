import "./rightbar.css"

export default function Rightbar({profile}) {
  const HomeRightBar= ()=> {
    return (
      <>
      <img src="assets/ad.png" className="rightbarAd " alt="" /> 
      </>
    )
  }
  const ProfileRightbar = () =>{
    return(<>
    <h4 className="righbarTitle">User Info</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Delhi</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">India</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Gender:</span>
        <span className="rightbarInfoValue">M</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/person/2.jpeg" alt="" className="righbarFollowingImg" />
        <span className="rightbarFollowingName">Wong</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/3.jpeg" alt="" className="righbarFollowingImg" />
        <span className="rightbarFollowingName">Steve</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/3.jpeg" alt="" className="righbarFollowingImg" />
        <span className="rightbarFollowingName">Steve</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/3.jpeg" alt="" className="righbarFollowingImg" />
        <span className="rightbarFollowingName">Steve</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/1.jpeg" alt="" className="righbarFollowingImg" />
        <span className="rightbarFollowingName">Barack</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/3.jpeg" alt="" className="righbarFollowingImg" />
        <span className="rightbarFollowingName">Steve</span>
      </div>
    </div>
        </>)
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
          <ProfileRightbar/>
          {/* <HomeRightBar/> if we need to acess the home page feed*/}
      </div>
    </div>
  )
}
