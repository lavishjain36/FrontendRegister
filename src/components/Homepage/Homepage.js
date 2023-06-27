import React from "react";
import {Button } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
const Homepage=({setLoginUser})=>{
    const navigate=useNavigate();
    return(
      <>
      <div>
        <h1>This is Homepage</h1>
      </div>
    <Button onClick={()=>navigate("/login")}>Logout</Button>
      
      </>
    )
}

export default Homepage;