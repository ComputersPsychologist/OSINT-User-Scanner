'use client'
import Form from "../Form/Form"
import styles from "./Main.module.css"
import { useState } from "react"

export default function Main () {

  const [formIsLoading, setFormIsLoading] = useState(false);
  
  const handleFormLoading = (isLoading) => {
    setFormIsLoading(isLoading)
  }

  const VideoComp = () => ( 
    <video className={styles.video} poster="/noise.webp" preload="eager" autoPlay muted loop>
      <source src="/screenmini.webm" type="video/webm" />
    </video>
  )

  return (
    <main className=" flex flex-col items-center justify-center bg-black w-[30%] h-full border-x-2 border-solid border-green-900">
      <img  className={"w-[70%] "} src="/logo.webp"  alt="user seek logo"/>
      <Form onLoading={handleFormLoading}/>
      <div className={styles.contenedor}>

        {
          formIsLoading 
          ? <VideoComp />
          : <img src="/greenguy.webp" alt="green guy" className={styles.image} />
        }
      </div>
    </main>
  )
}