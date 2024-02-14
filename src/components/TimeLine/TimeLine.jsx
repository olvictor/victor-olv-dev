import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolOutline } from "react-icons/io5";
import { useInView } from 'react-intersection-observer';


const TimeLine = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });


  return (
    <div ref={ref}>
      {inView && <div className='animate-fadeIn flex flex-col items-center relative'>
      <div className="absolute top-[160px] left-0 w-full h-[1px] bg-bg-header z-10"></div>

      <h2 className='text-5xl font-bold text-white mt-[90px] mb-[50px]'>Cursos</h2>

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
          date="Junho de 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript: programando na linguagem da web</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Alura</a>  </h4>
          <p>
            Tag: Javascript
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="text-white"
          date="Junho de 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript: programando a Orientação a Objetos</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Alura</a>  </h4>
          <p>
            Tag: Javascript
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="text-white"
          date="Setembro de 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">React: desenvolvendo com JavaScript</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Alura</a>  </h4>
          <p>
            Tag: Javascript, React
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="text-white"
          date="Setembro de 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript: consumindo e tratando dados de uma API</h3>
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
          Tag: Javascript, React
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="text-white"
          date="Novembro de 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">React: como os componentes funcionam</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Alura</a>  </h4>
          <p>
          Tag: Javascript, React
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
          date="Juelho de 2023 - Nov de 2023"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchoolOutline />}
        >
          <h3 className="vertical-timeline-element-title">Desenvolvimento de Software - Foco em Backend - iFood</h3>
          <h4 className="vertical-timeline-element-subtitle underline text-blue-700"><a href="#">Cubos Academy</a>  </h4>
          <p>
            Tag: NodeJS, JavaScript, PostgreeSql
          </p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
      </div>}
    </div>
  )
}

export default TimeLine