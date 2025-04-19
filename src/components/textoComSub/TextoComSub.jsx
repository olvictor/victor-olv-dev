import { motion } from 'framer-motion';


function TextoComSub({principal,sub}) {
    return (
    
    <motion.div className={"px-10 flex flex-col text-center"}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration:1,delay:0.5}}
    >
     <h2 className="text-color-white  text-6xl lg:text-9xl font-extrabold">{principal}</h2>
     <h2 className="text-color-cinza-2 text-6xl lg:text-9xl font-extrabold">{sub}</h2>
    </motion.div>
    
    )
  }
export default TextoComSub
  