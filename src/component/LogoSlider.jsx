import React from 'react'
import Slider from "react-slick";

const LogoSlider = () => {
    const sponcerSettings = {
        arrow: false,
        dots: false,
        loop: true,
        infinite: false,
        slidesToShow: 5,
        autoplay: true,
        slidesToScroll: 1,
        // cssEase: "linear",
        // autoplaySpeed: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
    
          ]
      };
  return (
    <Slider {...sponcerSettings} className="ori-sponsor-slider">
         
              <div className="ori-sponsor-item">
                <div className="ori-sponsor-img">
                  <a href="#">
                    <img src="/img/sponsor/sp1.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="ori-sponsor-item">
                <div className="ori-sponsor-img">
                  <a href="#">
                    <img src="/img/sponsor/sp2.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="ori-sponsor-item">
                <div className="ori-sponsor-img">
                  <a href="#">
                    <img src="/img/sponsor/sp3.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="ori-sponsor-item">
                <div className="ori-sponsor-img">
                  <a href="#">
                    <img src="/img/sponsor/sp4.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="ori-sponsor-item">
                <div className="ori-sponsor-img">
                  <a href="#">
                    <img src="/img/sponsor/sp5.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="ori-sponsor-item">
                <div className="ori-sponsor-img">
                  <a href="#">
                    <img src="/img/sponsor/sp1.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="ori-sponsor-item">
                <div className="ori-sponsor-img">
                  <a href="#">
                    <img src="/img/sponsor/sp2.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="ori-sponsor-item">
                <div className="ori-sponsor-img">
                  <a href="#">
                    <img src="/img/sponsor/sp3.png" alt="" />
                  </a>
                </div>
              </div>
          
          </Slider>
  )
}

export default LogoSlider