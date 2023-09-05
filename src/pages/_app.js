import Layout from "../component/Layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import '../../public/css/bootstrap.min.css';
// import '../../public/css/fontawesome.css';
// import '../../public/css/jquery-ui.css';
import '../../public/css/slick-theme.css';
// import '../../public/css/video.min.css';
import '../../public/css/swiper.css';
import '../../public/css/slick.css';
// import '../../public/css/rs6.css';
import '../../public/css/animate.css';
import '../../public/css/global.css';
import '../../public/css/style.css';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;


export default function App({ Component, pageProps }) {
  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wow.js') : null
  useEffect(()=>{
    new WOW().init()
  },[WOW])
  const {pathname} = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <Layout>
          <Component {...pageProps} />
          <motion.div id="preloader"
          initialvalue={{opacity:1,display: "block"}}
          animate={{opacity:0,transitionEnd: { display: "none" },transition: { delay: 1 } }}
          exit={{opacity:0}}
          transition={{duration:1}}>
          </motion.div>
          {/* <motion.div
          className="slide-in"
          initialvalue={{scaleY:0}}
          animate={{scaleY:0}}
          exit={{scaleY:1}}
          transition={{duration:1,ease:[0.22,1,0.36,1]}}
          ></motion.div>
          <motion.div 
          className="slide-out"
          initialvalue={{scaleY:1}}
          animate={{scaleY:0}}
          exit={{scaleY:0}}
          transition={{duration:1,ease:[0.22,1,0.36,1]}}
          ></motion.div> */}
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}
