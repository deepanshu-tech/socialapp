import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function ForgotPassword(){
    const [email , setEmail] = useState();
    const navigate = useNavigate();
    const buttonHandler = (e)=>{
        e.preventDefault();
        axios.post(
            "http://localhost:3000/forgotpassword",
            {
                "email":email
            }
        ).then((res)=>{
            if(res.status === 200){
                console.log(res.data);
                navigate('/');
            }
            
        }).catch()
        {
            alert("Please Sign Up!")
        }
    }
    return(
        <div>
            <label>
                enter the email to recover your account:
                <input type="text" onChange={event => setEmail(event.target.value)}></input>
                <br/>
                <input type="button" value = "recover" onClick={buttonHandler}></input>
            </label>
        </div>
    )
}

export default ForgotPassword;