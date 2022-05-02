// created by Ishan Bajaj at 20220502 12:20.
// 
// this is made by me

import "./rightbar.css"
import { useSelector }  from "react-redux";
import axios from "axios";
import { useState } from "react";
export default function Rightbar(props) {
  const HomeRightBar= ()=> {
    return (
      <>
      <img src="assets/ad.png" className="rightbarAd " alt="" /> 
      </>
    )
  }
  const ProfileRightbar = () =>{
    const {username} = useSelector(state=>state);
    const [flowers , setfollowers] = useState();
    const [followClicked , setFollowClicked] = useState(false); 
    const [followingClicked , setFollowingClicked] = useState(false);
    const [flowingers , setfollowingers] = useState(); 
   
    const followerManager = async (e)=>{
     
      e.preventDefault();
      await axios.post(
        "http://localhost:3000/users/searchuser",
        {
          "username":username
        }).then(
          async (res)=>{
            var temp = res.data.followers;
            var newtemp = [];
            
            await Promise.all(
              temp.map(async (t)=>{
                      await axios.post(
                      "http://localhost:3000/users/searchname",
                      {
                        "userId":t
                      }
                    ).then((res)=>{
                      
                      newtemp.push(res.data.username);
                      console.log(t);
                    }).catch(err=>{
                      alert("Some Error Occured!")
                    })
                  }
              ))

            setfollowers(newtemp);
            setFollowClicked(true);
            
           
          }
        ).catch(err =>{
          alert("Error Occuered!")
        })

        
        
    }
      
        const followingManager = async (e)=>{
          e.preventDefault();
          await axios.post(
            "http://localhost:3000/users/searchuser",
            {
              "username":username
            }).then(
              async (res)=>{
                var temp = res.data.following;
                var newtemp = [];
            
            await Promise.all(
              temp.map(async (t)=>{
                      await axios.post(
                      "http://localhost:3000/users/searchname",
                      {
                        "userId":t
                      }
                    ).then((res)=>{
                      
                      newtemp.push(res.data.username);
                      console.log(t);
                    }).catch(err=>{
                      alert("Some Error Occured!")
                    })
                  }
              ))
                setfollowingers(newtemp);
                setFollowingClicked(true);
              }
            ).catch(err =>{
              alert("Error Occuered!")
            })
          

    }
    
    
    
    return(<>
    {/* <h4 className="righbarTitle">User Info</h4>
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
    </div> */}
    <button onClick={followerManager}>Followers</button>
    
    {
      followClicked ? ( <ul>
        {
            flowers.map((flower)=>(
                <li key = {flower}>{flower}</li>)
            )
        }
      </ul>) : (null)
    }
    <button onClick={followingManager}>Followings</button>
    {
      followingClicked ? ( <ul>
        {
            flowingers.map((flowing)=>(
                <li key = {flowing}>{flowing}</li>)
            )
        }
      </ul>) : (null)
    }
    
   
      
        </>)
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {
          props.type === "profile" ? <ProfileRightbar/> : <HomeRightBar/>
        }
          
      </div>
    </div>
  )
}
