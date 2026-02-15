export const EXPERIENCES = [
    {
      id: '1',
      title: 'HTML e CSS: praticando HTML/CSS.',
      company: 'Alura',
      date: 'Maio de 2022',
      description: 'Liderança técnica em projetos SAP complexos, otimização de performance de relatórios ALV e implementação de Web Dynpro.'
    },
    {
      id: '2',
      title: 'JavaScript: explorando a linguagem.',
      company: 'Alura',
      date: 'Maio de 2022',
      description: 'Explorando a linguagem JAVASCRIPT.'
    },
    {
      id: '3',
      title: 'TypeScript parte 1: evoluindo seu JavaScript',
      company: 'Alura',
      date: 'Outubro de 2022',
      description: 'Curso focado na construção de interfaces responsivas e acessíveis utilizando as melhores práticas do mercado.'
    },
    {
        id: '4',
        title: 'React: escrevendo com Typescript',
        company: 'Alura',
        date: 'Novembro de 2022',
        description: 'Curso focado na construção de interfaces responsivas e acessíveis utilizando as melhores práticas do mercado.'
      },
      {
        id: '5',
        title: 'React Completo',
        company: 'Origamid',
        date: 'Abril  de 2023',
        description: 'Curso focado na construção de interfaces responsivas e acessíveis utilizando as melhores práticas do mercado.'
      },
      {
        id: '6',
        title: 'Desenvolvimento de Software - Foco em Backend - iFood',
        company: 'Cubos Academy',
        date: 'Julho de 2023 - Novembro de 2023',
        description: 'Curso focado na construção de interfaces responsivas e acessíveis utilizando as melhores práticas do mercado.'
      },
      {
        id: '7',
        title: 'Oracle Next Education F2 T6 Back-end',
        company: 'Oracle',
        date: 'Janeiro de 2024 - Julho de 2024',
        description: 'Curso focado na construção de interfaces responsivas e acessíveis utilizando as melhores práticas do mercado.'
      },
      {
        id: '8',
        title: 'Análise e Desenvolvimento de Sistemas',
        company: 'O Centro Universitário União das Américas Descomplica',
        date: 'Agosto de 2024 - Janeiro de 2027',
        description: 'Curso focado na construção de interfaces responsivas e acessíveis utilizando as melhores práticas do mercado.'
      },
      {
        id: '9',
        title: 'Bootcamp em ABAP',
        company: 'NumenIT',
        date: 'Setembro de 2025 - Outubro de 2025',
        description: 'Curso focado na construção de interfaces responsivas e acessíveis utilizando as melhores práticas do mercado.'
      },
      {
        id: '10',
        title: 'Desenvolvedor ABAP',
        company: 'NumenIT',
        date: 'Novembro de 2025 - Atual',
        description: 'Curso focado na construção de interfaces responsivas e acessíveis utilizando as melhores práticas do mercado.'
      },
  ];


  export const BLOG_POSTS= [
    {
      id: 'abap-future-2024',
      title: 'O Futuro do ABAP em 2024: O que esperar?',
      summary: 'Uma análise profunda sobre as mudanças no ecossistema SAP e como o ABAP Cloud está transformando o desenvolvimento.',
      content: `
        O mundo SAP está passando por uma transformação sem precedentes. Com a chegada do SAP BTP e do modelo ABAP Cloud, os desenvolvedores precisam se adaptar rapidamente.
  
        ## O que é ABAP Cloud?
        ABAP Cloud não é apenas uma nova versão, é um novo paradigma. Ele remove o acesso direto a tabelas do dicionário padrão e foca em APIs estáveis e Core Data Services (CDS).
  
        ### Por que mudar agora?
        1. **Escalabilidade**: Aplicações prontas para a nuvem.
        2. **Upgrade-stable**: Personalizações que não quebram durante atualizações do sistema central.
        3. **Modernidade**: Uso de ferramentas como ADT (ABAP Development Tools) em vez da clássica SE80.
  
        Neste artigo, exploraremos como começar sua jornada rumo ao Clean ABAP.
      `,
      date: '15 de Outubro, 2023',
      readTime: '8 min',
      category: 'Tecnologia',
      imageUrl: 'https://picsum.photos/seed/abap/800/400'
    },
    {
      id: 'clean-code-frontend',
      title: 'Clean Code no Frontend: Além do óbvio',
      summary: 'Dicas práticas para manter seus componentes React limpos, testáveis e fáceis de manter a longo prazo.',
      content: `
        Manter um código limpo em aplicações de grande escala é um desafio constante. No React, isso significa mais do que apenas identação correta.
  
        ## Princípios Fundamentais
        - **Single Responsibility**: Cada componente deve fazer apenas uma coisa.
        - **Composição sobre Herança**: Use props.children para criar layouts flexíveis.
        - **Hooks Customizados**: Isole a lógica de negócio da UI.
  
        ### Exemplo Prático
        Em vez de ter um useEffect de 50 linhas, mova essa lógica para um hook como useUserData. Isso torna o componente declarativo e muito mais fácil de ler.
      `,
      date: '22 de Setembro, 2023',
      readTime: '5 min',
      category: 'React',
      imageUrl: 'https://picsum.photos/seed/react/800/400'
    }
  ];
  