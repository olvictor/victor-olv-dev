import { useState } from "react";
import {Html5, Javascript, NextJs, Node, Postgree, ReactSVG, TailwindCSS} from "../svgs/svgs";
import { useInView } from 'react-intersection-observer';



const Experiencias = () => {
    const [itemView,setItemView] = useState(null)


  return ( 
    <div  id='Experiência'>
      <div className='container-experiencia animate-fadeIn bg-bg-header flex flex-col items-center gap-[40px] h-screen relative items-center justify-center'>
              {/* <div className="absolute top-[110px] left-0 w-full h-[1px] bg-bg-header z-10"></div> */}
              <div className='flex flex-col items-center '>
                  <h2 className='text-5xl font-bold text-white'>Experiencias</h2>
                  <h2 className='text-5xl font-bold text-white'> com :</h2>
              </div>
                  <div className='flex gap-[20px] items-center justify-center flex-wrap '>
                    <div className="flex flex-col  text-center  h-[60px] w-[80px] items-center ">
                      <img src={Html5} alt="logo html5" height='50px' width='60px' className="bg-bg-header rounded-2xl cursor-pointer" onMouseEnter={()=>setItemView('html')} onMouseLeave={()=> setItemView(null)}/>
                      <p className={`${itemView === 'html' ? 'block' :'hidden'} text-white font-bold item-center` }>Html5</p>
                    </div>
                    <div className="flex flex-col  text-center  h-[60px] w-[80px] items-center">
                     <img src={Javascript} alt="logo Javascript"  height='50px' width='60px' className="bg-bg-header rounded-2xl cursor-pointer" onMouseEnter={()=>setItemView('javascript')} onMouseLeave={()=> setItemView(null)}/>
                     <p className={`${itemView === 'javascript' ? 'block' :'hidden'} text-white font-bold item-center` }>Javascript</p>
                    </div>

                    <div className="flex flex-col  text-center h-[60px] w-[80px] items-center">
                      <img src={NextJs} alt="logo NextJS"  height='50px' width='60px' className="bg-bg-header rounded-2xl cursor-pointer" onMouseEnter={()=>setItemView('nextJS')} onMouseLeave={()=> setItemView(null)}/>
                      <p className={`${itemView === 'nextJS' ? 'block' :'hidden'} text-white font-bold item-center` }>NextJS</p>
                    </div>

                    <div className="flex flex-col  text-center h-[60px] w-[80px] items-center">
                      <img src={Node} alt="logo Node"  height='50px' width='60px' className="bg-bg-header rounded-2xl cursor-pointer" onMouseEnter={()=>setItemView('nodeJS')} onMouseLeave={()=> setItemView(null)}/>
                      <p className={`${itemView === 'nodeJS' ? 'block' :'hidden'} text-white font-bold item-center` }>NodeJS</p>
                    </div>

                    <div className="flex flex-col  text-center h-[60px] w-[80px] items-center">
                      <img src={Postgree} alt="logo Postgree"  height='50px' width='60px' className="bg-bg-header rounded-2xl cursor-pointer" onMouseEnter={()=>setItemView('postgre')} onMouseLeave={()=> setItemView(null)}/>
                      <p className={`${itemView === 'postgre' ? 'block' :'hidden'} text-white font-bold item-center` }>postgre</p>
                    </div>


                    <div className="flex flex-col  text-center h-[60px] w-[80px] items-center">
                      <img src={ReactSVG} alt="logo ReactSVG"  height='50px' width='60px' className="bg-bg-header rounded-2xl cursor-pointer" onMouseEnter={()=>setItemView('react')} onMouseLeave={()=> setItemView(null)}/>
                      <p className={`${itemView === 'react' ? 'block' :'hidden'} text-white font-bold item-center` }>React</p>
                    </div>

                    <div className="flex flex-col  text-center h-[60px] w-[80px] items-center">
                      <img src={TailwindCSS} alt="logo ReactSVG"  height='50px' width='60px' className="bg-bg-header rounded-2xl" onMouseEnter={()=>setItemView('tailwind')} onMouseLeave={()=> setItemView(null)}/> 
                      <p className={`${itemView === 'tailwind' ? 'block' :'hidden'} text-white font-bold item-center` }>TailwindCSS</p>
                    </div>
                    
                  </div>
        </div>

  </div> 
   
  )
}

export default Experiencias