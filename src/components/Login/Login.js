import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
const Login=({setLoginUser})=>{
    const navigate=useNavigate();
    //define state variable with useState hook
    const [user,setUser]=useState({
        email:"",
        password:"",
    })
    

    //create handleChange function to update the user state when user take an input
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value,
        })
    }

    //login function when user clicked on button
    const login=async()=>{
        //send a post request to server using user credentials
        await axios.post("https://registrationbackend-6onb.onrender.com/login",user).then((res)=>{
            alert(res.data.message);//getting the data->Login Successful
            //update the login user state with response data
            console.log(res.data.user)
            
          setLoginUser(res.data.user);

            // setLoginUser(res.data.user);
        });
        //after login is successful ,navigate to the home page
        navigate("/");
    }
    return(
      <>
      <div className="loginContainer">
        <h1>Login</h1>
        <div className="loginForm">
            <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={handleChange}
            />

            <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={handleChange}
            />
        </div>
        <div>
        <Button variant="primary" onClick={login}>
            Login
        </Button>
        <Button variant="primary" onClick={()=>navigate('/register')}>
            Register
        </Button>
        </div>
      </div>
      </>
    )
}
export default Login;