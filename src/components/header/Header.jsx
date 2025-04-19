"use client"

import { useEffect, useState } from "react";
import { MdOutlineHome } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa";
import { LuFolderOpen } from "react-icons/lu";
import { RiToolsFill } from "react-icons/ri";
import { GrContact } from "react-icons/gr";


const Header = () => {


  const [scroll, setScrollActive] = useState(false)

  const [itemAtivo,setItemAtivo] = useState(null);
 
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


  return (
    <nav className={`animate-fadeIn w-full h-auto hover:bg-black-opacity flex justify-center pt-8  px-[25px] md:px-[305px] z-40`}>
      <navbar className='bg-white-opacity  w-full h-[3rem] lg:w-2/5 flex justify-center items-center gap-8 rounded-2xl px-4'>
        <div className="relative">
          <MdOutlineHome size={30} color="#fff" className="cursor-pointer" onMouseEnter={()=> setItemAtivo("home")} onMouseLeave={()=> setItemAtivo(null)}/>
          <span className={`absolute animate-slide-bottom top-10 left-[-6px] p-1 text-white w-auto px-4 bg-white-opacity rounded-xl ${itemAtivo === "home" ? 'flex justify-center items-center text-center' : 'hidden'}`}> home </span>
        </div>
        <div className="relative">
          <FaRegFolder size={30} color="#fff" className="cursor-pointer"  onMouseEnter={()=> setItemAtivo("projetos")} onMouseLeave={()=> setItemAtivo(null)}/>
          <span className={`absolute animate-slide-bottom top-10 left-[-6px] p-1 text-white w-auto px-4 center bg-white-opacity rounded-xl ${itemAtivo === "projetos" ? 'flex': 'hidden'}`}>projetos</span>
        </div>

        <div className="relative" >
          <LuFolderOpen size={30} color="#fff" className="cursor-pointer" onMouseEnter={()=> setItemAtivo("experiencia")} onMouseLeave={()=> setItemAtivo(null)}/>
          <span className={`absolute animate-slide-bottom top-10 left-[-6px] p-1 text-white w-auto px-4 center bg-white-opacity rounded-xl ${itemAtivo === "experiencia" ? 'flex': 'hidden'}`}>experiência</span>
        </div>

        <div className="relative" >
          <RiToolsFill size={30} color="#fff" className="cursor-pointer" onMouseEnter={()=> setItemAtivo("ferramentas")} onMouseLeave={()=> setItemAtivo(null)}/>
          <span className={`absolute animate-slide-bottom top-10 left-[-6px] p-1 text-white w-auto px-4 center bg-white-opacity rounded-xl ${itemAtivo === "ferramentas" ? 'flex': 'hidden'}`}>ferramentas</span>
        </div>

        <div className="relative" >
          <GrContact size={30} color="#fff" className="cursor-pointer" onMouseEnter={()=> setItemAtivo("contato")} onMouseLeave={()=> setItemAtivo(null)}/>
          <span className={`absolute animate-slide-bottom top-10 left-[-6px] p-1 text-white w-auto px-4 center bg-white-opacity rounded-xl ${itemAtivo === "contato" ? 'flex': 'hidden'}`}>contato</span>
        </div>
      </navbar>
    </nav>
  )
}

export default Header