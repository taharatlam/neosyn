import { Html, Head, Main, NextScript } from "next/document";
import script from "next/script";
import Link from "next/link";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <title>Digital Studio - Orixy </title> */}
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Orixy - Digital Agency HTML Template
	"
        />
        <meta
          name="keywords"
          content="advertising, advertising agency, agency, agency theme, business, creative agency, digital, digital advertising, digital agency, digital marketing, digital marketing agency, digital theme, marketing, startup"
        />
        <meta name="author" content="Themexriver" />
        <meta name="Viewport" content="width=device-width, initial-scale=1"/>
        <link
          rel="shortcut icon"
          href="/img/logo/ficon.png"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/fontawesome-all.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/video.min.css" />
        <link rel="stylesheet" href="css/slick-theme.css" />
        <link rel="stylesheet" href="css/slick.css" />
        <link rel="stylesheet" href="css/global.css" />
        <link rel="stylesheet" href="css/style.css" />
      </Head>
      <body className="ori-digital-studio">
      {/* <div id="preloader"></div> */}
        <div className="up">
          <Link href="#" className="scrollup text-center">
            <i className="fas fa-chevron-up"></i>
          </Link>
        </div>
        <div className="cursor"></div>
        <div>
        <Main />
        <NextScript />
        </div>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/jquery-ui.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/appear.js"></script>
        <script src="/js/slick.js"></script>
        <script src="/js/twin.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/knob.js"></script>
        <script src="/js/jquery.filterizr.js"></script>
        <script src="/js/imagesloaded.pkgd.min.js"></script>
        <script src="/js/rbtools.min.js"></script>
        <script src="/js/rs6.min.js"></script>
        <script src="/js/jarallax.js"></script>
        <script src="/js/jquery.inputarrow.js"></script>
        <script src="/js/swiper.min.js"></script>
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/waypoints.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/jquery.marquee.min.js"></script>
        <script src="/js/script.js"></script>
      </body>
    </Html>
  );
}
