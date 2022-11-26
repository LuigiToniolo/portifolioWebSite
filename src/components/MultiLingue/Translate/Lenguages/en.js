const messages = {
    "en-US": {
        translations: {
            navbar: {
                home: 'Home',
                skill: 'About Me',
                projects: 'Projects'
            },
            footer: {
                copy: 'Copyright 2022. All Rights Reserved.',
                develop: 'Website developed by Luigi Toniolo.'
            },
            banner: {
                portifolio: 'Welcome to my portifolio!',
                title1: "Hi! I'm Luigi,",
                title2: "Web Developer!",
                descricao: "Three years experience Front-End Developer with strong contact with develop platforms with good code quality usually using React.Js, Angular.Js, Flutter, MySQL, always using figma prototype, Jira and Git. In addition, I help companies create and maintain a better code base for reusability, componentizing all sections of the website.",
                connect: 'Let’s Connect ',
            },
            skills: {
                title: 'Skills',
                subtitle: "Those are some of my skills that I worked on in all my programs as a web developer. Here they are included as both front-end and back-end languages. Also, I have experience in mobile development!"
            },
            projects: {
                title: "Projects",
                subtitle: "Here are all my projects, both personal and professional. In my personal projects, I can say that they were all developed 100% by me; As for my professionals, I was part of a development team at companies. As a programmer, I really like to update myself and seek to know more and more about the most up-to-date technologies on the market to add to my work and my personal development. Here I can show some of them..",
                modal1: {
                    title: "Single Page Aplication React Js",
                    subtitle: "Web Developer",
                    titleContent: "Domvs iT Web Site",
                    content: "In this project, I developed a web site for the company I currently work for, which consists of a portfolio and institutional site for Domvs iT itself. In this project I worked in a team, which consisted of 2 developers (me and one more, both front-end), 1 Tech Lead, 1 P.O. and a designer. With this Squad, we used to do all the Scrum ceremonies (Daily, Planning, Review), we used the Jira platform to help us organize the Tasks and we followed the prototype in Figma that our Design developed. The whole project lasted about 4 months (3 sprints) and we were able to follow the prototype to the letter. We developed from a Card Carousel to API integration for a future company product and to connect the company's instagram feed with the platform.",
                    techTitle: "Technologies used",
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
                    content: "I developed and led an entire project for this company. The project consisted of developing a jewelry e-commerce from scratch using WordPress and Woocommerce (Plugin). As it was done in WordPress, it was used a lot, for the development of this e-commerce, all my knowledge of HTML5 and CSS3 and even SCSS. In addition, the entire website has been optimized for Search Engine Optimization (SEO). After finishing the development of this project, we decided to invest in ads such as google and facebook advertisements to increase our website's visualization. With that, we reached more than R$10k in sales in a period of less than 1 month. In addition to investing in paid traffic, we also invest in organic traffic, as previously mentioned, improving the SEO of the entire website.",
                    techTitle: "Technologies used",
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
                    title: "PHP Language",
                    subtitle: "Object orientation",
                    titleContent: "PHP language training",
                    content: "PHP is one of the most used programming languages ​​in web development. Being cross-platform, open-source, free and very complete, the PHP language has conquered the market and developers, has a vibrant community and has grown rapidly in recent years. In this PHP training I learned the fundamentals of the language along with the best practices used in the market.",
                    certificateTitle: "Completed Courses:",
                    courseList: {
                        one: "Moving forward with object orientation with PHP - Inheritance, polymorphism and interfaces",
                        two: "Moving forward with PHP - arrays, strings, function and web",
                        three: "Introduction to PHP - first steps with the language",
                        four: "Object Orientation with PHP - Classes, Methods and Attributes",
                        five: "PHP - manipulating collections with arrays"
                    },
                },
                modal2: {
                    title: "React Js",
                    subtitle: "Hooks, integration with API's, SPA, function components, use of libs, etc..",
                    titleContent: "Training in the React Js Framework",
                    content: "React is one of the most used website programming libraries today. As it is free and very complete, it conquered the market and its developers, having a vibrant community and rapid evolution in recent years. In this training, we learned a lot with react, such as Rest API integration, Back-end and database communication. In addition, I learned to componentize the application to improve organization and also to use the available libs.",
                    certificateTitle: "Completed Courses:",
                    courseList: {
                        one: "React - abstracting your css with styled components",
                        two: "React - component lifecycle",
                        three: "React - Understanding how the library works",
                        four: "React - Function components, a modern approach",
                        five: "React - Hooks, Contexts and best practices",
                        six: "React - Integrating your react project with apis",
                        seven: "React Native - starting from scratch",
                        eight: "React Router - navigation in a SPA"
                    }
                },
                modal3: {
                    title: "Angular Js",
                    subtitle: "Fundamentals, Authentication, forms, lazy loading, upload, build and new components.",
                    titleContent: "Training in the Angular Js Framework",
                    content: "Angular is a framework for creating complete websites and is widely used by large companies. Because it is free and quite comprehensive, it conquered the market and currently there are a number of systems built on top of it. In this course I learned from the fundamentals of the framework to the most advanced levels. I learned how to use Upload, build, form authentication, lazy loading and much more.",
                    certificateTitle: "Completed Courses:",
                    courseList: {
                        one: "Angular - Getting Started with the Framework",
                        two: "Angular - Fundamentals",
                        three: "Angular - Authentication, forms and lazy loading",
                        four: "Angular - Upload, build and new components",
                        five: "Angular - Polishing the Project",
                    }
                },
                modal4: {
                    title: "Agile Methodology",
                    subtitle: "Scrum, Kanban and Extreme Programming",
                    titleContent: "Agile methodology training",
                    content: "We understand that agile methods are ways of applying the principles of agile management that we have discovered in different ways, but always “drinking” from the source of the agile manifesto to achieve agile transformation, solve problems, meet needs and add value for all types of clients, considering your products and/or Services. In this training I learned about the Kanban technique, Scrum and Extreme Programming",
                    certificateTitle: "Completed Courses:",
                    courseList: {
                        one: "Extreme programming - agile software development methodology",
                        two: "Kanban - essential fundamentals",
                        three: "Kanban - Advanced metrics and practices",
                        four: "Scrum - Agility in your project",
                        five: "Scrum - Manage your project in an agile waymanage your project in an agile way",
                        six: "Scrum - The Agile Manifest, Leadership and Organization in Scrum",
                    }
                },
                modal5: {
                    title: "VUE Js Framework",
                    subtitle: "Single Page Applicaton, Authentication and Unit Testing",
                    titleContent: "Training in VUE.Js Framework",
                    content: "Vue is a JavaScript framework for building user interfaces. It is built on top of HTML, CSS, and JavaScript and provides a component-based, declarative programming model. This helps us efficiently develop user interfaces, whether they are simple or complex. In this training I learned the fundamentals of the Vue.Js framework, built a Single Page Application , used authentication resources and took a specific course for unit testing with JEST",
                    certificateTitle: "Completed Courses:",
                    courseList: {
                        one: "VUE.JS - building single page applications",
                        two: "VUE.JS - building single page applications",
                        three: "VUE.JS Securing Resources with Authentication and VUEX",
                        four: "VUE.JS Automated Unit Tests with JEST",
                    }
                },
                modal6: {
                    title: "JavaScript Language",
                    subtitle: "Object-oriented, web-tuning, etc.",
                    titleContent: "JavaScript language training",
                    content: "JavaScript is a programming language that allows us to create content that dynamically updates, controls media, makes animated images and much more. That is, it is a language that runs in browsers and serves to manipulate web page behavior. With this series of courses I learned, within the JavaScript language, about its fundamentals, interfaces, object orientation, emphasis on web-oriented programming and among other learnings.",
                    certificateTitle: "Completed Courses:",
                    courseList: {
                        one: "JAVASCRIPT - interfaces and inheritance in object orientation",
                        two: "JAVASCRIPT - first steps with the language",
                        three: "JAVASCRIPT - object-oriented programming",
                        four: "JAVASCRIPT - Programming in the language of the web",
                    },
                },
                modal7: {
                    title: "HTML5 / CSS3",
                    subtitle: "Flexbox, CSS Architecture, etc..",
                    titleContent: "Training in HTML and CSS language",
                    content: "HTML is a Hyper Text Markup Language and is the most basic building block of the web. It is used a lot in conjunction with CSS which is used a lot to describe the appearance and style of components. During the training of this course, I studied and implemented everything from the fundamentals of the languages ​​to the most advanced practices. Also, I put a lot of emphasis on Flexbox because I thought it was very important for my professional development.",
                    certificateTitle: "Completed Courses:",
                    courseList: {
                        one: "CSS architecture - making problems uncomplicated",
                        two: "CSS - Arranging elements with flexbox and grid",
                        three: "Flexbox - position elements on the screen",
                        four: "HTML5 and CSS3 - the first page of the web",
                        five: "HTML5 and CSS3 - positioning, lists and navigation",
                        six: "HTML5 and CSS3 - working with forms and tables",
                    }
                },
                modal8: {
                    title: "Git & GitHub",
                    subtitle: "Improving best practices",
                    titleContent: "Training in Git and GitHub",
                    content: "Git is an open source project which is the most modern version control system used in the world. In this Git course trail, I learned the whole concept, fundamentals and best practices of this functionality. Something I learned that is very important are good practices with git, as this makes my work much more agile and easier to understand.",
                    certificateTitle: "Completed Courses:",
                    courseList: {
                        one: "Git and Github - control and share your code",
                        two: "Git and Github - Strategies for branching, conflicts and pull requests",
                    }
                },
                modal9: {
                    title: "Nest Js",
                    subtitle: "Rest API with Nest Js and with validation, serialization, etc..",
                    titleContent: "Nest.js framework training",
                    content: "We can say that Nest.js is a back-end framework made 100% with Node.js and that uses a TypeScript standard. Furthermore, it uses Object Oriented Programming (OOP) elements in addition to Functional Programming (PF) and Functional Reactive Programming (FRP). In this training I did some searching, form validation, serialization and also some architectural details. And on top of that, I created a Rest API in TypeScript.",
                    certificateTitle: "Completed Courses:",
                    courseList: {
                        one: "Rest API with NESTJS - fetches, validation, serialization and architectural details",
                        two: "NestJs - creating a REST API with typescript",
                    }
                },

            },
            contact: {
                title: "Get In Touch",
                name: "Your Name...",
                email: "Your E-mail...",
                message: "Your Message",
                button: "Send"
            },
            portifolio: {
                title1: "Click in the button",
                title2: "and Download my Resume!",
                button: "Download my Portifolio ;)"
            },
            aboutme: {
                title: "I'm Luigi Toniolo",
                subtitle1: 'Web developer',
                subtitle: "My name is Luigi Toniolo, I’m Brazilian and Italian citizen. I'm majoring in electrical engineering at the Federal University of São Carlos (UFSCar) located in São Paulo State, Brazil. In addition to studying engineering, I am a web developer with great knowledge in front-end programming. With that, in my current job, I was inserted into several projects that use some of the most famous frameworks like React Js, React Native, Angular, Flutter and WordPress. The latter, I have a high level of understanding of how it works, and, in addition to mastering this platform, I have complete mastery of some plugins such as woocommerce, elementor, etc. In addition to the frameworks used to develop my projects, I have a high level of knowledge in the following programming languages: JavaScript, Git, Html, CSS, Typescript, Dart, Python and C++. I also find it very easy to follow design prototypes (UI/UX) like the figma platform. Because I did a student exchange program in 2016 to Italy, I consider myself to have an advanced knowledge of the English language and a basic proficiency of italian one.",
            },
            education: {
                historyTitle: 'My Education',
                title: 'Graduating in Electrical Engineering',
                subtitle: 'Federal University of São Carlos / 2019 - Current',
                content: 'I am currently studying at the Federal University of São Carlos (UFSCar) in the electrical engineering course. I participated in some extension projects like Baja and Formula and this added a lot to my professional development.'
            },
            personalSkills1: {
                historyTitle: 'My Works',
                title: 'Full Satack Junior Developer',
                subtitle: 'Domvs iT / Jul 2021 - Current',
                content: "I developed and implemented the entire project of the company's internal website that I work with the help of Figma tools, using React.js as a framework, Git and Jira software to maintain a better organization of tasks. In addition, I had the opportunity to work in partnership with a German company and worked in a hybrid squad with people of different nationalities, such as Pakistan, India, Mexico and the United States. I also developed a personal application that consisted of creating a virtual bank with a user page, login, user validation and a unique design. It is worth mentioning that in all these projects, I used and still use the agile methodology (Scrum) and I usually perform all the ceremonies.",
                readLess: 'Read Less',
                readMore: 'Read More'
            },
            personalSkills2: {
                title: 'Project Manager',
                subtitle: 'Toniolo Joias / Jun 2020 - Feb 2021',
                content: 'I developed and led an entire project for this company. The project consisted of developing a jewelry e-commerce from scratch using WordPress and Woocommerce (Plugin). As it was done in WordPress, it was used a lot, for the development of this e-commerce, all my knowledge of HTML5 and CSS3 and even SCSS. Furthermore, the entire website has been optimized for Search Engine Optimization (SEO). After finishing the development of this project, we decided to invest in ads such as google and facebook advertisements to increase the visualization of our site. With that, we reached more than R$10k in sales in a period of less than 1 month. In addition to investing in paid traffic, we also invest in organic traffic, as previously mentioned, improving the SEO of the entire website.'
            }
        }
    }
}

export {messages}