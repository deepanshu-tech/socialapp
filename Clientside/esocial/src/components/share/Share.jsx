// created by Ishan Bajaj at 20220502 12:20.
// 
// this is made by me

import "./share.css"
import{PermMedia} from "@mui/icons-material"
import { useLocation , useNavigate} from "react-router"
import axios from "axios";
import { useState } from "react";
import Home from "../../pages/home/Home";
import { useDispatch, useSelector } from "react-redux";
export default function Share() {
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [desc , setDesc] = useState();
    const [imgfile , setImgFile] = useState()
    const [error , setError] = useState();
    const {userId , flag,username , profilePicture} = useSelector((state)=>state)
    
    const submitHandler = (e)=>{
        e.preventDefault();
       console.log(username);
        // navigate('/home');
        axios.post(
            "http://localhost:3000/posts/",
            {
                "userId":userId,
                "description":desc,
                "username":username,
                "image":imgfile
            }
        ).then((res)=>{
            if(res.status === 200){
                setDesc('');
                setImgFile('');
                console.log("value in share component: "+flag);
                dispatch({type:"set_flag" , value: (!flag) });
                navigate('/home');
            }
        }).catch(err=>{
            alert('error while creating post!');
            setDesc('');
            navigate('/home');
        })
    }
    

  return (
    <form onSubmit={submitHandler}>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src={profilePicture} alt="" />
                <input placeholder = {"What's on your mind "+ username} value = {desc} className="shareInput" onChange={event => setDesc(event.target.value)}/>
                
                
                </div>  
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                    <label>
                        Drop the Image URL:
                        <input type="text" value={imgfile}  onChange={event => setImgFile(event.target.value)} />   
                    </label>
                   
                     {/* <label htmlFor="file" className="shareOption"> 
                        <PermMedia htmlColor="tomato" className="shareIcon"/> 
                        <span className="shareOptionText">Photo/Video</span>
                        <input style={{display:"none"}} type="file" id="file" accept =".png , .jpeg , .jpg"  onChange={e => setImgFile(e.target.value)}></input>
                    </label>  */}
                    {/* <   div className="shareOption"> 
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
                    </div> */}
                    </div>
                   <button className="shareButton" type = "submit" >Share</button>
                </div>
        </div>
    </form>
  )
}
