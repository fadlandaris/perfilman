import { useState } from "react";
import styles from '../style';
import { navLinks } from '../constants'; 
import { reactLogo, AiOutlineBars, IoMdClose, profile, GoSearch, close, search, logo } from '../assets'; 
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
   <nav className=' w-full flex  items-center navbar gap-x-16 z-50  fixed px-16 py-6 top-0 left-0 right-0 bg-secondary'>
    <img src={logo} className="w-[120px]" />
      <ul className="list-none sm:flex hidden justify-start items-center flex-1 gap-x-9">
        {navLinks.map((nav, index) => (
          <li key={nav.id} >
            <a href={`${nav.id}`} className="text-tertiary hover:text-primary duration-300 transition-all text-[12px]" >{nav.title}</a>
          </li>
        ))}
        <div className="relative cursor-pointer">
          <img src={!toggle ? search : close} className={`w-[16px]`} onClick={() => setToggle(!toggle)}/>

          <div className={`absolute top-1/2 -translate-y-1/2 left-10 transition-all duration-300 ease-in-out transform ${
          toggle ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-10 opacity-0 scale-95 pointer-events-none'
          }`}>
            <SearchBar />
          </div>
        </div>
      </ul>

      {/* mobile  */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : AiOutlineBars }alt="AiOutlineBars " className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)}/>

        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((nav, index) => (
          <li key={nav.id}>
            <a href={nav.id}>{nav.title}</a>
          </li>
        ))}
          </ul>
        </div>
      </div> 
      
      <img src={profile} className="w-[40px] h-[40px] object-cover hidden md:flex rounded-full " />
   </nav>
  );
};

export default Navbar;

