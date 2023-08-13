// import { useState } from "react";
import React, {useState} from "react";

const SignUp = () => {
    const [name,setName]=useState("");
    const [Password,setPassword]=useState("");
    const [Email,setEmail]=useState("");
    const collectData=()=>{
        console.log(name,Email,Password)
    }
    return (
        <div>
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />


            <input className="inputBox" type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />


            <input className="inputBox" type="Password" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />


            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}

export default SignUp;