import { services } from "@/constant";
import Link from "next/link";

const Header = (props) => {
  const servicesType = [...services.serviceType];
  return (
    <>
      <header id="ori-header" className="ori-header-section header-style-one">
        <div className="ori-header-content-area">
          <div className="ori-header-content d-flex align-items-center justify-content-between">
            <div className="brand-logo">
              <a href="#">
                <img src="/img/logo/logo1.png" alt="" />
              </a>
            </div>
            <div className="ori-main-navigation-area">
              <div className="ori-main-navigation clearfix ul-li">
                <ul id="main-nav" className="nav navbar-nav clearfix">
                  <li className="dropdown ori-megamenu">
                    <Link href="/">Home</Link>
                  </li>

                  <li className="dropdown">
                    <a href="#">About</a>
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
                <button className="search-box-outer">
                  <i className="fal fa-search"></i>
                </button>
              </div>
              <div className="ori-sidenav-btn navSidebar-button">
                <button>
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="mobile_menu position-relative">
            <div className="mobile_menu_button open_mobile_menu">
              <i className="fal fa-bars"></i>
            </div>
            <div className="mobile_menu_wrap">
              <div className="mobile_menu_overlay open_mobile_menu"></div>
              <div className="mobile_menu_content">
                <div className="mobile_menu_close open_mobile_menu">
                  <i className="fal fa-times"></i>
                </div>
                <div className="m-brand-logo">
                  <a href="%21.html#">
                    <img src="/img/logo/logo1.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* search */}
      {/* <div className="search-popup">
        <button className="close-search style-two">
          <span className="fal fa-times"></span>
        </button>
        <button className="close-search">
          <span className="fa fa-arrow-up"></span>
        </button>
        <div
        >
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
        </div>
      </div> */}
    </>
  );
};

export default Header;
