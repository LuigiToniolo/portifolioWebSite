import imacMock from "../../assets/img/imacMock.png";
import { i18n } from "../MultiLingue/Translate/i18n";

export const data = {
    modal1: {
        title: "Spa React Js",
        subtitle: "Web Developer",
        imagem: imacMock,
        titleContent: "Toniolo Joias Web Site",
        content: "Nesse projeto, desenvolvi um web site da empresa que eu trabalho atualmente que consiste em um site portfólio e institucional da própria Domvs iT. Nesse projeto eu trabalhei em equipe, que consistia em 2 desenvolvedores (eu e mais um, ambos front-end), 1 Tech Lead, 1 P.O. e um designer. Com essa Squad, tínhamos o costume de fazer todas as cerimônias Scrum (Daily, Planning, Review), fazíamos o uso da plataforma Jira para nos auxiliar na organização das Tasks e nós seguíamos o protótipo no Figma que nosso Design desenvolveu. O projeto no todo durou cerca de 4 meses (3 sprints) e conseguimos seguir à risca o protótipo. Nós desenvolvemos desde um Carrossel de cards até integração com API para um futuro produto da empresa e para conectarmos o feed do instagram da empresa com a plataforma.",
        // techTitle: "Tecnologias usadas",
        techTitle: "{i18n.t('projects.techTitle')}",
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
      imagem: imacMock,
      titleContent: "Toniolo Joias Web Site",
      content: "Eu desenvolvi e liderei um projeto inteiro para essa empresa. O projeto consistia em desenvolver do zero um e-commerce de joias usando o WordPress e Woocommerce (Plugin). Como foi realizado em WordPress, foi usado muito, para o desenvolvimento desse e-commerce, todo meu conhecimento de HTML5 e CSS3 e até mesmo SCSS.  Além disso, o site inteiro foi otimizado para Search Engine Optimization (SEO). Após o término do desenvolvimento desse projeto, nós decidimos investir em ads como as propagandas do google e facebook para aumentar a visualização do nosso site. Com isso, nós atingimos mais de R$10k em vendas num período menor que 1 mês. Além de investir no tráfego pago, nós investimos também no tráfego orgânico, como dito anteriormente, melhorando o SEO de todo website.",
      techTitle: "Tecnologias usadas",
      techList: {
        one: "WordPress",
        two: "Html / CSS",
        three: "WooCommerce",
        four: "Elementor",
        five: "PhotoShop",
        six: "Google & Facebook Ads"
      }
    },
    modal3: {
      title: "Conteúdo modal 3",
      content: "Aqui eu coloco o conteúdo da modal 3",
    },
  };