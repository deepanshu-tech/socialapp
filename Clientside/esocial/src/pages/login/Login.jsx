// created by Ishan Bajaj at 20220502 12:18.
// 
// this is made by me

import axios from "axios";

import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css"
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import NiceInputPassword from 'react-nice-input-password';


export default function Login() {
  
  
  const[userData , setUserData] = useState();
  const[password , setPassword] = useState();
  const [error , setError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = async(event)=>{
    
      event.preventDefault();
      await axios.post("http://localhost:3000/users/login" , {
        "data":userData,
        "password":password
      }).then((res)=>{
        if(res.status === 200){
          dispatch({type:"add_userid" , value: res.data._id});
          dispatch({type:"add_email" , value: res.data.email});
          dispatch({type:"add_username" , value: res.data.username});
          dispatch({type:"set_pp" , value: res.data.profilepicture});
          dispatch({type:"set_cp" , value: res.data.coverpicture});
          dispatch({type:"set_bio" , value: res.data.bio});

          navigate('/home');
        }
      }).catch(err=>{
        setError(err);
      })
          
  }
  if(error)
  {
    alert("Incorrect Credentials, Try Again!");
    return <Login/>
  }
  const createUserHandler = (event)=>{
    event.preventDefault();
    navigate('/register')
  }
  const forgotpwdhandler = (event)=>{
    event.preventDefault();
    navigate('/forgotpassword')
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
                        <input placeholder="Username/Email" className="loginInput" onChange={event => setUserData(event.target.value)}/>
                        <input placeholder="Password" className="password" type="password" name="password" onChange={event => setPassword(event.target.value)}/>
                        <button className="loginButton" onClick={loginHandler} >LogIn</button>
                        <button className="loginRegister" onClick={createUserHandler}>Create a new Account</button>
                        <button className="loginRegister" onClick={forgotpwdhandler}>Forgot Password?</button>

                    </div>
                </div>
            
        </div>
    </div> 
  )
}
