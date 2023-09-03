import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import Link from 'next/link';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
  
    <button type="button" className="testi-right_arrow" onClick={onClick}>
        <Image width={100000} height={10000} className="w-full h-auto" src="/img/vector/next.png" alt="" />
    </button>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className="testi-left_arrow" onClick={onClick}>
            <Image width={100000} height={10000} className="w-full h-auto" src="/img/vector/prev.png" alt="" />
        </button>
        
    );
}

const Testimonials = () => {
    const settings = {
        arrow: true,
        dots: false,
        slidesToShow: 1,
        autoplay: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToScroll: 1,
    } 
    return (
        <>
            <Slider {...settings} className="ori-testimonial-slider-1">
                <div className="ori-testimonial-item-area">
                    <div className="ori-testimonial-item-1">
                        <div className="ori-testimonial-text text-center pera-content">
                            <p>
                                “Our office is something we are pleased with. We consider
                                it the little magnet; it is wanting to come here and
                                afterward difficult to leave it. Our office is
                                additionally a big name.”
                            </p>
                            <div className="ori-testimonial-author text-center text-uppercase">
                                <h4>Hahimlam Dirat</h4>
                                <span>ui/ux Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ori-testimonial-item-area">
                    <div className="ori-testimonial-item-1">
                        <div className="ori-testimonial-text text-center pera-content">
                            <p>
                                “Our office is something we are pleased with. We consider
                                it the little magnet; it is wanting to come here and
                                afterward difficult to leave it. Our office is
                                additionally a big name.”
                            </p>
                            <div className="ori-testimonial-author text-center text-uppercase">
                                <h4>Hahimlam Dirat</h4>
                                <span>ui/ux Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ori-testimonial-item-area">
                    <div className="ori-testimonial-item-1">
                        <div className="ori-testimonial-text text-center pera-content">
                            <p>
                                “Our office is something we are pleased with. We consider
                                it the little magnet; it is wanting to come here and
                                afterward difficult to leave it. Our office is
                                additionally a big name.”
                            </p>
                            <div className="ori-testimonial-author text-center text-uppercase">
                                <h4>Hahimlam Dirat</h4>
                                <span>ui/ux Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className="carousel_nav">
                
                
            </div>
        </>

    )
}

export default Testimonials