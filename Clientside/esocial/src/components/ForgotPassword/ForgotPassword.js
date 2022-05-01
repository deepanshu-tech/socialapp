import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

function ForgotPassword(){
    const [email , setEmail]= useState();
    const [error , setError] = useState();
    const navigate = useNavigate();

   
    const submitHandler = ()=>{
        axios.post(
            "http://localhost:3000/forgotpassword",
            {
                "email":email
            }
        ).then((res)=>{
            if(res.status === 200)
            {
                alert("Recovery Mail Sent")
                navigate("/");
            }
        }).catch(err=>{
            setError(err);
        })
    }
    if(error){
        alert("Error Resetting Password! Try Again");
        return <ForgotPassword/>

    }
    return(

        <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h3 className="loginLogo">Esocial</h3>
                    <span className="loginDesc">connect with friends from all around the world on Esocial</span>
            </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Enter your Registered Email" className="loginInput" onChange={ event => setEmail(event.target.value) }/>
                        <button className="loginButton"onClick={submitHandler}>Recover Password</button>
                    </div>
                </div>
            
        </div>
        </div>
    )
}
export default ForgotPassword