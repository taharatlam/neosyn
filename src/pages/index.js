'use client'
import LogoSlider from "@/component/LogoSlider";
import MarqueText from "@/component/MarqueText";
import Testimonials from "@/component/Testimonials";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";

const Home = () => {
  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wow.js') : null
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(()=>{
    setDomLoaded(true)
    new WOW().init()
  },[])

  const settings = {
    dots: true,
    infinite: false,
    fade: true,
    // speed: 500,
    dotsClass: "slick-dots slick-thumb",
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(i) {
      return (
        <>
        {`0${i+1}`}
        </>
      );
    },
  };

  

  return (
    <>
    {
      domLoaded&&
      <>
      <section
      id="ori-slider-1"
      className="ori-slider-section-1 position-relative"
    >
      <div className="ori-slider-content-wrapper-1 postion-relative">
        <div className="ori-slider-social position-absolute text-uppercase ul-li">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube"></i> Youtube
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="ori-slider-content-wrapper-1 ">
          <Slider {...settings} className="ori-slider-wrap-1">
            <div className="ori-slider-content-1 position-relative">
              <div className="ori-slider-text text-center  text-uppercase">
                <h1>
                  Build Digital <span>PRoduct</span>
                  and Brand <i className="fas fa-arrow-right"></i>
                </h1>
                <div className="slider-play-btn">
                  <a
                    className="video_box d-flex align-items-center justify-content-center text-uppercase"
                    href="https://www.youtube.com/watch?v=O0pLvLtoESc"
                  >
                    PLAY
                  </a>
                </div>
                <div className="ori-slider-img position-absolute">
                  <img src="/img/slider/slider-1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="ori-slider-content-1 position-relative">
              <div className="ori-slider-text text-center  text-uppercase">
                <h1>
                  Build Digital <span>PRoduct</span>
                  and Brand <i className="fas fa-arrow-right"></i>
                </h1>
                <div className="slider-play-btn">
                  <a
                    className="video_box d-flex align-items-center justify-content-center text-uppercase"
                    href="https://www.youtube.com/watch?v=O0pLvLtoESc"
                  >
                    PLAY
                  </a>
                </div>
                <div className="ori-slider-img position-absolute">
                  <img src="/img/slider/slider-1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="ori-slider-content-1 position-relative">
              <div className="ori-slider-text text-center  text-uppercase">
                <h1>
                  Build Digital <span>PRoduct</span>
                  and Brand <i className="fas fa-arrow-right"></i>
                </h1>
                <div className="slider-play-btn">
                  <a
                    className="video_box d-flex align-items-center justify-content-center text-uppercase"
                    href="https://www.youtube.com/watch?v=O0pLvLtoESc"
                  >
                    PLAY
                  </a>
                </div>
                <div className="ori-slider-img position-absolute">
                  <img src="/img/slider/slider-1.png" alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
        {/* <div className="ori-slider-wrap-1">
        </div> */}
        <div className="line_animation">
          <div className="line_area"></div>
          <div className="line_area"></div>
          <div className="line_area"></div>
          <div className="line_area"></div>
          <div className="line_area"></div>
          <div className="line_area"></div>
          <div className="line_area"></div>
          <div className="line_area"></div>
        </div>
      </div>
      <div className="ori-slider-scroll position-absolute text-uppercase">
        <span>SCrool </span>
        <div className="scroll-mouse">
          <i className="fal fa-mouse"></i>
        </div>
      </div>
    </section>

    <div id="ori-service-1" className="ori-service-section-1">
      <div className="ori-service-wrapper-1">
        <div className="container">
          <div className="ori-service-top-content-1 d-flex justify-content-between align-items-center">
            <div
              className="ori-section-title-1 text-uppercase wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <h2>
                Modern digital <span> design experience</span>
              </h2>
            </div>
            <div
              className="ori-btn-1 text-uppercase wow fadeInRight"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <a href="service.html">Our services</a>
            </div>
          </div>
          <div className="ori-service-content-1">
            <div className="row">
              <div
                className="col-lg-4 wow fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="ori-service-inner-item position-relative">
                  <div className="ori-service-more position-absolute">
                    <a href="about.html">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="ori-service-img-title position-relative">
                    <div className="ori-service-img">
                      <img src="/img/service/ser1.png" alt="" />
                    </div>
                    <div className="ori-service-title text-center position-absolute">
                      <h3>
                        About us <i className="fal fa-arrow-right"></i>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="ori-service-inner-item position-relative">
                  <div className="ori-service-more position-absolute">
                    <a href="mission.html">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="ori-service-img-title position-relative">
                    <div className="ori-service-img">
                      <img src="/img/service/ser2.png" alt="" />
                    </div>
                    <div className="ori-service-title text-center position-absolute">
                      <h3>
                        Our Mission <i className="fal fa-arrow-right"></i>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeInUp"
                data-wow-delay="800ms"
                data-wow-duration="1500ms"
              >
                <div className="ori-service-inner-item position-relative">
                  <div className="ori-service-more position-absolute">
                    <a href="service.html">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="ori-service-img-title position-relative">
                    <div className="ori-service-img">
                      <img src="/img/service/ser3.png" alt="" />
                    </div>
                    <div className="ori-service-title text-center position-absolute">
                      <h3>
                        Our approach <i className="fal fa-arrow-right"></i>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="ori-sponsor-1"
      className="ori-sponsor-section-1 position-relative"
    >
      <div className="container">
        <div className="ori-sponsor-title text-uppercase text-center">
          <h3>
            <i></i> <span>Trusted by</span> <i></i>{" "}
          </h3>
        </div>
        <div className="ori-sponsor-content">
          <LogoSlider />
        </div>
      </div>
      <div className="line_animation">
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
      </div>
    </div>

    <section
      id="ori-project-1"
      className="ori-project-section-1 position-relative"
    >
      <div className="container">
        <div className="ori-project-content-1 position-relative">
          <div className="row">
            <div className="col-lg-4">
              <div className="ori-project-tab-btn-content">
                <div
                  className="ori-section-title-1 text-uppercase wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <h2>
                    complete <span> project</span>
                  </h2>
                </div>
                <div
                  className="ori-project-tab-btn ul-li-block text-uppercase wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        NFT Design
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Digital Art
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Branding Design
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="interior-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#interior"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Web Project
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="construction-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#construction"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Graphic Design
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="ori-project-tab-content wow fadeInUp"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro1.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro2.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro3.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro1.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro2.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro3.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro1.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro2.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro3.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="interior"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro1.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro2.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro3.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="construction"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro1.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro2.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ori-project-item-1 position-relative">
                      <div className="ori-project-img">
                        <img src="/img/project/pro3.png" alt="" />
                      </div>
                      <div className="ori-project-text position-absolute">
                        <h3>
                          <a href="portfolio-single.html">
                            Portrait Man Digital Art
                          </a>
                        </h3>
                        <span className="text-uppercase project-category">
                          <a href="#">Baskcate Ball Art</a>
                        </span>
                      </div>
                      <div className="ori-project-link position-absolute">
                        <a href="portfolio-single.html">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="ori-btn-1 position-absolute text-uppercase wow fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <a href="portfolio.html">Visit our all work</a>
          </div>
        </div>
      </div>
      <div className="line_animation">
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
      </div>
    </section>

    <section
      id="ori-text-scroll-1"
      className="ori-text-scroll-section-1 position-relative"
    >
      <div className="ori-text-scroll-content">
        <Marquee pauseOnHover={true}>
          <MarqueText />
        </Marquee>
      </div>
      <div className="line_animation">
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
      </div>
    </section>

    <section id="ori-team-1" className="ori-team-section-1 position-relative">
      <div className="ori-team-content-area">
        <div className="container">
          <div className="ori-team-top-content-1 d-flex justify-content-between align-items-center">
            <div
              className="ori-section-title-1 text-uppercase wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <h2>
                Meet our team of <span>professional</span>
              </h2>
            </div>
            <div
              className="ori-btn-1 text-uppercase wow fadeInRight"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <a href="team.html">all Team Member</a>
            </div>
          </div>
          <div className="ori-team-content-1">
            <div className="row">
              <div
                className="col-lg-4 wow fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="ori-team-inner-item position-relative">
                  <div className="ori-team-img">
                    <img src="/img/team/tm1.png" alt="" />
                  </div>
                  <div className="ori-team-text text-center position-absolute">
                    <h3>
                      <a href="team-single.html">Alextina Ditarson</a>
                    </h3>
                    <span>GRAPHIC DESIGNER</span>
                  </div>
                  <div className="ori-team-social text-center position-absolute">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="ori-team-inner-item position-relative">
                  <div className="ori-team-img">
                    <img src="/img/team/tm2.png" alt="" />
                  </div>
                  <div className="ori-team-text text-center position-absolute">
                    <h3>
                      <a href="team-single.html">Alextina Ditarson</a>
                    </h3>
                    <span>GRAPHIC DESIGNER</span>
                  </div>
                  <div className="ori-team-social text-center position-absolute">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeInUp"
                data-wow-delay="800ms"
                data-wow-duration="1500ms"
              >
                <div className="ori-team-inner-item position-relative">
                  <div className="ori-team-img">
                    <img src="/img/team/tm3.png" alt="" />
                  </div>
                  <div className="ori-team-text text-center position-absolute">
                    <h3>
                      <a href="team-single.html">Alextina Ditarson</a>
                    </h3>
                    <span>GRAPHIC DESIGNER</span>
                  </div>
                  <div className="ori-team-social text-center position-absolute">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line_animation">
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
      </div>
    </section>

    <section
      id="ori-testimonial-1"
      className="ori-testimonial-section-1 position-relative"
    >
      <div
        className="ori-vector-bg position-absolute wow fadeInUp"
        data-wow-delay="400ms"
        data-wow-duration="1500ms"
      >
        <img src="/img/vector/tst-vector1.png" alt="" />
      </div>
      <div className="container">
        <div className="ori-testimonial-content-1 position-relative">
          <div className="ori-testimonial-title text-center text-uppercase">
            <h3>What our Client say</h3>
          </div>
          <Testimonials />
        </div>
      </div>
      <div className="line_animation">
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
      </div>
    </section>

    <section
      id="ori-text-scroll-2"
      className="ori-text-scroll-section-2 position-relative"
    >
      <div className="ori-text-scroll-content">
        <Marquee pauseOnHover={true}>
          <MarqueText />
        </Marquee>
      </div>
      <div className="line_animation">
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
      </div>
    </section>

    <section id="ori-blog-1" className="ori-blog-section-1 position-relative">
      <div className="container">
        <div className="ori-blog-top-content-1 d-flex justify-content-between align-items-center">
          <div
            className="ori-section-title-1 text-uppercase wow fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <h2>
              latest <span>posts</span>
            </h2>
          </div>
          <div
            className="ori-btn-1 text-uppercase wow fadeInRight"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <a href="blog.html">See all blogs</a>
          </div>
        </div>
        <div className="ori-blog-content-1">
          <div className="row">
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="ori-blog-inner-item">
                <div className="blog-inner-img">
                  <img src="/img/blog/blg1.png" alt="" />
                </div>
                <div className="blog-inner-text">
                  <h3>
                    <a href="blog-single.html">
                      Accelerating UX Maturity With A Breakthrough Project
                    </a>
                  </h3>
                  <a
                    className="read-more text-uppercase"
                    href="blog-single.html"
                  >
                    Read more <i className="fal fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="ori-blog-inner-item">
                <div className="blog-inner-img">
                  <img src="/img/blog/blg2.png" alt="" />
                </div>
                <div className="blog-inner-text">
                  <h3>
                    <a href="blog-single.html">
                      Jump Into July (2022 Desktop Wallpapers Edition)
                    </a>
                  </h3>
                  <a
                    className="read-more text-uppercase"
                    href="blog-single.html"
                  >
                    Read more <i className="fal fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="ori-blog-inner-item">
                <div className="blog-inner-img">
                  <img src="/img/blog/blg3.png" alt="" />
                </div>
                <div className="blog-inner-text">
                  <h3>
                    <a href="blog-single.html">
                      How To Build A Localized Website With Hugo And Strapi
                    </a>
                  </h3>
                  <a
                    className="read-more text-uppercase"
                    href="blog-single.html"
                  >
                    Read more <i className="fal fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line_animation">
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
      </div>
    </section>
    </>
    }
     
    </>
  );
};
export default Home;

