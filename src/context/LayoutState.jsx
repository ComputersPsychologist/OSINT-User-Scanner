'use client'
import { useState } from "react";
import { layoutContext } from "./layoutContext";

export default function LayoutState({children}) {

  const [layout, setLayout ] = useState(false)
  const switchLayout = () => layout ? setLayout(false) : setLayout(true)

  return (
    <layoutContext.Provider value={{
      layout,
      switchLayout
    }}>
      {children}
    </layoutContext.Provider>
  )
}