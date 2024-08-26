import styles from "./OldFashionedScreen.module.css"

export default function OldFashionedScreen () {
  return (

    <div className={styles.contenedor}>
      <video className={styles.video} autoPlay controls loop>
        <source src="/mylogo.mp4" type="video/mp4" />
      </video>
    </div>

  )
}