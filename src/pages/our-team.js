import Testimonials from "@/component/Testimonials";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import TeamCard from "@/component/TeamCard";
const OurTeam = () => {
  const [domLoaded, setDomLoaded] = useState(false);
	useEffect(() => {
		setDomLoaded(true)
	}, [])
  return (  
    domLoaded &&
    <div>
      <section
        id="ori-team-post-feed"
        className="ori-team-post-feed-section position-relative"
      >
        <div className="container">
          <div className="ori-team-post-feed-content">
            <div className="row">
              <div className="row">
                {
                  [...Array(6)].map((item,index)=>(
                    <div className="col-lg-4" key={index}>
                      <TeamCard />
                    </div>
                  ))
                }
                {/* <div className="col-lg-4">
                  <div className="ori-team-inner-item position-relative">
                    <div className="ori-team-img">
                      <Image width={100000} height={10000} className="w-full h-auto" src="/img/team/tm2.png" alt="" />
                    </div>
                    <div className="ori-team-text text-center position-absolute">
                      <h3>
                        <Link href="team-single.html">Alextina Ditarson</Link>
                      </h3>
                      <span>GRAPHIC DESIGNER</span>
                    </div>
                    <div className="ori-team-social text-center position-absolute">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="ori-team-inner-item position-relative">
                    <div className="ori-team-img">
                      <Image width={100000} height={10000} className="w-full h-auto" src="/img/team/tm3.png" alt="" />
                    </div>
                    <div className="ori-team-text text-center position-absolute">
                      <h3>
                        <Link href="team-single.html">Alextina Ditarson</Link>
                      </h3>
                      <span>GRAPHIC DESIGNER</span>
                    </div>
                    <div className="ori-team-social text-center position-absolute">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="ori-team-inner-item position-relative">
                    <div className="ori-team-img">
                      <Image width={100000} height={10000} className="w-full h-auto" src="/img/team/tm3.png" alt="" />
                    </div>
                    <div className="ori-team-text text-center position-absolute">
                      <h3>
                        <Link href="team-single.html">Alextina Ditarson</Link>
                      </h3>
                      <span>GRAPHIC DESIGNER</span>
                    </div>
                    <div className="ori-team-social text-center position-absolute">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="ori-team-inner-item position-relative">
                    <div className="ori-team-img">
                      <Image width={100000} height={10000} className="w-full h-auto" src="/img/team/tm4.png" alt="" />
                    </div>
                    <div className="ori-team-text text-center position-absolute">
                      <h3>
                        <Link href="team-single.html">Alextina Ditarson</Link>
                      </h3>
                      <span>GRAPHIC DESIGNER</span>
                    </div>
                    <div className="ori-team-social text-center position-absolute">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="ori-team-inner-item position-relative">
                    <div className="ori-team-img">
                      <Image width={100000} height={10000} className="w-full h-auto" src="/img/team/tm5.png" alt="" />
                    </div>
                    <div className="ori-team-text text-center position-absolute">
                      <h3>
                        <Link href="team-single.html">Alextina Ditarson</Link>
                      </h3>
                      <span>GRAPHIC DESIGNER</span>
                    </div>
                    <div className="ori-team-social text-center position-absolute">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div> */}
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
        <div className="ori-vector-bg position-absolute">
          <Image width={100000} height={10000} className="w-full h-auto" src="/img/vector/tst-vector1.png" alt="" />
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
    </div>
  );
};
export default OurTeam;
