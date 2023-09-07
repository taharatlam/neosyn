'use client'
import { services } from "@/constant";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from 'styled-components';
import CustomCursor from "../CustomCursor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const servicesType = [...services.serviceType];
  const [isActive, setIsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  useEffect(() => {
    if (isSearchActive) {
      document.body.classList.add('search-active');
    } else {
      document.body.classList.remove('search-active');
    }

    

    return () => {
      document.body.classList.remove('search-active');
    };
  }, [isSearchActive]);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  
  return (
    <>
    <CustomCursor />
    
      <header id="ori-header" className={`ori-header-section header-style-one ${isSticky ? 'sticky-on' : ''}`}>
        <div className="ori-header-content-area">
          <div className="ori-header-content d-flex align-items-center justify-content-between">
            <div className="brand-logo">
              <Link href="/">
                <Image width={100000} height={10000} className="w-full h-auto" src="/img/logo/logo1.png" alt="" />
              </Link>
            </div>
            <div className="ori-main-navigation-area">
              <div className="ori-main-navigation clearfix ul-li">
                <ul id="main-nav" className="nav navbar-nav clearfix">
                  <li className="dropdown ori-megamenu">
                    <Link href="/">Home1</Link>
                  </li>

                  <li className="dropdown">
                    <Link href="#">About</Link>
                    <ul className="dropdown-menu clearfix">
                      <li>
                        <Link href="/our-team">Our Team</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/pricing">Pricing</Link>
                      </li>
                      <li>
                        <Link href="/mission">Mission</Link>
                      </li>
                    </ul>
                  </li>
                  {/* services to be continued */}
                  <li className="dropdown">
                    <Link href="/services">Services</Link>

                    <ul className="dropdown-menu clearfix">

                      {servicesType &&
                        servicesType.map((item, index) => {
                          return <li key={index}>
                            <Link href={item?.path}>{item?.title}</Link>
                          </li>;
                        })}
                    </ul>
                  </li>

                  <li>
                    <Link href="/portfolio">Portfolio </Link>
                  </li>
                  <li>
                    <Link href="/blog">Blogs </Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ori-header-sidebar-search d-flex align-items-center">
              <div className="ori-search-btn">
                <button className="search-box-outer" onClick={()=>setIsSearchActive(true)}>
                  {/* <i className="fal fa-search"></i> */}
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
              </div>
              <div className="ori-sidenav-btn navSidebar-button">
                <button onClick={()=>setIsActive(true)}>
                  {/* <i className="fal fa-bars"></i> */}
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            </div>
          </div>
          <div className="mobile_menu position-relative">
            <div className="mobile_menu_button open_mobile_menu">
              {/* <i className="fal fa-bars"></i> */}
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={`mobile_menu_wrap ${isMobileMenu&&"mobile_menu_on"}`}>
              <div className={`mobile_menu_overlay open_mobile_menu`}></div>
              <div className="mobile_menu_content">
                <div className="mobile_menu_close open_mobile_menu">
                  {/* <i className="fal fa-times"></i> */}
                  <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="m-brand-logo">
                  <Link href="%21.html#">
                    <Image width={100000} height={10000} className="w-full h-auto" src="/img/logo/logo1.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* search */}
      <div className="search-popup">
        <button className="close-search style-two" onClick={()=>setIsSearchActive(false)}>
          {/* <span className="fal fa-times"></span> */}
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button className="close-search" onClick={()=>setIsSearchActive(false)}>
          <span className="fa fa-arrow-up"></span>
        </button>
        <form>
          <div className="form-group">
            <input
              type="search"
              name="search-field"
              defaultValue=""
              placeholder="Search Here"
              required=""
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>

      <div className={`xs-sidebar-group info-group ${isActive?'isActive':''}`}>
        <div className="xs-overlay xs-bg-black">
          <div className="row loader-area">
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
          </div>
        </div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <button className="close-side-widget" onClick={()=>setIsActive(false)}>
                X
              </button>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents headline pera-content">
                <div className="content-inner">
                  <div className="logo">
                    <Link href="index-1.html">
                      <Image width={100000} height={10000} className="w-full h-auto" src="/img/logo/logo1.png" alt="" />
                    </Link>
                  </div>
                  <div className="content-box">
                    <h5>About Us</h5>
                    <p className="text">
                      The argument in favor of using filler text goes something
                      like this: If you use real content in the Consulting
                      Process, anytime you reach a review point you’ll end up
                      reviewing and negotiating the content itself and not the
                      design.
                    </p>
                  </div>
                  <div className="gallery-box ul-li">
                    <h5>Gallery</h5>
                    <ul className="zoom-gallery">
                      <li>
                        <Link 
                          href="/img/blog/blg-f5.png"
                          data-source="/img/blog/blg-f5.png"
                        >
                          <Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl1.png" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/img/blog/blg-f5.png"
                          data-source="/img/blog/blg-f5.png"
                        >
                          <Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl2.png" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/img/blog/blg-f5.png"
                          data-source="/img/blog/blg-f5.png"
                        >
                          <Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl3.png" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/img/blog/blg-f5.png"
                          data-source="/img/blog/blg-f5.png"
                        >
                          <Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl4.png" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/img/blog/blg-f5.png"
                          data-source="/img/blog/blg-f5.png"
                        >
                          <Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl5.png" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/img/blog/blg-f5.png"
                          data-source="/img/blog/blg-f5.png"
                        >
                          <Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl6.png" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="content-box">
                    <h5>Social Account</h5>
                    <ul className="social-box">
                      <li>
                        <Link 
                          href="https://www.facebook.com/"
                          className="fab fa-facebook-f"
                        ></Link>
                      </li>
                      <li>
                        <Link 
                          href="https://www.twitter.com/"
                          className="fab fa-twitter"
                        ></Link>
                      </li>
                      <li>
                        <Link 
                          href="https://dribbble.com/"
                          className="fab fa-dribbble"
                        ></Link>
                      </li>
                      <li>
                        <Link 
                          href="https://www.linkedin.com/"
                          className="fab fa-linkedin"
                        ></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
