'use client'
import { layoutContext } from "@/context/layoutContext"
import Form from "../Form/Form"
import styles from "./Main.module.css"
import { useContext, useState } from "react"

export default function Main () {

  const { layout, switchLayout } = useContext(layoutContext)
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
    <main className={`${styles.main} ${layout ?  styles.mainToLeft: ''} flex flex-col items-center justify-center bg-black w-[25%] h-[85vh] rounded-[10px] border-[6px] border-double border-[rgb(71,119,0)]`}>
      <img  className={"w-[70%] mb-4"} src="/logo.webp"  alt="user seek logo"/>
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