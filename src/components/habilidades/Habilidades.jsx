import { useState } from "react";
import {Html5, Javascript, NextJs, Node, Postgree, ReactSVG,java,TailwindCSS} from "../svgs/svgs";
import { animate, motion } from "framer-motion";


const Habilidades = () => {
    const [itemView,setItemView] = useState(null)

    const iconVariants = (duration) => ({
      initial:{y:-10},
      animate: {
        y:[10,-10],
        transition:{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }
      }
    })


  return ( 
    <motion.div 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:0}}
    transition={{duration:0.5,delay:0.76}}
    id='Habilidades'>
      <div className='flex flex-col items-center gap-[40px] h-screen relative items-center justify-center'>
              <div className='flex flex-col items-center '>
                  <h2 className='text-5xl font-bold text-white'>Habilidades</h2>
              </div>
                  <div className='flex gap-[20px] items-center justify-center flex-wrap lg:mt-[100px]'>
                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col  rounded-2xl  text-center  h-[60px] w-[80px] shadow-2xl  md:w-[200px] md:h-[150px] justify-center items-center">
                      <img src={Html5} alt="logo html5" height='50px' width='100px' className=" cursor-pointer" onMouseEnter={()=>setItemView('html')} onMouseLeave={()=> setItemView(null)}/>
                      <p className={`${itemView === 'html' ? 'block' :'hidden'} text-white font-bold item-center` }>Html5</p>
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col  text-center  h-[60px] w-[80px] shadow-2xl md:w-[200px] md:h-[150px] justify-center items-center">
                     <img src={Javascript} alt="logo Javascript"  height='50px' width='100px' className=" cursor-pointer" onMouseEnter={()=>setItemView('javascript')} onMouseLeave={()=> setItemView(null)}/>
                     <p className={`${itemView === 'javascript' ? 'block' :'hidden'} text-white font-bold item-center` }>Javascript</p>
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col  text-center  h-[60px] w-[80px] shadow-2xl md:w-[200px] md:h-[150px] justify-center items-center">
                      <img src={NextJs} alt="logo NextJS"  height='50px'width='100px' className=" cursor-pointer" onMouseEnter={()=>setItemView('nextJS')} onMouseLeave={()=> setItemView(null)}/>
                      <p className={`${itemView === 'nextJS' ? 'block' :'hidden'} text-white font-bold item-center` }>NextJS</p>
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col  text-center  h-[60px] w-[80px] shadow-2xl md:w-[200px] md:h-[150px] justify-center items-center">
                      <img src={Node} alt="logo Node"  height='50px'width='100px' className=" cursor-pointer" onMouseEnter={()=>setItemView('nodeJS')} onMouseLeave={()=> setItemView(null)}/>
                      <p className={`${itemView === 'nodeJS' ? 'block' :'hidden'} text-white font-bold item-center` }>NodeJS</p>
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col  text-center  h-[60px] w-[80px] shadow-2xl md:w-[200px] md:h-[150px] justify-center items-center">
                      <img src={Postgree} alt="logo Postgree"  height='50px'width='100px' className=" cursor-pointer" onMouseEnter={()=>setItemView('postgresql')} onMouseLeave={()=> setItemView(null)}/>
                      <p className={`${itemView === 'postgresql' ? 'block' :'hidden'} text-white font-bold item-center` }>Postgresql</p>
                    </motion.div>


                    <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col  text-center  h-[60px] w-[80px] shadow-2xl md:w-[200px] md:h-[150px] justify-center items-center">
                      <img src={ReactSVG} alt="logo ReactSVG"  height='50px'width='100px' className=" cursor-pointer" onMouseEnter={()=>setItemView('react')} onMouseLeave={()=> setItemView(null)}/>
                      <p className={`${itemView === 'react' ? 'block' :'hidden'} text-white font-bold item-center` }>React</p>
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col  text-center  h-[60px] w-[80px] shadow-2xl md:w-[200px] md:h-[150px] justify-center items-center">
                      <img src={TailwindCSS} alt="logo tailwind"  height='50px'width='100px' className="" onMouseEnter={()=>setItemView('tailwind')} onMouseLeave={()=> setItemView(null)}/> 
                      <p className={`${itemView === 'tailwind' ? 'block' :'hidden'} text-white font-bold item-center` }>TailwindCSS</p>
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col  text-center  h-[60px] w-[80px] shadow-2xl md:w-[200px] md:h-[150px] justify-center items-center">
                      <img src={java} alt="logo java"  height='50px'width='100px' className="" onMouseEnter={()=>setItemView('java')} onMouseLeave={()=> setItemView(null)}/> 
                      <p className={`${itemView === 'java' ? 'block' :'hidden'} text-white font-bold item-center` }>Java</p>
                    </motion.div>
                  </div>
        </div>

  </motion.div> 
   
  )
}

export default Habilidades