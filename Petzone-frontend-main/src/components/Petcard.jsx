import React from 'react'

const Petcard = ({pet}) => {
  return (
    <> 
  
        <div className="w-60 h-50 bg-gray-900 rounded-lg flex-col "> 
            <div className=" bg-blue-900 text-white rounded-xl flex">
            <img src={pet.image} alt="image"  className=" rounded-lg w-20 h-30 object-cover justify-center items-center "/>
            <div className="flex rounded-lg ml-2 flex-col gap-2">

            <h1>Name: {pet.petName}</h1> <p>Type: {pet.type}</p> 
             <p>Location: {pet.location}</p> <p className="break-all">Num: {pet.contact}</p>
            </div>
            </div>
           <div className="m-5 text-white"> <p>{pet.desc}</p></div>
             </div>
    
    </>
  )
}

export default Petcard
