import DataPanel from "@/components/DataPanel/DataPanel";
import Main from "@/components/Main/Main";
import styles from "./page.module.css"

export default function Home() {
  
  const sitesList = ["hola", "perro", "como", "te", "va", "todo", "bien?", "hola", "perro", "como", "te", "va", "todo", "bien?", "hola", "perro", "como", "te", "va", "todo", "bien?"]

  return (
    <main className={`${styles.main} bg-black w-screen h-screen flex place-items-center gap-4 pr-4 overflow-hidden bg-cover bg-no-repeat`} style={{ backgroundImage: `url('/city.webp')` }}>
      <Main />
      <DataPanel sites={sitesList} />
    </main>
  )
}
