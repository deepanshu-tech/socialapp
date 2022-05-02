import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

function UserDetails(){

    const {username ,userId , profilePicture , coverPicture ,bio} = useSelector(state=>state)
    const [Bio , setBio] = useState(bio)
    const [pp , setPP] = useState(profilePicture)
    const [cp , setCP] = useState(coverPicture)
   
  

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
        <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h3 className="loginLogo">Esocial</h3>
                    <span className="loginDesc"> Hello {username}!</span>
            </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Your Bio" className="loginInput" onChange={e => setBio(e.target.value)}/>
                        
                        <input placeholder="Update your CoverPicture" className="loginInput" onChange={e => setCP(e.target.value)}/>
                        
                        <input placeholder="Update your ProfilePicture" className="loginInput" onChange={e => setPP(e.target.value)}/>
                        
                        <a href="http://localhost:5000" onClick={submitHandler}> Apply Changes</a>
                       

                    </div>
                </div>
            
        </div>
    </div>








        // <div>
        //     UserName: {username}
        //     <br/>
        //     Email: {email}
        //     <br/>
        
        //     <div>
                
        //         <label>
        //             Update Bio:
        //             <input type="text" }></input>
        //         </label>
        //         <br/>
        //         <label>
        //             Upload Profile Picture URL:
        //             <input type="text" onChange={e => setPP(e.target.value)}></input>
        //         </label>
        //         <br/>
        //         <label>
        //             Update Cover Picture URL:
        //             <input type="text" ></input>
        //         </label>
                
        //     </div>

        // </div>
    )
}
export default UserDetails;