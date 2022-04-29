import "./register.css"
import axios from "axios";

import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username , setUsername]= useState();
    const [name , setname] = useState();
    const [email , setemail] = useState();
    const [password , setPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const submitButtonHandler = async (e)=>{
        e.preventDefault();

        await axios.post(
            "http://localhost:3000/",
            {
                "username":username,
                "name":name,
                "email":email,
                "password":password
            }
        ).then((res)=>{
            if(res.status === 200)
            {
               navigate('/home');
            }
        }).catch(err=>{
          setError(err);
        });
    }

    if(error) 
    {
      alert("User Details are already registered. Please try again!");
      return <Register/>
    }
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h3 className="loginLogo">Esocial</h3>
                    <span className="loginDesc">connect with friends from all around the world on Esocial</span>
            </div>
                <div className="loginRight">
                    <div className="loginBox">
                       <input placeholder="Username" className="loginInput" onChange={ event => setUsername(event.target.value) }/>
                       <input placeholder="Name" className="loginInput" onChange={ event => setname(event.target.value) }/>
                        <input placeholder="Email" className="loginInput" onChange={ event => setemail(event.target.value) }/>
                        <input placeholder="Password" className="loginInput" onChange={ event => setPassword(event.target.value) }/>

                        <button className="loginButton"onClick={submitButtonHandler}>SignUp</button>
                       

                    </div>
                </div>
            
        </div>
    </div>
  )
}
