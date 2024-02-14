import {Html5, Javascript, NextJs, Node, Postgree, ReactSVG, TailwindCSS} from "../svgs/svgs";
import { useInView } from 'react-intersection-observer';



const Experiencias = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return ( 
    <div ref={ref} id='Experiência'>
      {inView && 
      <div className='animate-fadeIn flex flex-col items-center gap-[40px] h-72  relative'>
              <div className="absolute top-[110px] left-0 w-full h-[1px] bg-bg-header z-10"></div>
              <div className='flex flex-col items-center'>
                  <h2 className='text-5xl font-bold text-white'>Experiencias</h2>
                  <h2 className='text-5xl font-bold text-white'> com :</h2>
              </div>
                  <div className='flex gap-[20px] items-center justify-center flex-wrap '>
                    <img src={Html5} alt="logo html5"  height='50px' width='60px' className="bg-bg-header rounded-2xl"/>
                    <img src={Javascript} alt="logo Javascript"  height='50px' width='60px' className="bg-bg-header rounded-2xl"/>
                    <img src={NextJs} alt="logo NextJS"  height='50px' width='60px' className="bg-bg-header rounded-2xl"/>
                    <img src={Node} alt="logo Node"  height='50px' width='60px' className="bg-bg-header rounded-2xl"/>
                    <img src={Postgree} alt="logo Postgree"  height='50px' width='60px' className="bg-bg-header rounded-2xl"/>
                    <img src={ReactSVG} alt="logo ReactSVG"  height='50px' width='60px' className="bg-bg-header rounded-2xl"/>
                    <img src={TailwindCSS} alt="logo ReactSVG"  height='50px' width='60px' className="bg-bg-header rounded-2xl"/>
                  </div>
        </div>
     }
  </div> 
   
  )
}

export default Experiencias