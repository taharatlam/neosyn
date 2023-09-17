import LogoSlider from "@/component/LogoSlider";
import ProgressCounter from "@/component/ProgressCounter";
import Image from "next/image";
import Link from "next/link";
import TeamCard from "@/component/TeamCard";

const About = () => {
  return (
    <>
      <section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="/assets/img/bg/bread-bg.png">
        <div className="container">
          <div className="ori-breadcrumb-content text-center ul-li">
            <h1>About Us</h1>
            <ul>
              <li><Link href="index.html">orixy</Link></li>
              <li>About Us</li>
            </ul>
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

      <section id="ori-about-play" className="ori-about-play-section position-relative">
        <div className="container">
          <div className="ori-about-play-top-content d-flex justify-content-between align-items-center">
            <div className="ori-inner-section-title">
              <span className="sub-title text-uppercase">About us</span>
              <h2>Product Devlopment For Butter Business</h2>
            </div>
            <div className="ori-about-play-top-text">
              Rorem ipsum dolor sit ametconsectetur adipiscing elit,tempor Rorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod temporRorem ipsum dolor
            </div>
          </div>
          <div className="ori-about-play-area position-relative">
            <div className="ori-about-play-img">
              <Image height={720} width={1920} src="/assets/img/about/play-bg.png" alt="" />
            </div>
            <div className="about-play-btn position-absolute">
              <Link className="text-uppercase video_box d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=bIoPkZRVll">Play</Link>
            </div>
          </div>
          <div class="ori-about-counter-area">
            <div class="ori-about-counter-item-wrap d-flex justify-content-between">
              <div class="ori-about-counter-item pera-content">
                <h3><span class="counter">15</span>+</h3>
                <p class="text-uppercase"><span>{'//'}</span> YEARS EXPERIENCE</p>
              </div>
              <div class="ori-about-counter-item pera-content">
                <h3><span class="counter">330</span>+</h3>
                <p class="text-uppercase"><span>{'//'}</span> PROJECT FINISHED</p>
              </div>
              <div class="ori-about-counter-item pera-content">
                <h3><span class="counter">95</span>M</h3>
                <p class="text-uppercase"><span>{'//'}</span> RECOGNITION</p>
              </div>
              <div class="ori-about-counter-item pera-content">
                <h3><span class="counter">250</span>K+</h3>
                <p class="text-uppercase"><span>{'//'}</span> HAPPY CLIENTS</p>
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

      <section id="ori-about-circle-progress" className="ori-about-circle-progress-section position-relative">
        <div className="container">
          <div className="ori-circle-progress-top-content d-flex justify-content-between align-items-center">
            <div className="ori-inner-section-title">
              <span className="sub-title text-uppercase">why choose us</span>
              <h2>Unlock Revenue Growth for Your Business</h2>
            </div>
            <div className="ori-circle-progress-btn">
              <Link href="service.html">See Our Service<i className="fal fa-arrow-right"></i></Link>
            </div>
          </div>
          <div className="ori-about-circle-progress-item-wrap d-flex align-items-center justify-content-between">

            <div className="ori-about-circle-progress-item">
              <div className="counter-boxed text-center headline position-relative">
                <div className="circ-p-wrapper">
                  <ProgressCounter value={90} />
                </div>
                <h3 className="text-uppercase">product sales</h3>
                <h3 className="text-uppercase">
                  {" "}
                  growing per month
                </h3>
              </div>
            </div>
            <div className="ori-about-circle-progress-item">
              <div className="counter-boxed text-center headline position-relative">
                <div className="circ-p-wrapper">
                  <ProgressCounter value={90} />
                </div>
                <h3 className="text-uppercase">product sales</h3>
                <h3 className="text-uppercase">
                  {" "}
                  backend
                </h3>
              </div>
            </div>
            <div className="ori-about-circle-progress-item">
              <div className="counter-boxed text-center headline position-relative">
                <div className="circ-p-wrapper">
                  <ProgressCounter value={90} />
                </div>
                <h3 className="text-uppercase">product sales</h3>
                <h3 className="text-uppercase">
                  {" "}
                  mobile development
                </h3>
              </div>
            </div>
            <div className="ori-about-circle-progress-item">
              <div className="counter-boxed text-center headline position-relative">
                <div className="circ-p-wrapper">
                  <ProgressCounter value={90} />
                </div>
                <h3 className="text-uppercase">product sales</h3>
                <h3 className="text-uppercase">
                  {" "}
                  web development
                </h3>
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

      <section id="ori-team-1" className="ori-team-section-1 position-relative">
        <div className="ori-team-content-area">
          <div className="container">
            <div className="ori-team-top-content-1 d-flex justify-content-between align-items-center">
              <div className="ori-section-title-1 text-uppercase">
                <h2>Meet our team of <span>professional</span></h2>
              </div>
              <div className="ori-btn-1 text-uppercase">
                <Link href="team.html">all Team Member</Link>
              </div>
            </div>
            <div className="ori-team-content-1">
              <div className="row">
                {
                  [...Array(3)].map((item,index)=>(
                    <div className="col-lg-4" key={index}>
                      <TeamCard />
                    </div>
                  ))
                }
                {/* <div className="col-lg-4">
                  <div className="ori-team-inner-item position-relative">
                    <div className="ori-team-img">
                      <Image height={10000} width={10000} src="/assets/img/team/tm2.png" alt="" />
                    </div>
                    <div className="ori-team-text text-center position-absolute">
                      <h3><Link href="team-single.html">Alextina Ditarson</Link></h3>
                      <span>GRAPHIC DESIGNER</span>
                    </div>
                    <div className="ori-team-social text-center position-absolute">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                      <Link href="#"><i className="fab fa-youtube"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="ori-team-inner-item position-relative">
                    <div className="ori-team-img">
                      <Image height={10000} width={10000} src="/assets/img/team/tm3.png" alt="" />
                    </div>
                    <div className="ori-team-text text-center position-absolute">
                      <h3><Link href="team-single.html">Alextina Ditarson</Link></h3>
                      <span>GRAPHIC DESIGNER</span>
                    </div>
                    <div className="ori-team-social text-center position-absolute">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                      <Link href="#"><i className="fab fa-youtube"></i></Link>
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

      <section id="ori-sponsor-1" className="ori-sponsor-section-1 inner-sponsor position-relative">
        <div className="container">
          <div className="ori-sponsor-title text-uppercase text-center">
            <h3><i></i> <span>Trusted by</span><i></i></h3>
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
      </section>
    </>
  );
};
export default About;
