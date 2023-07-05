import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const ResetPassword=()=>{
    const {token}=useParams();//extract token parameter
    //state variable for password
    const[password,setPassword]=useState("");
    const[verify,setVerify]=useState("");
    const navigate=useNavigate();

    //define an async function to verify the token 
    const verifyToken=async(req,res)=>{
        await axios.get(`http://localhost:9002/resetpassword/${token}`)//send the totken
        .then((res)=>{
            setVerify(res.data.message);
        })
    }

    //define a function to submit new password
    const handleSubmit=async()=>{
        try {
            // eslint-disable-next-line 
            setPassword('');
            await axios.post(`http://localhost:9002/newpassword/${token}`,{password:password})
            .then((res)=>{
                alert(res.data.message);
                navigate("/login");
            })
        } catch (error) {
            console.log(error)
            alert(error)
            
        }
    }

    useEffect(()=>{
        verifyToken();//calling verify token once the component is mounted
    })
    console.log(verify);

    return(
        <>
        {
            verify==="Token verified Successfully"?<>
            {verify}
            <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={()=>handleSubmit()}>New Password</button>
            </>
            :
            <>
            {verify}
            </>
        }
        </>
    )
}

export default ResetPassword;

