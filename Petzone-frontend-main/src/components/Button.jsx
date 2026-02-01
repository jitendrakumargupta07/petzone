import React from 'react'
import {useNavigate} from 'react-router-dom'
const Button = ({text,to,type,className}) => {
  const Navigate = useNavigate();
  function btnclick(){
    Navigate(to);
  }

  return (
    <>
    <div>
      <button type={type} id="btn" onClick={(btnclick)} className={className}>{text}</button>
    </div>
    </>
  )
}

export default Button