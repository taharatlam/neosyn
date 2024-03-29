import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  return (
    <div>
      {/* sidebar */}
      {/* <div className="xs-sidebar-group info-group">
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
              <Link href="#" className="close-side-widget">
                X
              </Link>
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
      </div> */}
    </div>
  );
}

export default Sidebar;
