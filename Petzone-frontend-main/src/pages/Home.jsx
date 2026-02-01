import React from 'react'
import Title from '../components/Title.jsx'
import './Home.css'
import Button from '../components/Button.jsx'
import Slogan from '../components/Slogan.jsx'
const Home = () => {
  return (
    <>
    <div className="min-h-screen Home">
      <div >

      <div className="flex items-center justify-center mt-30 absolute ml-50">
      <  Title />
      </div>
      <div className="absolute mt-60 ml-80">

      <Slogan />
      </div>
      < Button text="GET STARTED" to="/signup" className="hover:bg-yellow-600  hover:text-white hover:cursor-pointer absolute mt-80 ml-130 w-40 rounded-full text-1xl bg-yellow-300 p-3 text-black font-bold"/>
    </div>
      </div>
    </>
  )
}

export default Home