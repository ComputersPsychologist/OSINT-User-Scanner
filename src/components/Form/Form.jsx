import useFetchList from "@/hooks/useFetchList"
import { useEffect, useRef, useState } from "react"
import InputField from "../InputField/InputField"
import QueryLoader from "../QueryLoader/QueryLoader"
import Link from "next/link"

export default function Form ({ onLoading }) {

  const { urlList } = useFetchList(process.env.URLS_LIST)
  const listLength = urlList.length 
  // QUERY LIMIT (listLength by default)
  const queryLimit = 10
  
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [info, setInfo] = useState(null)
  const [site, setSite] = useState(null)
  const [counter, setCounter] = useState(0)
  const [itsDone, setItsDone] = useState(false)


  const reset = () => {
    window.location.reload();
  }

  const handleInputChange = (newValue) => {
    setQuery(newValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(query && urlList) {
      setIsLoading(true)
      onLoading(true)
      iterateList(urlList)
    } else {
      console.log('database error: db not found')
    }
  }

  const iterateList = async (urlList) => {
    urlList.map((site, index) => {
      // fetchs limitated by number
      if(index < queryLimit) {
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
      const templateUrl = `/api/check?url=${encodeURIComponent(site.uri_check)}&site=${encodeURIComponent(JSON.stringify(site))}`
      const response = await fetch(templateUrl);
      const data = await response.json()
      if(data) {
        const status = data.responseData.status
        // debug
        console.log(status, data.site.name, data.responseData)
        // saving data 
        setInfo(data.responseData)
        setSite(data.site)
      }
    } catch (error) {
      console.error('Error al verificar el sitio web:', error);
    } 
  }


  useEffect(() => {
    // fetch counter for loader
    if(info)
      setCounter(counter + 1)
  },[site, info])

  useEffect(() => {
    if(listLength)
      if(counter >= queryLimit)
        setItsDone(true)
  },[counter])

  const Done = () => (
    <>
      <span className="text-green-600 font-pixelify">{`It's Done!`}</span>
      <Link href="" onClick={reset}>😀</Link>
    </>
  )

  return (
    <form className="w-[44%] py-2 px-2 mb-4 border-4 border-double border-green-600 rounded-md flex justify-between" onSubmit={handleSubmit}>
      {
        !isLoading 
          ? <InputField value={query} onChange={handleInputChange} /> 
          : !itsDone
            ? <QueryLoader count={counter} listLength={listLength} />
            : <Done />
      }
    </form>
  )
}