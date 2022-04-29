import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import react,{useState,useEffect} from 'react'
import Router from "next/router";

export default function Home() {
  const[loaded,setLoaded] = useState(false)
  
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('/convert')
    }else{
        setLoaded(true)
    }
  },[]);
  if(!loaded){
    return(
      <></>
    )
  }
  return(
    <p>
            You will see this page only if pathname !== "/" , <br/>
        </p> 
  )
}
