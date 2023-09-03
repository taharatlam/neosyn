import { services } from "@/constant";

import Breadcrumbs from "@/component/Layout/Breadcrum";
import Link from "next/link";
import Image from "next/image";

// const inter = Inter({ subsets: ['latin'] })

export default function Services() {
  const serviceCard =  [...services.serviceType];
  return (
    <div>
      <Breadcrumbs pageTitle={"Our Services"} companyName={"Neosyn"} />
      <section
        id="ori-service-page-service"
        className="ori-service-page-service-section"
      >
        <div className="container">
          <div className="ori-service-page-service-content">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="ori-service-page-service-inner-item">
                  <div className="service-icon">
                    <i className="fal fa-crop-alt"></i>
                  </div>
                  <div className="service-text pera-content">
                    <h3>
                      <Link href="/services/webDevelopment">Web Development</Link>
                    </h3>
                    <p>Web development is the work involved in developing </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ori-service-page-service-inner-item">
                  <div className="service-icon">
                    <i className="fal fa-drafting-compass"></i>
                  </div>
                  <div className="service-text pera-content">
                    <h3>
                      <Link href="/services/uiUxDesign">UI/UX Design</Link>
                    </h3>
                    <p>Web development is the work involved in developing </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ori-service-page-service-inner-item">
                  <div className="service-icon">
                    <i className="fal fa-analytics"></i>
                  </div>
                  <div className="service-text pera-content">
                    <h3>
                      <Link href="/services/digitalMarketing">Digital Marketing</Link>
                    </h3>
                    <p>Web development is the work involved in developing </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ori-service-page-service-inner-item">
                  <div className="service-icon">
                    <i className="fab fa-product-hunt"></i>
                  </div>
                  <div className="service-text pera-content">
                    <h3>
                      <Link href="/services/productDesign">Product Design</Link>
                    </h3>
                    <p>Web development is the work involved in developing </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ori-service-page-service-inner-item">
                  <div className="service-icon">
                    <i className="fab fa-joomla"></i>
                  </div>
                  <div className="service-text pera-content">
                    <h3>
                      <Link href="/services/appDevelopment">Branding & Illustration</Link>
                    </h3>
                    <p>Web development is the work involved in developing </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ori-service-page-service-inner-item">
                  <div className="service-icon">
                    <i className="fal fa-mobile-alt"></i>
                  </div>
                  <div className="service-text pera-content">
                    <h3>
                      <Link href="/services/mobileSolutions">Mobile Solutions</Link>
                    </h3>
                    <p>Web development is the work involved in developing </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ori-service-page-service-inner-item">
                  <div className="service-icon">
                    <i className="fal fa-phone-laptop"></i>
                  </div>
                  <div className="service-text pera-content">
                    <h3>
                      <Link href="/services/appDevelopment">App Development</Link>
                    </h3>
                    <p>Web development is the work involved in developing </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ori-service-page-service-inner-item">
                  <div className="service-icon">
                    <i className="fal fa-envelope-open-text"></i>
                  </div>
                  <div className="service-text pera-content">
                    <h3>
                      <Link href="/services/emailMarketing">Email Marketing</Link>
                    </h3>
                    <p>Web development is the work involved in developing </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ori-service-inner-area" className="ori-service-inner-section position-relative">
		<div className="container">
			<div className="ori-service-content-1">
				<div className="row">
					<div className="col-lg-4">
						<div className="ori-service-inner-item position-relative">
							<div className="ori-service-more position-absolute">
								<a href="about.html"><i className="fas fa-arrow-right"></i></a>
							</div>
							<div className="ori-service-img-title position-relative">
								<div className="ori-service-img">
									<Image width={100000} height={10000} className="w-full h-auto" src="/img/service/ser1.png" alt=""/>
								</div>
								<div className="ori-service-title text-center position-absolute">
									<h3>About us  <i className="fal fa-arrow-right"></i></h3>
								</div> 
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ori-service-inner-item position-relative">
							<div className="ori-service-more position-absolute">
								<a href="mission.html"><i className="fas fa-arrow-right"></i></a>
							</div>
							<div className="ori-service-img-title position-relative">
								<div className="ori-service-img">
									<Image width={100000} height={10000} className="w-full h-auto" src="/img/service/ser2.png" alt=""/>
								</div>
								<div className="ori-service-title text-center position-absolute">
									<h3>Our Mission  <i className="fal fa-arrow-right"></i></h3>
								</div> 
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ori-service-inner-item position-relative">
							<div className="ori-service-more position-absolute">
								<a href="about.html"><i className="fas fa-arrow-right"></i></a>
							</div>
							<div className="ori-service-img-title position-relative">
								<div className="ori-service-img">
									<Image width={100000} height={10000} className="w-full h-auto" src="/img/service/ser3.png" alt=""/>
								</div>
								<div className="ori-service-title text-center position-absolute">
									<h3>Our approach  <i className="fal fa-arrow-right"></i></h3>
								</div> 
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="ori-service-why-choose">
				<div className="row">
					<div className="col-lg-6">
						<div className="ori-service-why-choose-img">
							<Image width={100000} height={10000} className="w-full h-auto" src="/img/about/ser.png" alt=""/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="ori-service-why-choose-text">
							<div className="ori-inner-section-title">
								<span className="sub-title text-uppercase">Why choose us</span>
								<h2>Unlock Revenue Growth for Your Business
								</h2>
							</div>
							<div className="ori-service-why-choose-list-item ul-li-block">
								<ul>
									<li>High Standards</li>
									<li>Different Thinking</li>
									<li>Business Innovation</li>
									<li>Focus on People</li>
								</ul>
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
  <section id="ori-achivement-history" className="ori-achivement-history-section position-relative">
		<div className="container">
			<div className="ori-inner-section-title text-center">
				<span className="sub-title text-uppercase">
				WE PROUD THAT</span>
				<h2>Discover Our Achievement
				</h2>
			</div>
			<div className="ori-achivement-history-content">
				<div className="ori-achivement-history-item-wrapper position-relative">
					<div className="ori-achivement-history-item-area">
						<div className="ori-achivement-history-item pera-content position-relative">
							<div className="achive-year position-absolute">
								2018
							</div>
							<div className="achivement-text">
								<h3>Awwwards</h3>
								<p>Website of the day</p>
							</div>
							<div className="achivement-text">
								<h3>CSS Design Awards</h3>
								<p>Honorable mention</p>
							</div>
						</div>
					</div>
					<div className="ori-achivement-history-item-area">
						<div className="ori-achivement-history-item pera-content position-relative">
							<div className="achive-year position-absolute">
								2019
							</div>
							<div className="achivement-text">
								<h3>Awwwards</h3>
								<p>Mobile exelence</p>
								<p>Website of the day</p>
							</div>
							<div className="achivement-text">
								<h3>CSS Design Awards</h3>
								<p>Honorable mention</p>
							</div>
						</div>
					</div>
					<div className="ori-achivement-history-item-area">
						<div className="ori-achivement-history-item pera-content  position-relative">
							<div className="achive-year position-absolute">
								2020
							</div>
							<div className="achivement-text">
								<h3>Awwwards</h3>
								<p>Website of the day</p>
							</div>
							<div className="achivement-text">
								<h3>CSS Design Awards</h3>
								<p>Honorable mention</p>
							</div>
						</div>
					</div>
					<div className="ori-achivement-history-item-area">
						<div className="ori-achivement-history-item pera-content  position-relative">
							<div className="achive-year position-absolute">
								2021
							</div>
							<div className="achivement-text">
								<h3>Awwwards</h3>
								<p>Website of the day</p>
							</div>
							<div className="achivement-text">
								<h3>CSS Design Awards</h3>
								<p>Honorable mention</p>
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
    </div>
  );
}
