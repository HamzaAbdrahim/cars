import { useState, useEffect, Suspense } from "react";
import { navlinks } from "../../data";
import { styles } from "../../../../styles/style";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import siteLogo from "../../../../../public/images/site__logo.png";


const Navbar = () => {
  const [transtion, settranstion] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleSectionClick = (sectionId:string) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        console.log("hamza");
      }
    };
    settranstion(true)

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  



  return (
    <Suspense fallback={<h1>Loding ....</h1>}>
    <nav
      className={`lg:px-8 px-4 ${styles.flexitems} h-[20vh] justify-between md:justify-start  first-line:bg-transparent`}
      style={{
        transition: "opacity 0.5s ease-in-out", 
        opacity: transtion ? 1 : 0, 
      }}
    >
        <button className="md:hidden">
        <FiMenu className="text-[2rem]"/>
        </button>
        <ul className="hidden md:flex gap-6 py-[0.38rem] mr-6">
          {navlinks.map((nav) => (
        <NavLink key={nav.id} 
        style={{textShadow:"0px 0px 10.9px #000"}}
                onClick={() => handleSectionClick(nav.id)} 
                to={nav.path} className={` font-bold text-base leading-[19px] ${
                    activeSection === nav.id ? "!text-Gray_900 " : "" 
                  }`} >
                {nav.title}
        </NavLink>
          ))}
        </ul>
          <Link to={'/'}>
            <img src={siteLogo} className="" alt="" />
          </Link>
    </nav>
    </Suspense>
  );
};

export default Navbar;

