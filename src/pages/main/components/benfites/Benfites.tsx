import { Link } from "react-router-dom"

const Benfites = () => {
  return (
    <section className="min-h-screen font-Italiana grid place-items-center py-8 bg-Gray-800">
        <div className="container">
        <h1 className="font-normal text-6xl leading-[clamp(30px , 4vw,70px )] mb-[30px]">
            Welcome to Barugazi Motors</h1>
            <div className="justify-center grid grid-cols-1 gap-[clamp(32px ,5vw , 70px)] 
            md:grid-cols-2 lg:grid-cols-2">
                <div>
                    <h2 className="font-normal text-[60px] leading-[clamp(50px ,4vw , 100px)]">
                    Exclusive Car Discovery
                    </h2>
                    <p className="mt-4 font-Inria mb-[25px] text-lg md:text-xl leading-[clamp(40px ,4vw , 88px)]">
                    Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit dolor adipiscing egestas
 morbi hac. Eget consectetur rhoncus nunc quisque amet adipiscing in molestie amet. 
Sodales facilisi sociis elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit lectus senectus.
                    </p>
                    <Link to={"/"} className="font-Inria text-lg md:text-xl leading-[24px] font-normal">
                    See more
                    </Link>

                </div>
                <div>
                    <h2 className="font-normal text-[60px] leading-[clamp(50px ,4vw , 100px)]">
                    Exclusive Car Discovery
                    </h2>
                    <p className="mt-4 font-Inria mb-[25px] text-lg md:text-xl leading-[clamp(40px ,4vw , 88px)]">
                    Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit dolor adipiscing egestas
 morbi hac. Eget consectetur rhoncus nunc quisque amet adipiscing in molestie amet. 
Sodales facilisi sociis elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit lectus senectus.
                    </p>
                    <Link to={"/"} className="font-Inria text-lg md:text-xl leading-[24px] font-normal">
                    See more
                    </Link>

                </div>
                <div>
                    <h2 className="font-normal text-[60px] leading-[clamp(50px ,4vw , 100px)]">
                    Exclusive Car Discovery
                    </h2>
                    <p className="mt-4 font-Inria mb-[25px] text-lg md:text-xl leading-[clamp(40px ,4vw , 88px)]">
                    Lorem ipsum dolor sit amet consectetur. Tempus quis facilisis elit dolor adipiscing egestas
 morbi hac. Eget consectetur rhoncus nunc quisque amet adipiscing in molestie amet. 
Sodales facilisi sociis elit adipiscing at ut lorem. Aliquet ultricies eget et nec sit lectus senectus.
                    </p>
                    <Link to={"/"} className="font-Inria text-lg md:text-xl leading-[24px] font-normal">
                    See more
                    </Link>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Benfites