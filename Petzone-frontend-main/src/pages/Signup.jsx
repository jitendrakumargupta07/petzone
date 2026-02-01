import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios'
import { toast, Bounce } from 'react-toastify'
import api from '../api/axios'

const Signup = () => {
  const [username,setUsername]=useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
 const handleSubmit = (e)=>{
   e.preventDefault()
  api.post('/auth/register',{
    username,email,password
  })
  .then(result => {
     navigate("/Dashboard")})
  .catch(err=>{
    toast.error('USER ALREADY EXIST!', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
 })
 }
  return (
    <>  
    
    <div className=" flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="mr-20 flex-col flex items-center border-1 p-5 rounded-lg bg-white/20 border-black-400">
            <h2 className="text-white text-3xl text-bold .borel-regular "> SIGNUP</h2>

        <Input type="text" placeholder="enter username" className="text-center border rounded-full p-2 m-2 bg-white" onChange={(e)=>{
          setUsername(e.target.value)
        }}/>
        <Input type="email" placeholder="enter email" className="text-center border rounded-full p-2 m-2 bg-white" onChange={(e)=>{
          setEmail(e.target.value)
        }} />
        <Input type="password" placeholder="enter password" className=" text-center border rounded-full p-2 m-2 bg-white" onChange={(e)=>{
          setPassword(e.target.value)
        }} />
        <Button text="Sign up" className="hover:bg-yellow-600  hover:text-white hover:cursor-pointer w-fit  rounded-lg text-1xl bg-yellow-300 p-3 text-black font-bold0" type ="submit"/>

        <Link to="/signin" className="text-white underline mt-2">
  Already have an account?
</Link>

        </form>
        
    </div>
    </>
  )
}

export default Signup
