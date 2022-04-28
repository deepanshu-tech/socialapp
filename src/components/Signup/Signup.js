import axios from "axios";

import { useState } from "react"
import { useNavigate } from "react-router-dom";


function Signup(){
    const [username , setUsername]= useState();
    const [name , setname] = useState();
    const [email , setemail] = useState();
    const [bio , setBio] = useState();
    const [password , setPassword] = useState();
    const navigate = useNavigate();

    const submitButtonHandler = async (e)=>{
        e.preventDefault();

        await axios.post(
            "http://localhost:3000/",
            {
                "username":username,
                "name":name,
                "email":email,
                "password":password,
                "bio":bio
            }
        ).then((res)=>{
            if(res.status === 200)
            {
               navigate('/home');
            }
        })
    }
    return(
        <div>
            <form>
                <label>
                    username:
                    <input type="text" onChange={ event => setUsername(event.target.value) }></input>
                </label>
                <br/>
                <label>
                    name:
                    <input type="text" onChange={ event => setname(event.target.value) }></input>
                </label>
                <br/>
                <label>
                    email:
                    <input type="text" onChange={ event => setemail(event.target.value) }></input>
                </label>
                <br/>
                <label>
                    Bio(Optional):
                    <input type="text" onChange={ event => setBio(event.target.value) }></input>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="text" onChange={ event => setPassword(event.target.value) }></input>
                </label>
                <br/>
                <input type="submit" value="create user" onClick={submitButtonHandler}></input>
            </form>
        </div>
    )
}
export default Signup