import styles from "./QueryLoader.module.css"

export default function QueryLoader({count, listLength}) {
  
return (
  <>
    <div>
      <span className="text-green-500 text-1xl font-pixelify ">Loading</span>  
      <span className={`text-green-500 text-1xl font-pixelify ${styles.loading}`}>...</span>
    </div>
    <div>
      <span className="text-green-500 text-1xl font-pixelify">{count}</span>
      <span className="text-green-500 text-1xl font-pixelify">/{listLength}</span>
    </div>
  </>
)

}