import { styles } from "../../../../styles/style"
import { CiCalendar } from "react-icons/ci";
import carImage from "../../../../../public/images/carImage.png";

const Arrivals = () => {
  return (
    <section className="container h-screen grid place-items-center py-4 bg-white text-white">
        <h1 className="font-normal text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[clamp(30px ,4vw , 71px)]">New Arrivals</h1>
        <div className={`${styles.threeCoslGrid} my-[clamp(25px ,4vw ,50px)] gap-2`}>
            <div className="font-inter">
                <img src={carImage} className="w-full h-[406px]" alt="" />
                <div className="p-4 bg-white">
                    <h3 className="font-bold text-lg leading-[22px]">
                    Mercedes Amg get 2024
                    </h3>
                    <ul className={`${styles.flexitems} justify-between gap-2 px-[clamp(15px ,4vw , 36px)]`}>
                        <li className={styles.flexitems + 'gap-2 font-medium text-[10px] leading-3 text-gray-light'}>
                        <CiCalendar />
                            2021
                        </li>
                    </ul>
                    <hr className="border border-solid border-[#d9d9d9] mb-[8px] mt-[13px]" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <button className="h-31px text-center grid place-items-center font-medium text-[10px] leading-3 
                        bg-black ">I’m Interested</button>
                        <button className="h-31px text-center grid place-items-center font-medium text-[10px] leading-3 
                        bg-[#d9d9d9] text-black">View</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Arrivals