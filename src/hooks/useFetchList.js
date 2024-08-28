
import { useEffect, useState } from "react"

export default function useFetchList (DB_URL) {

  const [urlList, setUrlList] = useState([])
  const [categories, setCategories] = useState([])
  
  const useFetchList = async (url) => {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      setUrlList(data.sites)
      setCategories(data.categories)
    } else {
      console.log('error' + response.status)
    }
  }
  
  useEffect(() => {
    useFetchList(DB_URL)
  },[])

  return { urlList, categories }

}
  
