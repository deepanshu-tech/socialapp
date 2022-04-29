import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { useState } from "react"

export default function Post({post}) {
  const [like,setLike] = useState(1)
  const [isLiked,setIsLike] = useState(false)
  const likeHandler=()=>{
    setLike(isLiked ? like-1:like+1)
    setIsLike(!isLiked)

  }
  return (
    // make different subparts of the post component subpart 
    <div className="post">

        <div className="postWrapper"> 
        {/* dividing wrapper in 3 top,center bottom  */}
             <div className="postTop">
             <div className="postTopLeft">
               <img src="/assets/person/1.jpeg" className="postProfileImg" alt="" />
               <span className="postUsername">  Username</span>
               <span className="postDate">X mins ago</span>
             </div> 
             <div className="postTopRight">
               <MoreVert/>
             </div>
             </div>
             <div className="postCeter">
               <span className="postText">User Text Input</span>
               <img src="/assets/post/1.jpeg" className="postImg" alt="" />
             </div>
             <div className="postBottom">
               {/* like icons and other images */}
                <div className="postBottomLeft">
                  <img src="assets/like.png" className="likeIcon" onClick={likeHandler} alt="" />
                  <img src="assets/heart.png" className="likeIcon" onClick={likeHandler}  alt="" />
                  <span className="postLikeCounter">{like}people liked your post </span>
                </div>
                {/* comments */}
                <div className="postBottomRight">
                  <span className="postCommentText">C comments </span>
                </div>
             </div>
        </div>
    </div>
  )
}
