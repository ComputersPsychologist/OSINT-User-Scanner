import DataPanel from "@/components/DataPanel/DataPanel";
import Main from "@/components/Main/Main";
import styles from "./page.module.css"
import LayoutState from "@/context/LayoutState";

export default function Home() {
  
  const sitesList = ["hola", "perro", "como", "te", "va", "todo", "bien?", "hola", "perro", "como", "te", "va", "todo", "bien?", "hola", "perro", "como", "te", "va", "todo", "bien?"]

  return (
    <main className={`${styles.main} bg-black w-[screen] h-screen gap-4 px-4 overflow-hidden bg-cover bg-no-repeat`} style={{ backgroundImage: `url('/city.webp')` }}>
      <LayoutState>
        <Main />
        <DataPanel sites={sitesList} />
      </LayoutState>
    </main>
  )
}
