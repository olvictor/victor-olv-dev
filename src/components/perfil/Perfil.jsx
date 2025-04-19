import React from 'react'
import perfil from '../../assets/perfil.png'
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";


const Perfil = () => {
  return (
    <div className='bg-white h-auto w-[90%] lg:w-2/4 flex flex-col justify-items-center items-center rounded-xl py-6 gap-4'> 
      <img src={perfil}  className='w-2/3 rounded' alt="foto de perfil" />
      <h2 className='text-3xl text-bg-black font-bold tracking-tighter leading-[1.1]'>Victor Oliveira</h2>
      <span className='text-color-cinza-2 w-3/4 text-center font-medium leading-[1.1] font-thin'>Um engenheiro de software que desenvolveu inúmeras soluções inovadoras.</span>
      <div className='flex gap-6' >
        <a href="https://github.com/olvictor" target="_blank"><FiGithub  size={30} className='text-color-orange cursor-pointer'/></a>
        <a href="https://www.linkedin.com/in/victorolvdev/" target="_blank"><FiLinkedin  size={30} className='text-color-orange cursor-pointer'/></a>
        <a href=""><MdOutlineEmail  size={30} className='text-color-orange cursor-pointer'/>
        </a>
      </div>
    </div>
  )
}

export default Perfil