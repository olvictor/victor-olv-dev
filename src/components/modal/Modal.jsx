import React, { useEffect, useRef } from 'react'
import { close } from '../svgs/svgs'
import dogSOCIAL from '../../assets/dogs.png'
import { FaGithub } from 'react-icons/fa'
import { SiWebtrees } from "react-icons/si";
import Slider from '../slider/Slider';
import { IoMdClose } from "react-icons/io";
import Projetos from '../../utils/projetos';

const Modal = ({ setOpenModal, current}) => {
  console.log(Projetos)

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
        <div ref={modalRef} className='bg-[#0A0A0A] h-5/6 w-5/6 divide-x flex divide-solid divide-[#FFFFFF10] drop-shadow-lg pl-2'>
            <div className='w-1/2 h-full flex flex-col items-center gap-5 mt-[30px] '>
             <h1 className='text-[#D3D3D3]	text-6xl'>{Projetos[current].titulo} </h1>
             <hr className='w-1/3  border-[#FFFFFF30]'/>
             <Slider  array={Projetos[current].imagens}/>
             <div className='flex gap-3'>
              <a href={Projetos[current].github} target="_blank" rel="noopener noreferrer">
                <FaGithub fill='#fff' size='40px' className='cursor-pointer hover:fill-[#FFD700]'/>
              </a>
              <a href={Projetos[current].deploy} target="_blank" rel="noopener noreferrer">
                <SiWebtrees fill='#fff' size='40px' className='cursor-pointer hover:fill-[#FFD700]'/>
              </a>
        
             </div>
             <div className='flex gap-4 text-white text-xl'>
               <h3>Stack:</h3><span className='text-[#FFD700]'>{Projetos[current].stack}</span>
             </div>
            </div>
            <div className='w-1/2 flex flex-col pl-[30px] items-center'>
              <IoMdClose className='align self-end cursor-pointer mt-[20px] hover:fill-[#FFD700]' fill='#FFFFFF30' size={40} onClick={()=>{setOpenModal(false)}} />
              <p className='mt-[70px] text-white text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet volutpat odio eget laoreet. Sed congue massa vel augue rhoncus, cursus pellentesque lectus pulvinar. Praesent nec mauris dolor. Fusce blandit placerat ligula non condimentum. Cras sollicitudin est mauris, a blandit dolor faucibus ut. Curabitur pellentesque mauris at mi semper, eu malesuada odio volutpat. Morbi risus nisi, faucibus vitae sollicitudin non, convallis vel ligula. Morbi suscipit mauris a erat aliquet, sed maximus lectus aliquam. Vestibulum vel neque ac nibh dapibus porttitor. Nam tempor nisi quis mi euismod fringilla. Ut sed lobortis ligula. Aenean eu diam dignissim, pulvinar urna sed, porttitor metus. Praesent sagittis gravida purus quis faucibus. In pretium massa at justo pretium, non tempus nunc ultricies. Donec eleifend pharetra justo ut auctor.</p>
            </div>
        </div>
    </div>
  )
}

export default Modal