import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router";
function UserDetails(){

    const {username , email ,userId , profilePicture , coverPicture ,bio} = useSelector(state=>state)
    const [Bio , setBio] = useState(bio)
    const [pp , setPP] = useState(profilePicture)
    const [cp , setCP] = useState(coverPicture)
    const dispatch = useDispatch();
  

    const submitHandler = ()=>{
        console.log(userId);

        axios.post(
            "http://localhost:3000/users/edit/"+userId,
            {
                "userId":userId,
                "profilepicture":pp,
                "coverpicture":cp,
                "bio":Bio
            }
        ).then(
            (res)=>{
                console.log(res.data);
            }
        ).catch(
            (err)=>{
                alert("Error Occured!")
            }
        )
    }
    return(
        <div>
            UserName: {username}
            <br/>
            Email: {email}
            <br/>
        
            <div>
                
                <label>
                    Update Bio:
                    <input type="text" onChange={e => setBio(e.target.value)}></input>
                </label>
                <br/>
                <label>
                    Upload Profile Picture URL:
                    <input type="text" onChange={e => setPP(e.target.value)}></input>
                </label>
                <br/>
                <label>
                    Update Cover Picture URL:
                    <input type="text" onChange={e => setCP(e.target.value)}></input>
                </label>
                <br/>
                <a href="http://localhost:3002" onClick={submitHandler}> Apply Changes</a>
            </div>

        </div>
    )
}
export default UserDetails;