import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { i18n } from "./MultiLingue/Translate/i18n";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = {
    skill1: {
      percentage: '90%',
      name: 'Html5 / CSS3 / SASS',
    },
    skill2: {
      percentage: '85%',
      name: 'JavaScript',
    },
    skill3: {
      percentage: '90%',
      name: 'WordPress',
    },
    skill4: {
      percentage: '75%',
      name: 'Dart / Flutter',
    },
    skill5: {
      percentage: '90%',
      name: 'React.Js',
    },
    skill6: {
      percentage: '75%',
      name: 'Angular',
    },
    skill7: {
      percentage: '70%',
      name: 'ASP.Net / C#',
    },
    skill8: {
      percentage: '95%',
      name: 'Git & GitHub',
    },
    skill9: {
      percentage: '75%',
      name: 'MySql',
    },
    skill10: {
      percentage: '95%',
      name: 'Jira / Figma',
    },
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>{i18n.t('skills.title')}</h2>
                        <p>{i18n.t('skills.subtitle')}</p>

                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                            <div className="item">

                              <div className="single-chart">
                                <svg viewBox="0 0 36 36" className="circular-chart orange">
                                  <path className="circle"
                                    stroke-dasharray="90, 100"
                                    d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                  />
                                  <text x="19.5" y="20.35" className="percentage">{skills.skill1.percentage}</text>
                                </svg>
                              </div>
                              <div className="percentage-text">
                                <h5>{skills.skill1.name}</h5>
                              </div>

                            </div>

                            <div className="item">

                            <div className="single-chart">
                                <svg viewBox="0 0 36 36" className="circular-chart orange">
                                  <path className="circle"
                                    stroke-dasharray="85, 100"
                                    d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                  />
                                  <text x="19.5" y="20.35" className="percentage">{skills.skill2.percentage}</text>
                                </svg>
                              </div>
                              <div className="percentage-text">
                                <h5>{skills.skill2.name}</h5>
                              </div>

                            </div>

                            <div className="item">

                              <div className="single-chart">
                                <svg viewBox="0 0 36 36" className="circular-chart orange">
                                  <path className="circle"
                                    stroke-dasharray="90, 100"
                                    d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                  />
                                  <text x="19.5" y="20.35" className="percentage">{skills.skill3.percentage}</text>
                                </svg>
                              </div>
                              <div className="percentage-text">
                                <h5>{skills.skill3.name}</h5>
                              </div>

                            </div>

                            <div className="item">

                              <div className="single-chart">
                                <svg viewBox="0 0 36 36" className="circular-chart orange">
                                  <path className="circle"
                                    stroke-dasharray="75, 100"
                                    d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                  />
                                  <text x="19.5" y="20.35" className="percentage">{skills.skill4.percentage}</text>
                                </svg>
                              </div>
                              <div className="percentage-text">
                                <h5>{skills.skill4.name}</h5>
                              </div>

                            </div>

                            <div className="item">

                            <div className="single-chart">
                              <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle"
                                  stroke-dasharray="90, 100"
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="19.5" y="20.35" className="percentage">{skills.skill5.percentage}</text>
                              </svg>
                            </div>
                            <div className="percentage-text">
                              <h5>{skills.skill5.name}</h5>
                            </div>

                          </div>

                          <div className="item">

                            <div className="single-chart">
                              <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle"
                                  stroke-dasharray="75, 100"
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="19.5" y="20.35" className="percentage">{skills.skill6.percentage}</text>
                              </svg>
                            </div>
                            <div className="percentage-text">
                              <h5>{skills.skill6.name}</h5>
                            </div>

                          </div>

                          <div className="item">

                            <div className="single-chart">
                              <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle"
                                  stroke-dasharray="70, 100"
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="19.5" y="20.35" className="percentage">{skills.skill7.percentage}</text>
                              </svg>
                            </div>
                            <div className="percentage-text">
                              <h5>{skills.skill7.name}</h5>
                            </div>

                          </div>

                          <div className="item">

                            <div className="single-chart">
                              <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle"
                                  stroke-dasharray="95, 100"
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="19.5" y="20.35" className="percentage">{skills.skill8.percentage}</text>
                              </svg>
                            </div>
                            <div className="percentage-text">
                              <h5>{skills.skill8.name}</h5>
                            </div>

                          </div>

                          <div className="item">

                            <div className="single-chart">
                              <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle"
                                  stroke-dasharray="75, 100"
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="19.5" y="20.35" className="percentage">{skills.skill9.percentage}</text>
                              </svg>
                            </div>
                            <div className="percentage-text">
                              <h5>{skills.skill9.name}</h5>
                            </div>

                          </div>

                          <div className="item">

                            <div className="single-chart">
                              <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle"
                                  stroke-dasharray="95, 100"
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="19.5" y="20.35" className="percentage">{skills.skill10.percentage}</text>
                              </svg>
                            </div>
                            <div className="percentage-text">
                              <h5>{skills.skill10.name}</h5>
                            </div>

                          </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
