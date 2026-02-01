import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import homebg from '../assets/home-bg.jpg'
import Petcard from '../components/Petcard'
import Button from '../components/Button'
import api from '../api/axios'
const Adoptpet = () => {
  const [petData,setPetData]= useState([]);
  useEffect(() => {
    api.get("/home/Adopt")
    .then(res=>{
      setPetData(res.data)})
      .catch(err=>console.log(err))
  }, [])
  console.log(petData)

  return (
    <div style={{backgroundImage:`url(${homebg})`}} className="min-h-screen bg-cover bg-center ">
      <div className="flex">
        <Button to="/dashboard" className="bg-gray-300 text-white p-2 mt-3 ml-4 rounded-lg" text="Go Back" />
        <h1 className="ml-120 flex text-yellow-400 text-4xl justify-center pt-5 "> AVAILABLE PETS </h1>

      </div>
      <div className="flex flex-wrap gap-5  justify-center items-center mt-20">
        

      {
        petData.map(pet =>(
          
          <Petcard pet={pet}/>
        )
        
      )
    }
    </div>
    </div>

  )
}

export default Adoptpet