import React from 'react'

const Input = ({type,placeholder,value,onChange,className}) => {
  return (
    <div><input  
    className={className} 
    type={type}
     placeholder={placeholder} 
     value={value} 
     onChange={onChange} ></input></div>
  )
}

export default Input