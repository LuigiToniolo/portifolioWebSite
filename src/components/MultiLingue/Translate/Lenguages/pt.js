const messages = {
    "pt-PT": {
        translations: {
            navbar: {
                home: 'Home',
                skill: 'Sobre mim',
                projects: 'Projetos',
                contact: 'Contato'
            },
            footer: {
                copy: 'Copyright 2022. Todos os direitos resevados.',
                develop: 'Plataforma desenvolvida por Luigi Toniolo.'
            },
            banner:{
                portifolio: 'Bem vindo(a) a meu site!',
                title1: "Olá! Sou Luigi,",
                title2: "Web Developer!",
                descricao: "Tenho três anos de experiência como Desenvolvedor Frontal, com muito contacto com plataformas de desenvolvimento, tenho uma boa qualidade de código normalmente usando React.Js, Angular.Js, Flutter, MySQL. Nos projetos em que trabalho, uso sempre figma, Jira e Git. Além disso, ajudo as empresas a criar e manter uma melhor base de código para reutilização, componenteando todas as secções do site.",
                connect: 'Fala comigo!',
            },
            skills: {
                title: 'Competências',
                subtitle: "Estas são algumas das minhas competências que trabalhei em todos os meus projetos como programador. Aqui estão inseridas tanto as línguas frontais como as traseiras. Além disso, tenho experiência em desenvolvimento móvel!"
            },
            projects: {
                title: "Projetos",
                subtitle: "Aqui estão todos os meus projetos, tanto pessoais como profissionais. Nos meus projetos pessoais, posso dizer que foram todos desenvolvidos a 100% por mim; para os meus profissionais, fiz parte de uma equipa de desenvolvimento em empresas. Eu, como programador, adoro atualizar-me e procurar conhecer cada vez mais as tecnologias mais atualizadas do mercado para acrescentar ao meu trabalho e ao meu desenvolvimento pessoal. Aqui posso mostrar-lhe alguns deles.",
                modal1: {
                    title: "Single Page Aplication React Js",
                    subtitle: "Web Developer",
                    titleContent: "Domvs iT Web Site",
                    content: "Neste projeto, desenvolvi um site da empresa para a empresa para a atualmente para a empresa que consiste num portfólio e website institucional da própria Domvs iT. Neste projeto trabalhei em equipa, que consistia em 2 programadores (eu e mais um, ambos front-end), 1 Tech Lead, 1 P.O. e um designer. Com este Esquadrão, tínhamos o hábito de fazer todas as cerimónias de scrum (Diário, Planeamento, Revisão), fizemos o uso da plataforma Jira para nos ajudar na organização de tarefas e gostaríamos do protótipo em figma que o nosso Design desenvolveu. O projeto no seu conjunto durou cerca de 4 meses (3 sprints) e conseguimos seguir o protótipo à risca. Desenvolvemos tudo, desde um Carrossel de Cartões até integração da API para um futuro produto da empresa e para ligar o feed do Instagram da empresa à plataforma.",
                    techTitle: "Tecnologias utilizadas",
                    techList: {
                      one: "React Js",
                      two: "Html / CSS",
                      three: "JavaScript",
                      four: "Bootstrap",
                      five: "Figma",
                      six: "Jira (Scrum)"
                    }
                },
                modal2: {
                    title: "E-commerce WordPress",
                    subtitle: "Project Manager",
                    titleContent: "Toniolo Joias Web Site",
                    content: "Desenvolvi e liderei um projeto inteiro para esta empresa. O projeto consistia em desenvolver do zero um e-commerce de joalharia usando o WordPress e o Woocommerce (Plugin). Como foi feito no WordPress, foi muito utilizado para o desenvolvimento deste e-commerce, todo o meu conhecimento de HTML5 e CSS3 e até scSS. Além disso, todo o site foi otimizado para otimização do motor de busca (SEO). Após o final do desenvolvimento deste projeto, decidimos investir em anúncios como o Google e o Facebook para aumentar a visualização do nosso site. Com isto, atingimos mais de R$ 10k em vendas num período inferior a 1 mês. Além de investir no tráfego pago, investimos também no tráfego orgânico, como anteriormente afirmado, melhorando o SEO de cada website.",
                    techTitle: "Tecnologias utilizadas",
                    techList: {
                      one: "WordPress",
                      two: "Html / CSS",
                      three: "WooCommerce",
                      four: "Elementor",
                      five: "PhotoShop",
                      six: "Google & Facebook Ads"
                    }
                  },
            },
            certificate: {
                modal1: {
                    title: "Linguagem PHP",
                    subtitle: "Orientação a objetos",
                    titleContent: "Formação em língua PHP",
                    content: "PhP é uma das linguagens de programação mais utilizadas no desenvolvimento web. Sendo transversal, de código aberto, livre e muito completa, a língua PHP conquistou o mercado e os desenvolvedores, tem uma comunidade vibrante e tem crescido rapidamente nos últimos anos. Nesta formação de PHP aprendi os fundamentos da linguagem juntamente com as melhores práticas utilizadas no mercado.",
                    certificateTitle: "",
                    courseList: {
                        one: "Avançar com orientação de objetos com PHP - Herança, polimosfismo e interfaces",
                        two: "Avançar com PHP - matrizes, cordas, função e web",
                        three: "Introdução ao PHP - primeiros passos com a linguagem",
                        four: "Orientação do objeto com PHP - aulas, métodos e atributos",
                        five: "PHP - manipulando coleções com arrays"
                    }
                },
                modal2: {
                    title: "React Js",
                    subtitle: "Ganchos, integração com API's, SPA, componentes de função, uso de libs, etc..",
                    titleContent: "Formação no Framework React Js",
                    content: "Reagir é uma das bibliotecas de programação de sites mais utilizadas hoje em dia. Sendo livre e bastante completo, conquistou o mercado e os seus desenvolvedores, tendo uma comunidade vibrante e uma rápida evolução nos últimos anos. Nesta formação, aprendemos muito com a reação como a integração do Repouso da API, a comunicação back-end e a base de dados. Além disso, aprendi a componentesizar a aplicação para melhorar a organização e também para utilizar as libs disponíveis.",
                    certificateTitle: "Cursos Concluídos:",
                    courseList: {
                        one: "React - abstraindo seu css com styled components",
                        two: "React - ciclo de vida dos componentes",
                        three: "React - Entendendo como a biblioteca funciona",
                        four: "React - Function components, uma abordagem moderna",
                        five: "React - Hooks, Contextos e boas práticas",
                        six: "React - Integrando seu projeto react com apis",
                        seven: "React Native - começando do zero",
                        eight: "React Router - navegação em uma SPA"
                    }
                },
                modal3: {
                    title: "Angular Js",
                    subtitle: "Fundamentos, Autenticação, formulários, carga preguiçosa, upload, construção e novos componentes.",
                    titleContent: "Formação no Framework Angular Js",
                    content: "Angular é um enquadramento para a criação de sites completos e é amplamente utilizado por grandes empresas. Por ser livre e bastante abrangente, conquistou o mercado e, atualmente, existem vários sistemas construídos em cima dele. Neste curso aprendi com os fundamentos do quadro para os níveis mais avançados. Aprendi a usar upload, construir, formar antenticação, carga preguiçosa e muito mais.",
                    certificateTitle: "Cursos Concluídos:",
                    courseList: {
                        one: "Angular - Começando com o Framework",
                        two: "Angular - Fundamentos",
                        three: "Angular - Autenticação, forms e lazy loading",
                        four: "Angular - Upload, build e novos componentes",
                        five: "Angular - Lapidando o Projeto",
                    }
                },
                modal4: {
                    title: "Metodologia Ágil",
                    subtitle: "Scrum, Kanban e Extreme Programming",
                    titleContent: "Formação em metodologia ágil",
                    content: "Entendemos que os métodos ágeis são formas de aplicar os princípios de gestão ágil que descobrimos de várias formas, mas sempre 'beber' desde a origem do manifesto ágil para alcançar uma transformação ágil, resolver problemas, satisfazer necessidades e acrescentar valor a todos os tipos de clientes, considerando os seus produtos e/ou Serviços. Neste treino aprendi sobre a técnica Kanban, Scrum e Extreme Programming",
                    certificateTitle: "Cursos Concluídos:",
                    courseList: {
                        one: "Extreme programming - metodologia de desenvolvimento ágil de software",
                        two: "Kanban - fundamentos essenciais",
                        three: "Kanban - métricas e práticas avançadas",
                        four: "Scrum - Agilidade em seu projeto",
                        five: "Scrum - gerencie o seu projeto de forma ágil",
                        six: "Scrum - O manifesto ágil, liderança e organização em Scrum",
                    }
                },
                modal5: {
                    title: "VUE Js Framework",
                    subtitle: "Aplicação de página única, autenticação e testes de unidade",
                    titleContent: "Formação no Framework VUE.Js",
                    content: "Vue é uma estrutura JavaScript para a construção de interfaces de utilizador. É construído em HTML, CSS e JavaScript e fornece um modelo de programação declarativa baseado em componentes. Isto ajuda-nos a desenvolver interfaces de utilizador de forma eficiente, simples ou complexas. Nesta formação aprendi os fundamentos da estrutura Vue.Js, construí uma Aplicação de Página Única, usei as características de autenticação e fiz um curso específico para testes unitários com o JEST",
                    certificateTitle: "Cursos Concluídos:",
                    courseList: {
                        one: "VUE.JS - construindo single page applications",
                        two: "VUE.JS - construindo single page applications",
                        three: "VUE.JS protegento recursos com autenticação e VUEX",
                        four: "VUE.JS Testes unitários automatizados com JEST",
                    }
                },
                modal6: {
                    title: "Linguagem JavaScript",
                    subtitle: "Orientação do objeto, melhorando na web, etc..",
                    titleContent: "Formação na linguagem JavaScript",
                    content: "JavaScript é uma linguagem de programação que nos permite criar conteúdo que atualiza, controla os meios de comunicação, faz imagens animadas e muito mais. Ou seja, é um idioma que deve ser executado nos navegadores e serve para manipular comportamentos de páginas web. Com esta série de cursos aprendi, dentro da linguagem JavaScript, sobre os seus fundamentos, interfaces, orientação de objetos, ênfase na programação orientada para a web e entre outras aprendizagens.",
                    certificateTitle: "Cursos Concluídos:",
                    courseList: {
                        one: "JAVASCRIPT - interfaces e herança em orientação a objetos",
                        two: "JAVASCRIPT - primeiros passos com a linguagem",
                        three: "JAVASCRIPT - programando a orientação a objetos",
                        four: "JAVASCRIPT - Programando na linguagem da web",
                    }
                },
                modal7: {
                    title: "HTML5 / CSS3",
                    subtitle: "Flexbox, Arquitetura CSS, etc..",
                    titleContent: "Formação na linguagem  HTML e CSS",
                    content: "HTML é uma linguagem de marcação de texto hiper e é o bloco de construção mais básico na web. É amplamente utilizado em conjunto com cSS que é frequentemente usado para descrever a aparência e o estilo dos componentes. Durante a formação deste curso, estudei e implementei desde os fundamentos das línguas até às práticas mais avançadas. Além disso, dei uma ênfase muito grande na Flexbox porque achei muito importante para o meu desenvolvimento profissional.",
                    certificateTitle: "Cursos Concluídos:",
                    courseList: {
                        one: "Arquitetura CSS - descomplicando os problemas",
                        two: "CSS - Dispondo elementos com flexbox e grid",
                        three: "Flexbox - posicione elementos na tela",
                        four: "HTML5 e CSS3 - a primeira página da web",
                        five: "HTML5 e CSS3 - posicionamento, listas e navegação",
                        six: "HTML5 e CSS3 - trabalhando com formulários e tabelas",
                    }
                },
                modal8: {
                    title: "Git & GitHub",
                    subtitle: "Melhorar as melhores práticas",
                    titleContent: "Formação em Git e GitHub",
                    content: "Git é um projeto de código aberto que é o sistema de controlo de versão mais moderno usado no mundo. Neste percurso de curso, aprendi todo o conceito, fundamentos e boas práticas desta funcionalidade. Algo que aprendi que é de grande importância são boas práticas com o git, porque assim o meu trabalho torna-se muito mais ágil e fácil de entender.",
                    certificateTitle: "Cursos Concluídos:",
                    courseList: {
                        one: "Git e Github - controle e compartilhe seu código",
                        two: "Git e Github - Estratégias de ramificação, conflitos e pull requests",
                    }
                },
                modal9: {
                    title: "Nest Js",
                    subtitle: "API Descanse com Nest Js e com validação, serialização, etc..",
                    titleContent: "Formação no framewok Nest.js",
                    content: "Podemos dizer que o Nest.js é uma estrutura 100% back-end com Nó.js e que usa um padrão TypeScript. Além disso, utiliza elementos de programação orientados para objetos (POO), para além da Programação Funcional (PF) e da Programação Reativa Funcional (FRP). Nesta formação fiz algumas buscas, valorização de formas, serialização e também alguns detalhes arquitetónicos. Além disso, criei uma API de Repouso no TypeScript.",
                    certificateTitle: "Cursos Concluídos:",
                    courseList: {
                        one: "API Rest with NESTJS - pesquisas, validação, serialização e detalhes arquitetónicos.",
                        two: "NestJs - criando uma API REST com typescript",
                    }
                },

            },
            contact: {
                title: "Fala comigo!",
                name: "O teu nome...",
                email: "O seu e-mail...",
                message: "Sua Mensagem...",
                button: "Enviar"
            },
            portifolio: {
                title1: "Clique no botão",
                title2: "e baixe o meu currículo",
                button: "Baixar meu currículo ;)"
            },
            aboutme: {
                title: "Eu sou Luigi Toniolo",
                subtitle1: 'Web developer',
                subtitle: "Meu nome é Luigi Toniolo, sou cidadão brasileiro e italiano. Estou me formando em engenharia elétrica na Universidade Federal de São Carlos (UFSCar) localizada no estado de São Paulo, Brasil. Além de estudar engenharia, sou desenvolvedor web com grande conhecimento em programação front-end. Com isso, no meu trabalho atual, fui inserido em diversos projetos que utilizam alguns dos frameworks mais famosos como React Js, React Native, Angular, Flutter e WordPress. Neste último, tenho um alto nível de entendimento de como funciona e, além de dominar essa plataforma, tenho total domínio de alguns plugins como woocommerce, elementor, etc. Além dos frameworks usados ​​para desenvolver meus projetos, Possuo um alto nível de conhecimento nas seguintes linguagens de programação: JavaScript, Git, Html, CSS, Typescript, Dart, Python e C++. Também acho muito fácil seguir protótipos de design (UI/UX) como a plataforma figma. Por ter feito um intercâmbio estudantil em 2016 para a Itália, considero que tenho um conhecimento avançado da língua inglesa e uma proficiência básica da língua italiana.",
            },
            education: {
                historyTitle: 'Minha Educação',
                title: 'Formando-se em Engenharia Eletrotécnica',
                subtitle: 'Universidade Federal de São Carlos / 2019 - Atual',
                content: 'Estou atualmente a estudar na Universidade Federal de São Carlos (UFSCar) no curso de engenharia elétrica. Participei em alguns projetos de extensão como a Baja e a Formula e isso acrescentou muito ao meu desenvolvimento profissional.'
            },
            personalSkills1: {
                historyTitle: 'Meu trabalho',
                title: 'Desenvolvedor Full satack Junior',
                subtitle: 'Domvs iT / Jul 2021 - Atual',
                content: 'Desenvolvi e implementei o projeto inteiro do site interno da empresa que eu trabalho com o auxílio das ferramentas Figma, usando React.js como framework,  Git e o software Jira para manter uma melhor organização das tarefas. Além disso, tive a oportunidade de trabalhar em parceria com uma empresa alemã e trabalhei em uma squad hibrida com pessoas de diversas nacionalidades, como Paquistão, India, México e Estados Unidos. Desenvolvi também um aplicativo pessoal que consistia na criação de um banco virtual com página de usuário, login, validação de usuário e um design único. Vale dizer que em todos esses projetos, eu utilizei e utilizo a metodologia ágil (Scrum) e costumo realizar todas as cerimônias.',
                readLess: 'Ler menos',
                readMore: 'Ler Mais'
            },
            personalSkills2: {
                title: 'Gestor de projeto',
                subtitle: 'Toniolo Joias / Jun 2020 - Fev 2021',
                content: 'Desenvolvi e liderei um projeto inteiro para esta empresa. O projeto consistia em desenvolver do zero um e-commerce de joalharia usando o WordPress e o Woocommerce (Plugin). Como foi feito no WordPress, foi muito utilizado para o desenvolvimento deste e-commerce, todo o meu conhecimento de HTML5 e CSS3 e até scSS.  Além disso, todo o site foi otimizado para otimização do motor de busca (SEO). Após o final do desenvolvimento deste projeto, decidimos investir em anúncios como o Google e o Facebook para aumentar a visualização do nosso site. Com isto, atingimos mais de R$ 10k em vendas num período inferior a 1 mês. Além de investir no tráfego pago, investimos também no tráfego orgânico, como anteriormente afirmado, melhorando o SEO de cada website.'
            }
        }
    }
}

export {messages}