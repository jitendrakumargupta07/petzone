import React from 'react'
import homebg from '../assets/home-bg.jpg'
import Welcome from '../components/Welcome.jsx'
import Button from '../components/Button.jsx'
import Title from '../components/Title.jsx'
const Dashboard = () => {
  return (
    <>
    <div 
    className="min-h-screen bg-cover bg-center flex flex-col items-center px-4 justify-center"
    style={{backgroundImage:`url(${homebg})`}}>
      <div className="mb-10 flex flex-col text-center  md:mb-16"> 
      <Welcome />
      </div>
<div className="flex flex-col gap-10 md:flex-row">

      <Button to="/Adoptpet" text="Adopt a pet" className="hover:bg-yellow-600  hover:text-white hover:cursor-pointer  w-30 rounded-full text-1xl bg-yellow-300 p-3 text-black font-bold"/>
      <Button to="/Addpet" text="List your pet" className="hover:bg-yellow-600  hover:text-white hover:cursor-pointer w-30 rounded-full text-1xl bg-yellow-300 p-3 text-black font-bold"/>
</div>
    </div>

    </>
  )
}

export default Dashboard