import React from 'react';
import '../assets/styles/AboutMe.css';
import FotoPerfil from '../assets/img/foto perfil nova.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FooterPages } from './FooterPages';
import { i18n } from "./MultiLingue/Translate/i18n";
import { Container } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import ReactReadMoreReadLess from "react-read-more-read-less";

export function Perfil () {

    return (
            <div className="perfil">

                <Container className='content'>
                    <TrackVisibility offset={1000}> 
                    {({ isVisible }) => (
                        <img 
                            src={FotoPerfil} 
                            href='foto de perfil luigi' 
                            id='imagemPerfil' 
                            className={ isVisible ? "animate__animated animate__zoomIn" : "" 
                        }/>
                    )}
                    </TrackVisibility>

                    <h1 className='title'>{i18n.t('aboutme.title')}</h1>
                    <h6 className='subtitle1'>{i18n.t('aboutme.subtitle1')}</h6>
                    <p className='subtitle'>{i18n.t('aboutme.subtitle')}</p>
                </Container>

                <TrackVisibility offset={1000}>
                {({ isVisible }) => (
                    <Container 
                        id='history' 
                        className={ isVisible ? "animate__animated animate__fadeInUp" : "" }>
                        <div className='education'>

                            <h3 className='historyTitle'>{i18n.t('education.historyTitle')}</h3>
                            <div className='cardContent'>
                                <h4 class="text-">{i18n.t('education.title')}</h4>
                                <p class="mb-2">{i18n.t('education.subtitle')}</p>
                                <p class="textContent">
                                    {i18n.t('education.content')} 
                                </p>
                            </div>

                        </div>

                        <div className='personalSkills'>
                            <h3 className='historyTitle'>{i18n.t('personalSkills1.historyTitle')}</h3>

                            <div className='cardContent'>
                                <h4 class="text-">{i18n.t('personalSkills3.title')}</h4>
                                <p class="mb-2">{i18n.t('personalSkills3.subtitle')}</p>
                                <div className='textContent'>
                                <ReactReadMoreReadLess
                                        charLimit={250}
                                        readMoreText={i18n.t('personalSkills1.readMore')}
                                        readLessText={i18n.t('personalSkills1.readLess')}
                                        readMoreClassName="read-more-less--more"
                                        readLessClassName="read-more-less--less"
                                    >
                                        {i18n.t('personalSkills3.content')}
                                    </ReactReadMoreReadLess>
                                </div>
                            </div>

                            <div className='cardContent'>
                                <h4 class="text-">{i18n.t('personalSkills1.title')}</h4>
                                <p class="mb-2">{i18n.t('personalSkills1.subtitle')}</p>
                                <div className='textContent'>
                                    <ReactReadMoreReadLess
                                        charLimit={250}
                                        readMoreText={i18n.t('personalSkills1.readMore')}
                                        readLessText={i18n.t('personalSkills1.readLess')}
                                        readMoreClassName="read-more-less--more"
                                        readLessClassName="read-more-less--less"
                                    >
                                        {i18n.t('personalSkills1.content')}
                                    </ReactReadMoreReadLess>

                                </div>
                            </div>

                            <div className='cardContent'>
                                <h4 class="text-">{i18n.t('personalSkills2.title')}</h4>
                                <p class="mb-2">{i18n.t('personalSkills2.subtitle')}</p>
                                <div className='textContent'>
                                <ReactReadMoreReadLess
                                        charLimit={250}
                                        readMoreText={i18n.t('personalSkills1.readMore')}
                                        readLessText={i18n.t('personalSkills1.readLess')}
                                        readMoreClassName="read-more-less--more"
                                        readLessClassName="read-more-less--less"
                                    >
                                        {i18n.t('personalSkills2.content')}
                                    </ReactReadMoreReadLess>
                                </div>
                            </div>

                        </div>

                    </Container>
                )}
                </TrackVisibility>

                <div className='rodape'>
                    <FooterPages/>
                </div>

            </div>
    );

}
