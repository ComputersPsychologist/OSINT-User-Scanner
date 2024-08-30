import styles from "./Card.module.css"

export default function Card ({ site = {}, index = 0 }) {
  return (
    <div className={`${styles.card} text-white-600 font-pixelify border-solid border border-gray-500 rounded-md w-full h-40 p-2 grid place-items-center bg-black bg-opacity-70`}>
      <div>
        <span className="text-green-700 text-[1.2rem]">{` site · `}</span>
        <span>{`Facebook`}</span>
      </div>
      <div>
        <span className="text-green-700 text-[1.2rem]">{`category · `}</span>
        {`${index + 1} category`}
      </div>
      <div>
        <span className="text-green-700 text-[1.2rem]">{`link · `}</span>
        <span>
          { (`http://www.facebook.com`).substring(0, 23) + "..." }
        </span>
      </div>
      <div className="flex place-items-center">
        <span>{`(`}</span>
        <img src="/load.gif" alt="planet icon" className="w-10" />
        <span>{`)`}</span>
      </div>
    </div>
  )
}