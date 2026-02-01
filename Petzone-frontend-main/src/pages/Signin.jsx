import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'
import {toast,Bounce} from 'react-toastify'
const Signin = () => {
  const [uname,setUname] = useState("");
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const singin=(e)=>{
    e.preventDefault()
    api.post('/auth/sigin',
      {uname,password}).then(result=>{
        console.log(result.data.user)
        navigate('/Dashboard') })
      .catch(e=>{
       toast.error('WRONG USERNAME OR PASSWORD', {
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
     <div className=" flex justify-center items-center h-screen">
        <form onSubmit={singin} className="flex-col flex items-center mr-10 border-1 p-3 rounded-lg bg-white/20 border-black-400">
            <h2 className="text-white text-2xl text-bold .borel-regular "> SIGNIN</h2>

        <Input type="text" placeholder="enter username or email" className="text-center border rounded-full p-2 m-1 bg-white" onChange={(e)=>setUname(e.target.value)}/>
        <Input type="password" placeholder="enter password" className=" text-center border rounded-full p-2 m-1 bg-white" onChange={(e)=>setPassword(e.target.value)} />
        <Button  text="Sign in" className="hover:bg-yellow-600  hover:text-white hover:cursor-pointer w-fit  rounded-lg text-1xl bg-yellow-300 p-3 text-black font-bold0" />
        </form>
        
    </div>
  )
}

export default Signin