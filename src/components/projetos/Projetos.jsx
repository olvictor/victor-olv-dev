'use client'
import React, { useCallback, useRef } from 'react'
import dog from '../../assets/dogSOCIAL.png'
import gymAPP from '../../assets/Gym.png'
import fotolanding from '../../assets/fotolanding.png'
import store from '../../assets/store.png'



import { IoLogoGithub } from "react-icons/io";
import { GoBrowser } from "react-icons/go";
import { FaAnglesDown } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer'

const Projetos = () => {
    
  

  return (
    <div id='Projetos' className='h-[1400px] md:h-[600px]'>
     <div className='animate-fadeIn flex flex-col gap-[40px] h-[auto] text-center relative mt-[50px] '>
        <div className="absolute top-[70px] left-0 w-full h-[1px] bg-bg-header z-10"></div>

            <h2 className='text-5xl font-bold text-white '>Projetos</h2>

            <div className='flex flex-col lg:flex lg:flex-row flex-wrap	justify-center items-center  gap-[30px]'>

                <div className='flex flex-col items-center '>
                    <div className='rounded-1xl h-[300px] w-[300px] lg:w-[400px] bg-bg-header'>
                        <img className='rounded-1xl rounded-b-xl h-64 w-[100%] opacity-85' src={dog} />
                        <div className='flex h-[50px] rounded-b-2xl items-center justify-center gap-[10px]'>
                                <div className='flex gap-[10px] text-2xl'>
                                    <a href="https://github.com/olvictor/Dogs-Social-media" target="_blank"><IoLogoGithub fill='#fff' /></a>
                                    <a href="https://dogs-social-media-pi.vercel.app" target="_blank"><GoBrowser fill='#fff' /></a>
                                </div>
                                <h4 className='text-white font-bold'>Social Media</h4>
                                <FaAnglesDown  fill='#fff' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='rounded-1xl h-[300px] w-[80%] lg:w-[400px] bg-bg-header'>
                        <img className='rounded-1xl rounded-b-xl h-64 w-[100%] opacity-85' src={gymAPP} />
                        <div className='flex h-[50px] rounded-b-2xl items-center justify-center gap-[10px]'>
                                <div className='flex gap-[10px] text-2xl'>
                                    <a href="https://github.com/olvictor/gymproject" target="_blank"><IoLogoGithub fill='#fff' /></a>
                                    <a href="https://gymproject-nu.vercel.app/" target="_blank"><GoBrowser fill='#fff' /></a>
                                </div>
                                <h4 className='text-white font-bold'>Gym APP</h4>
                                <FaAnglesDown  fill='#fff' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='rounded-1xl h-[300px] w-[80%] lg:w-[400px] bg-bg-header'>
                        <img className='rounded-1xl rounded-b-xl h-64 w-[100%] opacity-85' src={fotolanding} />
                        <div className='flex h-[50px] rounded-b-2xl items-center justify-center gap-[10px]'>
                                <div className='flex gap-[10px] text-2xl'>
                                    <a href="https://github.com/olvictor/landing-page-tailwind" target="_blank"><IoLogoGithub fill='#fff' /></a>
                                    <a href="https://landing-page-tailwind-pied.vercel.app" target="_blank"><GoBrowser fill='#fff' /></a>
                                </div>
                                <h4 className='text-white font-bold'>Landing PAGE</h4>
                                <FaAnglesDown  fill='#fff' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='rounded-1xl h-[300px] w-[80%] lg:w-[400px] bg-bg-header'>
                        <img className='rounded-1xl rounded-b-xl h-64 w-[100%] opacity-85' src={store} />
                        <div className='flex h-[50px] rounded-b-2xl items-center justify-center gap-[10px]'>
                                <div className='flex gap-[10px] text-2xl'>
                                    <a href="https://github.com/olvictor/fakestoreapi" target="_blank"><IoLogoGithub fill='#fff' /></a>
                                    <a href="https://fakestoreapi-eight.vercel.app" target="_blank"><GoBrowser fill='#fff' /></a>
                                </div>
                                <h4 className='text-white font-bold'>Store APP</h4>
                                <FaAnglesDown  fill='#fff' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
  )
}

export default Projetos