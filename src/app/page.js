import Main from "@/components/Main/Main";

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen grid place-items-center overflow-hidden bg-cover bg-no-repeat" style={{ backgroundImage: `url('/city.webp')` }}>
      <Main />
    </div>
  )
}
