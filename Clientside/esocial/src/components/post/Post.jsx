import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"

export default function Post(props) {
  
  const [like,setLike] = useState(props.postDetails.likes.length)
  const {userId} = useSelector(state=>state);
  //const [isLiked,setIsLike] = useState(false)
  const likeHandler=async()=>{
    let data;
    await axios.post(
      "http://localhost:3000/posts/"+props.postDetails._id+"/react",
      {
        "userId":userId
      }
    ).then((res)=>{
       console.log("Post Reacted!");
       data = res.data.likes.length;
       

    }).catch(err=>{
      alert("Some Error Occured!")
    })
    
    setLike(data);

  }
  const {username} = useSelector(state=>state);
  console.log(username);
  return (
    // make different subparts of the post component subpart 
    <div className="post">

        <div className="postWrapper"> 
        {/* dividing wrapper in 3 top,center bottom  */}
             <div className="postTop">
             <div className="postTopLeft">
               {/* <img src={props.postDetails.image} className="postProfileImg" alt="" /> */}
               <span className="postUsername">  {props.postDetails.username} </span>
               {/* <span className="postDate">X mins ago</span> */}
             </div> 
             <div className="postTopRight">
               <MoreVert/>
             </div>
             </div>
             <div className="postCeter">
               <span className="postText">{props.postDetails.description}</span>
               <img src={props.postDetails.image} className="postImg" alt="" />
             </div>
             <div className="postBottom">
               {/* like icons and other images */}
                <div className="postBottomLeft">
                  <img src="assets/like.png" className="likeIcon" onClick={likeHandler} alt="" />
                  <img src="assets/heart.png" className="likeIcon" onClick={likeHandler}  alt="" />
                  <span className="postLikeCounter">{like}people liked your post </span>
                </div>
                
             </div>
        </div>
    </div>
  )
}
