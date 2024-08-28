import InputField from "../InputField/InputField"
import styles from "./OldFashionedScreen.module.css"

export default function OldFashionedScreen () {
  

  return (
    <main className=" flex flex-col items-center justify-center bg-black w-[30%] h-full border-x-2 border-solid border-green-900">
      <img  className={"w-[70%] "} src="/logo.webp"  alt="user seek logo"/>
      <InputField />
      <div className={styles.contenedor}>
        {/* <video className={styles.video} autoPlay controls loop>
          <source src="/mylogo.mp4" type="video/mp4" />
        </video> */}
        <img src="/greenguy.webp" alt="green guy" className={styles.image} />
      </div>
    </main>
  )
}