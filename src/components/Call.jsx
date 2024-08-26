'use client'

import useFetchList from "@/hooks/useFetchList"

export default function Call () {
  
  const { urlList } = useFetchList(process.env.URLS_LIST)

  console.log(urlList)

  return (
    <>
      
    </>
  )
}