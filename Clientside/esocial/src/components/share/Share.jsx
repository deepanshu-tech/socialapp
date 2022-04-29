import "./share.css"
import{PermMedia} from "@mui/icons-material"
import { useLocation , useNavigate} from "react-router"
import axios from "axios";
import { useState } from "react";
import Home from "../../pages/home/Home";
export default function Share(props) {
    console.log(props.userDetails);
    const navigate = useNavigate();
    const [desc , setDesc] = useState();
    const [error , setError] = useState();
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post(
            "http://localhost:3000/posts/",
            {
                "userId":props.userDetails._id,
                "description":desc
            }
        ).then((res)=>{
            if(res.status === 200){
                navigate("/home" , {state:props.userDetails});
            }
        }).catch(err=>{
            setError(err);
        })
    }
    if(error)
    {
        alert("Error Creating a post. Try Again");
        return(<div>
             <Home userDetails = {props.userDetails} />
        </div>
       )
    }

  return (
    <div>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                <input placeholder =" What's on your mind Username" className="shareInput" onChange={event => setDesc(event.target.value)}/>
                </div>  
                <hr className="shareHr"/>
                <div className="shareBottom">
                    {/* <div className="shareOptions">
                    <   div className="shareOption"> 
                        <PermMedia htmlColor="tomato" className="shareIcon"/> 
                        <span className="shareOptionText">Photo/Video</span>
                    </div> 
                    <   div className="shareOption"> 
                        <PermMedia className="shareIcon"/> 
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    <   div className="shareOption"> 
                        <PermMedia className="shareIcon"/> 
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    <   div className="shareOption"> 
                        <PermMedia className="shareIcon"/> 
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    </div> */}
                   <button className="shareButton" onClick={submitHandler}>Share</button>
                </div>
        </div>
    </div>
  )
}
