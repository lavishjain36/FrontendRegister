import React from "react";
import {Button } from "react-bootstrap";
const Homepage=({setLoginUser})=>{
    return(
      <>
      <div>
        <h1>This is Homepage</h1>
      </div>
    <Button onClick={()=>setLoginUser({})}>Logout</Button>
      
      </>
    )
}

export default Homepage;