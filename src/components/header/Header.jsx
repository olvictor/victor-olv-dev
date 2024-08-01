"use client"

import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {


  const [scroll, setScrollActive] = useState(false)

  const [menuActive,setMenuActive] = useState(false)
  const itemsMenu = ["Início","Projetos","Habilidades","Contato"]
  const handleClick = () =>{
    setMenuActive((prevState)=> !prevState)
  }

  useEffect(()=>{
    const handleScroll = ()=>{
      setScrollActive(true);

      if(scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(()=> setScrollActive(false),700)  
    }
    let scrollTimeout;
    window.addEventListener('scroll',handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  },[])

  const ativo = menuActive ? <IoMdClose fill="#fff" className="text-3xl " onClick={handleClick} /> : <HiMenu  fill="#fff" className="text-3xl" onClick={handleClick}/> 

  return (
    <nav className={`animate-fadeIn w-full h-[50px]  hover:bg-bg-header ${scroll ? 'hidden' : "flex"} items-center fixed justify-between px-[25px] md:px-[305px] z-10`}>
        <h1 className="text-white font-bold font-pacifico">VictorOlv</h1>
        <div className="relative md:hidden">
            {ativo}
            <ul className={`${menuActive ? "flex" : "hidden"} animate-fadeIn gap-[10px] flex-col absolute bg-bg-header right-[-25px] bottom-[-132px] uppercase w-[150px] items-center rounded-b-md text-white`}>
               {itemsMenu.map((item,index)=>{
                return  <li key={index}><a href="#">{item}</a></li>
                })}
            </ul>
        </div>

      <div className="hidden md:flex">
        <ul className={`animate-fadeIn gap-[10px] flex  uppercase w-[auto] items-center rounded-b-md text-white`}>
               {itemsMenu.map((item,index)=>{
                return  <li className="cursor-pointer hover:text-font-gray" key={index}><Link to={item} smooth={true} duration={500}>{item}</Link></li>
                })}
        </ul>
      </div>
    </nav>
  )
}

export default Header