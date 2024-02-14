"use client"

import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {

  const [menuActive,setMenuActive] = useState(false)
  const itemsMenu = ["Início","Projetos","Experiência","Contato"]
  const handleClick = () =>{
    setMenuActive((prevState)=> !prevState)
  }

  const ativo = menuActive ? <IoMdClose fill="#fff" className="text-3xl " onClick={handleClick} /> : <HiMenu  fill="#fff" className="text-3xl" onClick={handleClick}/> 

  return (
    <div className='w-full h-[50px] bg-bg-header flex items-center fixed justify-between px-[25px] z-10'>
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
        <ul className={`animate-fadeIn gap-[10px] flex bg-bg-header uppercase w-[auto] items-center rounded-b-md text-white`}>
               {itemsMenu.map((item,index)=>{
                return  <li className="cursor-pointer hover:underline" key={index}><Link to={item} smooth={true} duration={500}>{item}</Link></li>
                })}
        </ul>
      </div>
    </div>
  )
}

export default Header