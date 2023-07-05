import React, { useState } from "react";
import axios from "axios";


const ForgotPassword=()=>{
    const [email,setEmail]=useState("");

    //define a function to handleSubmit 
    const handleSubmit= async()=>{
        try {
            console.log(email);
            await axios.post("http://localhost:9002/forgotpassword",{email})
            .then((res)=>{
                alert(res.data.message,"message");
            })
            
        } catch (error) {
            console.log(error);
            alert(error);
        }

    }

    return(
        <>
           <div>Forgot password</div>
           <input 
           type="email"
           placeholder="Enter your email"
           name="email"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           />
           <button onClick={()=>handleSubmit()}>Reset password</button>
        </>
     
    )
}


export default ForgotPassword;

