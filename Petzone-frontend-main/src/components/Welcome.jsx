import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import api from '../api/axios'

function Welcome() {
    const [user,setUser] = useState("");
    useEffect(()=>{

        api.get('/home/dashboard')
        .then(res => setUser(res.data.user))
        .catch(
            console.log("error")
        )
    },[])
  return (
    <>
    <div className="flex uppercase  text-10 md:text-4xl borel-regular">
        <h1 className="text-yellow-300 ">Welcome To PETZONE,</h1> <h2 className='text-green-300'>{user}</h2>
        </div>
        <p className=" text-10 md:text-xl text-grey-300  left-12">Find your perfect companion or give a pet a loving home</p>
    </>
  )
}

export default Welcome