import "./share.css"
import{PermMedia} from "@mui/icons-material"
export default function Share() {
  return (
    <div>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                <input placeholder =" What's on your mind Username" className="shareInput" />
                </div>  
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                    <   div className="shareOption"> 
                        <PermMedia htmlColor="tomato" className="shareIcon"/> 
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    {/* <   div className="shareOption"> 
                        <PermMedia className="shareIcon"/> 
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    <   div className="shareOption"> 
                        <PermMedia className="shareIcon"/> 
                        <span className="shareOptionText">Photo/Video</span>
                    </div> */}
                    {/* <   div className="shareOption"> 
                        <PermMedia className="shareIcon"/> 
                        <span className="shareOptionText">Photo/Video</span>
                    </div> */}
                   </div>
                   <button className="shareButton">Share</button>
                </div>
        </div>
    </div>
  )
}
