import {useState,useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import axios from 'axios'
import api from '../api/axios'
 const Protectedroutes = ({children})=>{
    const [isAuth,setIsAuth]=useState(null)
    useEffect(()=>{
        api.get('/check/check')
        .then(()=>setIsAuth(true))
        .catch(()=>setIsAuth(false))
    },[])
    if(isAuth==null){
        return <h2> loading </h2>
    }
    else 
        return isAuth?children:<Navigate to='/signup' />
 }
 export default Protectedroutes 
