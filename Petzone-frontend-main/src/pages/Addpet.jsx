import React from 'react'
import homebg from '../assets/home-bg.jpg'
import Input from '../components/Input'
import {useState} from 'react'
import {toast,Bounce} from 'react-toastify'
import Button from "../components/Button"
import axios from 'axios'
import api from '../api/axios'
const Addpet = () => {
  const [petName,setPetName] = useState("")
  const [desc,setDesc]= useState("")
  const [type,setType]=useState("")
  const [contact,setContact]= useState("")
  const [location,setLocation] = useState("")
  const [image,setImage]= useState("")
 const handleImage=(e)=>{

  const file = e.target.files[0]
  if(!file){
    return;
  }
  const reader =new FileReader();
  if(file.size>2*1024*1024){
    alert("image should be less than 2 mb")
    return;
  }
  reader.onloadend=()=>{
    setImage(reader.result)
  }
  reader.readAsDataURL(file)

 }
  const handlesubmit=(e)=>{
    e.preventDefault()
  
    console.log("submit")
    api.post("/home/addpet",
      {petName,desc,type,location,contact,image}
     )
    .then(result=>{
      toast('PET ADDED', {
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
    .catch(err=>{
toast.error('Image size must be under 1 mb', {
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
  
    <div style={{backgroundImage:`url(${homebg})`}} className="min-h-screen bg-cover bg-center ">
         <Button to="/dashboard" className="bg-gray-300 text-white p-2 mt-3 ml-4 absolute rounded-lg" text="Go Back" />
      <div className='  flex  items-center justify-center min-h-screen'>

      <form onSubmit={handlesubmit} className='border rounded p-3 '>

        <h1 className="ml-9"> ENTER PET DETAILS</h1>
        <Input className=" border rounded p-2 bg-blue-400 text-white text-center h-8 m-1 " type="text" placeholder="Enter Pet name" 
        onChange={(e)=>{setPetName(e.target.value)}} />
        <div className="ml-10 flex">
          <p className=" text-white bg-blue-400 border rounded p-1 ">PetType:</p>
        <select onChange={(e)=>{setType(e.target.value)}}>
          <option value="Select">Select type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="Bird">Bird</option>
          <option value="other">other</option>
        </select>
        </div>
        <input className=" border rounded p-2 bg-blue-400 text-white text-center h-8 m-1 " type="text" placeholder="Enter Contact number" 
        onChange={(e)=>{setContact(e.target.value)}} />
        <Input className=" border rounded p-2 bg-blue-400 text-white text-center h-8 m-1 " type="text" placeholder="Enter Location" 
        onChange={(e)=>{setLocation(e.target.value)}} />
        <div className="flex text-center r">
<span className=" pointer-events-none absolute border rounded  bg-blue-400 text-white ml-8 h-8 p-1">UPLOAD PET IMAGE</span>
        <Input  id="img"className=" border rounded p-2 bg-yellow-400 text-white text-center  w-37 p-2 text-center h-8 ml-8" type="file" 
        onChange={handleImage} />
        </div>
        <Input className=" border rounded p-2 bg-blue-400 text-white text-center h-14 m-1 " type="text" placeholder="Enter Description" 
        onChange={(e)=>{setDesc(e.target.value)}} />
        <Button type="submit" text="List Your pet" className=" ml-10 hover:bg-yellow-600  hover:text-white hover:cursor-pointer w-fit  rounded-lg text-1xl bg-yellow-300 p-3 text-black font-bold0"/>
      </form>
        </div>
      </div>
    </>
  )
}

export default Addpet