// created by Ishan Bajaj at 20220502 12:19.
// 
// this is made by me

import { SettingsInputCompositeSharp } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"

export default function Feed() {
  const {userId , flag} = useSelector(state=>state);
  const navigate = useNavigate();
  const [lflag , setLflag] = useState(false);
  const [posts , setPosts] = useState();
  useEffect(()=>{
    console.log("entered!")
    axios.post(
      "http://localhost:3000/posts/feed" , 
      {
        "userId": userId
      }
    ).then((res)=>{
        console.log("value of flag currently is: "+flag);
        setPosts(res.data);
        setLflag(true);
        
    }).catch(err=>{
        alert("Some error Occured!");
        navigate('/home');
    })
  },[flag , ]);

  

  return (
    <div>
        {
      lflag ? (<div className="feed">
      <div className="feedWrapper">
        {console.log(posts)}
        <Share/>
        {
          
          posts.reverse().map((post)=>(
            <p key = {post._id}>
                <Post key = {post._id} postDetails = {post} />
            </p>
            
          ))
        }
      </div>
    </div>) : (null)
    }
    </div>
    
    
  )
}
 