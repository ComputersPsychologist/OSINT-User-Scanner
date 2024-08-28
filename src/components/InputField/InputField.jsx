'use client'
import useFetchList from "@/hooks/useFetchList"
import styles from "./InputField.module.css"
import { useEffect, useRef, useState } from "react"

export default function InputField () {


  /* Text input focused on load */
  const focusedInput = useRef(null)
  useEffect(() => {
    if(focusedInput.current) {
      focusedInput.current.focus()
    }
  },[])

  /* Query */

  const { urlList } = useFetchList(process.env.URLS_LIST)
  const [query, setQuery] = useState(null)
  const [statusCode, setStatusCode] = useState(null);
  const [info, setInfo] = useState(null)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(query && urlList) {
      iterateList(urlList)
    } else {
      console.log('database error: db not found')
    }
  }

  const iterateList = async (urlList) => {
    urlList.map((site, index) => {

      if(index < 3) {

        if(site.uri_check) {
          site.uri_check = site.uri_check.replace(/{account}/g, `${query}`);
          checkWebsite(site)
        } else {
          console.log(`URL from ${site.name} not found in database`)
        }

      }


    })
  }

  const checkWebsite = async (site) => {
    try {
      const response = await fetch(`/api/check?url=${encodeURIComponent(site.uri_check)}`);
      const data = await response.json()
      setStatusCode(data.status)
      setInfo(data.response)
    } catch (error) {
      console.error('Error al verificar el sitio web:', error);
    } finally {
      console.log(statusCode, site.name, info)
    }
  }

  return (
    <form className="w-[44%] py-2 px-2 mb-4 border-4 border-double border-green-600 rounded-md flex justify-between" onSubmit={handleSubmit}>
      {/* <div>
        <span className="text-green-500 text-1xl font-pixelify ">Loading</span>  
        <span className={`text-green-500 text-1xl font-pixelify ${styles.loading}`}>...</span>
      </div>
      <div>
        <span className="text-green-500 text-1xl font-pixelify">0</span>
        <span className="text-green-500 text-1xl font-pixelify">/660</span>
      </div> */}
      <input 
        className={`${styles.userInput} font-pixelify`}   
        type="text" 
        placeholder="@username + ENTER↵"
        ref={focusedInput}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}