// import MainNavigation from './MainNavigation';
// import classNamees from './Layout.module.css';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="ori-footer" className="ori-footer-section footer-style-one">
      <div className="container">
        <div className="ori-footer-title text-center text-uppercase">
          <h2>
            Get In <span>Touch</span> <FontAwesomeIcon icon={faArrowRight} />
          </h2>
        </div>
        <div className="ori-footer-widget-wrapper">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="ori-footer-widget">
                <div className="logo-widget">
                  <Link href="#">
                    <Image width={100000} height={10000} className="w-full h-auto" src="/img/logo/logo1.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ori-footer-widget">
                <div className="menu-location-widget ul-li-block">
                  <h2 className="widget-title text-uppercase">Our Location</h2>
                  <ul>
                    <li>
                      <Link href="#">London</Link>
                    </li>
                    <li>
                      <Link href="#">America</Link>
                    </li>
                    <li>
                      <Link href="#">Constarica</Link>
                    </li>
                    <li>
                      <Link href="#">Germany</Link>
                    </li>
                    <li>
                      <Link href="#">India</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ori-footer-widget">
                <div className="contact-widget ul-li-block">
                  <h2 className="widget-title text-uppercase">Contact info</h2>
                  <div className="contact-info">
                    <span>ECA-135/A, 25/2 Barlin, Germany </span>
                    <span>(+250)155 69569 365</span>
                    <Link href="#">support@orixy.com</Link>
                    <span>Office Hours: 8AM - 11PM</span>
                    <span>Sunday - Wekend Day</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ori-footer-widget">
                <div className="newslatter-widget ul-li-block">
                  <h2 className="widget-title text-uppercase">Newslatter</h2>
                  <div className="newslatter-form">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter mail"
                        defaultValue="your email"
                      />
                      <button type="submit">
                        Subscribe <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ori-footer-copyright d-flex justify-content-between">
          <div className="ori-copyright-text">
            © 2022 All Right Recived - Orixy - Themexriver
          </div>
          <div className="ori-copyright-social">
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
    </footer>
  );
}

export default Footer;
