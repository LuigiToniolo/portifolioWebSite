import React from 'react';
import '../assets/styles/AboutMe.css';
import FotoPerfil from '../assets/img/foto perfil nova.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FooterPages } from './FooterPages';

export function Perfil () {
    return (
            <div className="perfil">

                <div className='content'>
                    <h1 className='title'>Olá, esse sou eu!</h1>
                    <img src={FotoPerfil} href='foto de perfil luigi' className='imagemPerfil'/>
                    <p className='subtitle'>My name is Luigi Toniolo, I’m Brazilian and Italian citizen. I'm majoring in electrical engineering at the Federal University of São Carlos (UFSCar) located in São Paulo State, Brazil. In addition to studying engineering, I am a web developer with great knowledge in front-end programming. With that, in my current job, I was inserted into several projects that use some of the most famous frameworks like React Js, React Native, Angular, Flutter and WordPress. The latter, I have a high level of understanding of how it works, and, in addition to mastering this platform, I have complete mastery of some plugins such as woocommerce, elementor, etc. In addition to the frameworks used to develop my projects, I have a high level of knowledge in the following programming languages: JavaScript, Git, Html, CSS, Typescript, Dart, Python and C++. I also find it very easy to follow design prototypes (UI/UX) like the figma platform. Because I did a student exchange program in 2016 to Italy, I consider myself to have an advanced knowledge of the English language and a basic proficiency of italian one.</p>
                </div>

                <div className='rodape'>
                    <FooterPages/>
                </div>

            </div>
    );

}
