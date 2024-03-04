import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <>
    <section className="h-screen bg-cover leading-normal text-white w-full
     bg-no-repeat bg-[url('../../../public/images/hero__img.png')]" >
    <Navbar />
    <h1
    style={{textShadow:"0px , 0px , 33.5px , #000000"}}
     className="text-[clamp(2.5rem,5vw,5rem)] text-center md:text-start font-black leading-[clamp(50px ,4vw ,90px )]">
      Take the next step <br /> Of your business</h1>
    </section>
    </>
  )
}

export default App