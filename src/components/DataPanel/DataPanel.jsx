'use client'
import { useContext } from "react"
import Card from "../Card/Card"
import styles from "./DataPanel.module.css"
import { layoutContext } from "@/context/layoutContext"

export default function DataPanel ({sites = []}) {

  const { layout, setLayout } = useContext(layoutContext)

  return (
    <div className={`${styles.panel} ${layout ? styles.panelToLeft : ''} overflow-y-scroll p-6 w-[65vw] h-[85vh] bg-[rgba(69,116,0,0.132)] text-[white] rounded-[10px] border-[6px] border-double border-[rgb(71,119,0)]`}>
      <div className={`grid grid-cols-3 gap-4`}>
        {
          sites.map((site, index) => (
           <Card site={site} key={index} />
          ))
        }
      </div>
      <div className="h-[15vh] invisible"></div>
    </div>
  )
}