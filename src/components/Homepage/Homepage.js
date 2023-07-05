import React, { useEffect } from "react";
import {Button } from "react-bootstrap";
// import Login from "../Login/Login.js";
import { useNavigate } from "react-router-dom";

const Homepage=({setLoginUser,loginUser})=>{
  const navigate=useNavigate();

  const handleLogout=()=>{
    setLoginUser(localStorage.removeItem("jwt-token"));//remove the token from local storage and update the 
    // state to logout the user 
    navigate("/login")
  }

  useEffect(()=>{
    if(!loginUser){
      navigate("/login");
    }
  },[loginUser,navigate]);
  console.log(loginUser);
    return(
      <>
      <div>
        <h1>This is Homepage</h1>
      </div>
    <Button onClick={()=>handleLogout()}>Logout</Button>
      </>
    )
}

export default Homepage;