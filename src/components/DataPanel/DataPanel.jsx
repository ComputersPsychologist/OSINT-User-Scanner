import styles from "./DataPanel.module.css"

export default function DataPanel ({sites = []}) {
  return (
    <div className={`${styles.panel} overflow-y-scroll p-8`}>
      <div className="grid grid-cols-4 gap-4">
        {
          sites.map((site, index) => (
            <div className="text-white-600 font-pixelify border-solid border border-gray-500 rounded-md w-full h-40 p-2 grid place-items-center bg-black bg-opacity-70" key={index}>
              <div>
                <span className="text-green-700 text-[1.2rem]">{` site · `}</span>
                <span>{`Facebook`}</span>
              </div>
              <div>
                <span className="text-green-700 text-[1.2rem]">{`account · `}</span>
              {`${index + 1} : ${site}`}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}