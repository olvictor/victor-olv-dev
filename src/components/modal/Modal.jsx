import React, { useEffect, useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiWebtrees } from "react-icons/si";
import Slider from '../slider/Slider';
import { IoMdClose } from "react-icons/io";
import Projetos from '../../utils/projetos';
import { motion } from 'framer-motion';


const Modal = ({ setOpenModal, current}) => {


  const modalRef = useRef();
  useEffect(()=>{
    const clickFora = (e) =>{
      if(modalRef.current &&  !modalRef.current.contains(e.target)){
       setOpenModal(false)
      }
    }

    const handleKeyDown = (e) =>{
      if(e.key === "Escape"){
           setOpenModal(false)
      }
   }

    document.addEventListener('mousedown',clickFora)
    document.addEventListener('keydown',handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', clickFora);
      document.removeEventListener('keydown', handleKeyDown);

    };
  },[setOpenModal])


  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 modal'>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        ref={modalRef} 
        className='bg-[#000000] bg-[radial-gradient(#ffffff33_.15px,#0A0A0A_1px)] bg-[size:20px_20px] h-5/6 w-5/6 divide-x flex divide-solid divide-[#FFFFFF10] drop-shadow-lg pl-2 rounded-xl'>
            <div className='w-1/2 h-full flex flex-col items-center gap-5 mt-[30px] '>
             <h1 className='text-[#D3D3D3]	text-6xl font-bold'>{Projetos[current].titulo} </h1>
             <hr className='w-1/3  border-[#FFFFFF30]'/>
             <Slider  array={Projetos[current].imagens}/>
             <div className='flex gap-3'>
              <motion.a href={Projetos[current].github} target="_blank" rel="noopener noreferrer">
                <FaGithub fill='#fff' size='40px' className='cursor-pointer hover:fill-[#FFD700]'/>
              </motion.a>
              <motion.a href={Projetos[current].deploy} target="_blank" rel="noopener noreferrer">
                <SiWebtrees fill='#fff' size='40px' className='cursor-pointer hover:fill-[#FFD700]'/>
              </motion.a>
        
             </div>
             <div className='flex gap-4 text-white text-xl'>
               <h3>Stack:</h3><span className='text-[#FFD700]'>{Projetos[current].stack}</span>
             </div>
            </div>
            <div className='w-1/2 flex flex-col pl-[30px] items-center'>
              <IoMdClose className='align self-end cursor-pointer mt-[20px] hover:fill-[#FFD700]' fill='#FFFFFF30' size={40} onClick={()=>{setOpenModal(false)}} />
              <p className='mt-[70px] text-white text-xl '>
              {Projetos[current].sobre}
              </p>
              <div className='text-left w-[100%]'>
              {Projetos[current].features && Projetos[current].features.map((f,index)=>{
                return <p className='italic mt-[30px] text-white text-xl '>➝ {f} </p>
              }) }
              </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Modal