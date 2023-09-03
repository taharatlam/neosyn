import Breadcrumbs from "../Layout/Breadcrum";
import Image from "next/image";
import ProgressCounter from "../ProgressCounter";

import Link from "next/link";


const Service = ({ data }) => {
  const { pageTitle, companyName } = data;
  const percentage = 66;
  return (
    <>
      <Breadcrumbs pageTitle={pageTitle} companyName={companyName} />
      <section
        id="ori-service-details"
        className="ori-service-details-section position-relative"
      >
        <div className="container">
          <div className="ori-service-details-content-wrapper">
            <div className="row">
              <div className="col-lg-8">
                <div className="ori-service-details-content">
                  <div className="ori-about-play-area position-relative">
                    <div className="ori-about-play-img">
                      <Image width={100000} height={10000} className="w-full h-auto" src="/img/about/serd.png" alt="" />
                    </div>
                    <div className="about-play-btn position-absolute">
                      <Link 
                        className="text-uppercase d-flex align-items-center justify-content-center"
                        href="#"
                      >
                        Play
                      </Link>
                    </div>
                  </div>
                  <div className="ori-service-details-text pera-content">
                    <h2>Description</h2>
                    <p>
                      UX design refers to the term “user experience design”,
                      while UI stands for “user interface design”. Both elements
                      are crucial to a product and work closely together. But
                      despite their professional relationship, the roles
                      themselves are quite different, referring to very
                      different aspects of the product development process and
                      the design discipline.
                    </p>
                    <p>
                      In relation to websites and apps, UI design considers the
                      look, feel, and interactivity of the product. It’s all
                      about making sure that the user interface of a product is
                      as intuitive as possible, and that means carefully
                      considering each and every visual, interactive element the
                      user might encounter.
                    </p>
                    <div className="ori-service-details-process ul-li-block">
                      <h2>Service Process</h2>
                      <div className="ori-service-process-item-wrap d-flex flex-wrap">
                        <div className="ori-service-process-item pera-content">
                          <h3>
                            <span>01</span> Creative Analysis{" "}
                          </h3>
                          <p>
                            Creative analysis is important. It is common for
                            marketers to measure campaign performance at a
                            superficial level. But to fully understand it,{" "}
                          </p>
                        </div>
                        <div className="ori-service-process-item pera-content">
                          <h3>
                            <span>02</span> Design & Scatches{" "}
                          </h3>
                          <p>
                            Creative analysis is important. It is common for
                            marketers to measure campaign performance at a
                            superficial level. But to fully understand it,{" "}
                          </p>
                        </div>
                        <div className="ori-service-process-item pera-content">
                          <h3>
                            <span>03</span> Prototype & Wireframing{" "}
                          </h3>
                          <p>
                            Creative analysis is important. It is common for
                            marketers to measure campaign performance at a
                            superficial level. But to fully understand it,{" "}
                          </p>
                        </div>
                        <div className="ori-service-process-item pera-content">
                          <h3>
                            <span>04</span> Delivery & Deploy{" "}
                          </h3>
                          <p>
                            Creative analysis is important. It is common for
                            marketers to measure campaign performance at a
                            superficial level. But to fully understand it,{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ori-service-details-outcome ul-li-block">
                      <h2>Service Outcome</h2>
                      <ul>
                        <li>
                          Excepteur sint occaecat cupidatat a deserunt mollit
                          anim id est laborum.{" "}
                        </li>
                        <li>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum.
                        </li>
                        <li>
                          accusantium doloremque laudantium, totam rem aperiam,
                          eaque ipsa quae ab illo
                        </li>
                        <li>
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo.
                        </li>
                        <li>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem.{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="ori-service-details-result">
                      <h2>Results</h2>
                      <div className="ori-service-details-result-item-wrap d-flex justify-content-between">
                        <div className="ori-about-circle-progress-item">
                          <div className="counter-boxed text-center headline position-relative">
                            {/* <div className="graph-outer">
                              <input
                                type="text"
                                className="dial"
                                data-fgColor="#FF7425"
                                data-bgColor="#fff"
                                data-width="180"
                                data-height="180"
                                data-linecap="round"
                                value="90"
                              />
                              <div className="inner-text count-box">
                                <span
                                  className="count-text"
                                  data-stop="90"
                                  data-speed="4500"
                                ></span>
                                %
                              </div>
                            </div> */}
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
                            {/* <div className="graph-outer">
                              <input
                                type="text"
                                className="dial"
                                data-fgColor="#FF7425"
                                data-bgColor="#fff"
                                data-width="180"
                                data-height="180"
                                data-linecap="round"
                                value="90"
                              />
                              <div className="inner-text count-box">
                                <span
                                  className="count-text"
                                  data-stop="90"
                                  data-speed="4500"
                                ></span>
                                %
                              </div>
                            </div> */}
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
                            {/* <div className="graph-outer">
                              <input
                                type="text"
                                className="dial"
                                data-fgColor="#FF7425"
                                data-bgColor="#fff"
                                data-width="180"
                                data-height="180"
                                data-linecap="round"
                                value="90"
                              />
                              <div className="inner-text count-box">
                                <span
                                  className="count-text"
                                  data-stop="90"
                                  data-speed="4500"
                                ></span>
                                %
                              </div>
                            </div> */}
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ori-service-details-sidebar-widget-area">
                  <div className="ori-service-details-widget ul-li-block">
                    <div className="category-widget">
                      <h3 className="widget-title">Services</h3>
                      <ul>
                        <li>
                          <Link href="#">
                            <span>01</span> Web Development
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>02</span> UI/UX Design
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>03</span> Digital Marketing
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>04</span> Product Design
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>05</span> Branding & Illustration
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>06</span> Mobile Solutions
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>07</span> App Development{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ori-service-details-widget ul-li-block">
                    <div className="quote-widget">
                      <h3 className="widget-title">Get A Quote</h3>
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Your First Name"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your Email"
                        />
                        <textarea
                          name="massege"
                          placeholder="Enter Your Comment"
                        ></textarea>
                        <button
                          className="ori-submit-btn1  text-uppercase"
                          type="submit"
                        >
                          submit now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="ori-service-details-widget ul-li-block">
                    <div className="company-profile-widget">
                      <h3 className="widget-title">Company Profile</h3>
                      <div className="profile-download-btn text-center text-uppercase">
                        <Link href="#">download PDF</Link>
                        <Link href="#">DOWNLOAD WORD FILE</Link>
                      </div>
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
    </>
  );
};

export default Service;
