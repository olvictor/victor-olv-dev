import dog from '../assets/dogs.png'
import dog2 from '../assets/dogs2.png'
import dog3 from '../assets/dogs3.png'
import dog4 from '../assets/dogs4.png'
import dog5 from '../assets/dogs5.png'

import Gym from '../assets/Gym.png'
import Gym2 from '../assets/Gym2.png'
import Gym3 from '../assets/Gym3.png'
import Gym4 from '../assets/Gym4.png'
import Gym5 from '../assets/Gym5.png'
import Gym6 from '../assets/Gym6.png'
import Gym7 from '../assets/Gym7.png'

import fotolanding from '../assets/fotolanding.png'
import store from '../assets/store.png'
import forum from '../assets/forumhub.png'

const Projetos = [{
    titulo: "Dogs Social Media",
    github: "https://github.com/olvictor/Dogs-Social-media",
    deploy:"https://dogs-social-media-pi.vercel.app",
    imagens: [dog,dog2,dog3,dog4,dog5],
    sobre: `🚀 Apresentando Meu Projeto de Rede Social Criado com JavaScript e React ! 🚀
    meu novo projeto desenvolvido durante meu curso na Origamid uma plataforma de rede social para doguinhos 🐶
    Principais Recursos: A plataforma oferece uma ampla gama de recursos para melhorar a experiência do usuário:
    `,
    stack: "React, Javascript",
    features:["Perfis de Usuários: Cada usuário tem seu próprio perfil, permitindo que publiquem e armazenem fotos dos seus cachorros.","Publicação de Conteúdo: Os usuários podem compartilhar posts com fotos de seus cachorros."]
},
{
    titulo: "Gym APP",
    github: "https://github.com/olvictor/gymproject",
    deploy:"https://gymproject-nu.vercel.app",
    imagens: [Gym,Gym2,Gym3,Gym4,Gym5,Gym6,Gym7],
    sobre: `Yourbody é um app de academia criaddo com React, Uma biblioteca de JavaScript de código aberto desenvolvida pelo Facebook para criar interfaces de usuário (UI) interativas e eficientes,
    NodeJS uma plataforma JavaScript no servidor que permite a criação de aplicativos web altamente escaláveis e eficientes,
    PostgreSQL, Um sistema de gerenciamento de banco de dados relacional e
    Express, Um framework web para Node.js que facilita o desenvolvimento de APIs RESTful e aplicativos web.`,
    stack: "React. Node, PostgreSQL, Express",
    features:["Registrar suas informações , com isso o app calcula o seu gasto calórico e a quantidade de macro nutrientes necessária para antigir a meta.",
        "Buscar exercício por grupamento muscular e adicioná-lo ao treino.",
        "Registrar o seu treino diário onde é gerado um gráfico com os dados do treino.",
        "Fazer a postagem do treino com foto.",
        "Criar metas e acompanha-lás com um Temporizador Regressivo."]
},
{
    titulo: "Landing Page",
    github: "https://github.com/olvictor/landing-page-tailwind",
    deploy:"https://landing-page-tailwind-pied.vercel.app/",
    imagens: [fotolanding],
    sobre: `Visando aprimimorar os meus conhecimentos resolvi criar uma landing page utilizando react e TailwindCSS. Objetivo do projeto foi conhecer o framework Tailwind CSS.
    Mas porquê o Tailwind CSS? É um framework CSS visando a utilidade que fornece várias dessas classes utilitárias, de propósito único, que você pode usar diretamente dentro de sua marcação de texto para projetar um elemento.
    As classes utilitárias tornam mais fácil identificar e modificar estilos específicos, o que pode simplificar a manutenção do código.
    O Tailwind é frequentemente usado com ferramentas de construção (como Webpack ou PostCSS), o que permite otimizar e reduzir o tamanho do arquivo CSS para melhorar o desempenho do site.`,
    stack: "React, tailwind CSS"
},
{
    titulo: "Forum Hub - Backend",
    github: "https://github.com/olvictor/challenge-forum_hub",
    deploy:``,
    imagens: [forum],
    sobre: ` Este é o desafio chamado de FórumHub: nele, vamos replicar o processo de criação de um fórum no nível do backend e, para isso, criaremos uma API REST usando Spring. Nossa API se concentrará especificamente nos tópicos, e deve permitir aos usuários:
    É o que conhecemos normalmente como CRUD (CREATE, READ, UPDATE, DELETE) e usando um framework que facilitará muito o nosso trabalho.
    Tradução (em ordem): Criar, Consultar, Atualizar e Deletar.Em resumo, nosso objetivo com este challenge é implementar uma API REST com as seguintes funcionalidades:`,
    stack: "Java, Spring Boot, MYSQL",
    features: ["Criar um novo tópico.","Mostrar todos os tópicos criados.","Mostrar um tópico específico.","Atualizar um tópico.","Eliminar um tópico."]
}
];


export default Projetos 