import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
const TimeLine = () => {
 


  return (
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration:1,delay:0.5}}
      className='flex flex-col items-center relative h-[auto]'>
      <h2 className='text-5xl font-bold text-white mt-[250px] mb-[200px] z-20'>Cursos</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="text-white"
          date="Maio de 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">HTML e CSS: praticando HTML/CSS.</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Alura</a>  </h4>
          <p>
            Tag: Html, css 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="text-white"
          date="Maio de 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript: explorando a linguagem.</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Alura</a>  </h4>
          <p>
            Tag: Javascript
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="text-white"
          date="Outubro de 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">TypeScript parte 1: evoluindo seu JavaScript</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Alura</a>  </h4>
          <p>
            Tag: TypeScript
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="text-white"
          date="Novembro de 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">React: escrevendo com Typescript</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Alura</a>  </h4>
          <p>
          Tag: TypeScript, React
          </p>
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="text-white"
          date="Abril de 2023"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">React Completo</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Origamid</a>  </h4>
          <p>
            Tag: Javascript, React
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="text-white"
          date="Julho de 2023 - Nov de 2023"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">Desenvolvimento de Software - Foco em Backend - iFood</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Cubos Academy</a>  </h4>
          <p>
            Tag: NodeJS, JavaScript, PostgreeSql
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="text-white"
          date="Janeiro de 2024 - Jul de 2024"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">Oracle Next Education F2 T6 Back-end</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Oracle</a>  </h4>
          <p> Tag: Java, Spring boot, Mysql </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
      </motion.div>
  )
}

export default TimeLine