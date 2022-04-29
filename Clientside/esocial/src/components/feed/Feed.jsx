import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"

export default function Feed(props) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share userDetails={props.userDetails}/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
 