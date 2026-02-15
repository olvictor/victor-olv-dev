import '../App.css'
import Header from '../components/header/Header'
import TextoComSub from '../components/textoComSub/TextoComSub'
import Perfil from '../components/perfil/Perfil'
import Estatisticas from '../components/Estatisticas/Estatisticas'
import Destaques from '../components/destaques/Destaques'
import { SlBookOpen } from "react-icons/sl";
import Projetos from '../components/projetos/Projetos'

import { EXPERIENCES } from '../../constants.js';
import Contato from '../components/contato/contato'
import Modal from '../components/modal/Modal'

import Tecnologias from '../components/tecnologias/Tecnologias'
import { useState, useEffect } from 'react'
import Exptimeline from '../components/exptimeline/Exptimeline.jsx'
import BlogSection from '../components/blogsection/Blogsection.jsx'

import { Routes, Route , useLocation } from 'react-router-dom'
import BlogPost from '../pages/BlogPost.jsx' 

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <>
      <ScrollToTop />

      <div className="w-screen min-h-screen h-auto bg-bg-black px-2 overflow-x-hidden">
        <Header />

        {openModal && (
          <Modal setOpenModal={setOpenModal} current={current} />
        )}

        <main className="lg:grid grid-cols-[8fr_12fr] pt-[8rem] overflow-x-hidden">
          <section className="lg:sticky h-auto justify-items-center overflow-x-hidden">
            <div className="w-full flex justify-center lg:justify-end lg:mr-36">
              <Perfil />
            </div>
          </section>

          <div className="text-center flex flex-col overflow-y-auto lg:h-[calc(100vh-8rem)] lg:pr-[20%] gap-16">
            <TextoComSub principal="SOFTWARE" sub="ENGINEER" />

            <span className="italic font-extralight text-lg leading-[1.4] text-font-gray px-6 mt-6 text-center">
              Desenvolvedor de Software ABAP com experiência em soluções SAP,
              atuando no desenvolvimento, manutenção e otimização de programas,
              relatórios e interfaces. Focado em qualidade, performance e entrega
              de valor ao negócio.
            </span>

            <div className="flex items-center w-full justify-center gap-8 lg:gap-2">
              <Estatisticas principal={2} subtext="Anos de Estudo" />
              <Estatisticas principal={12} subtext="Projetos Realizados" />
              <Estatisticas principal={3} subtext="Bootcamps Realizados" />
            </div>

            <TextoComSub principal="EXPERIÊNCIAS" sub="" />

            <div className="mb-32">
              <Exptimeline experiencias={EXPERIENCES} />
            </div>

            <section className="flex flex-col px-2 gap-6 mt-8">
              <BlogSection />

              <div className="lg:flex-row flex flex-col gap-4">
                <Destaques
                  cor="bg-color-orange"
                  icon={<SlBookOpen size={40} color="white" />}
                  text="dynamic animation, motion design"
                  textColor="white"
                />
                <Destaques
                  cor="bg-color-green"
                  icon={<SlBookOpen size={40} color="black" />}
                  text="posts, estudos & blog"
                  textColor="black"
                />
              </div>
            </section>

            <TextoComSub principal="PROJETOS" sub="RECENTES" />
            <Projetos setOpenModal={setOpenModal} setCurrent={setCurrent} />

            <TextoComSub principal="TECNOLOGIAS &" sub="LINGUAGENS" />
            <Tecnologias />
            <TextoComSub principal="VAMOS TRABALHAR" sub="JUNTOS" />
            <Contato />
          </div>
        </main>
      </div>
    </>
  );
}
export default Home