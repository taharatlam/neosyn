import Layout from "../component/Layout/Layout";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  const {pathname} = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <Layout>
          <Component {...pageProps} />
          <motion.div
          className="slide-in"
          initialValue={{scaleY:0}}
          animate={{scaleY:0}}
          exit={{scaleY:1}}
          transition={{duration:1,ease:[0.22,1,0.36,1]}}
          ></motion.div>
          <motion.div 
          className="slide-out"
          initialValue={{scaleY:1}}
          animate={{scaleY:0}}
          exit={{scaleY:0}}
          transition={{duration:1,ease:[0.22,1,0.36,1]}}
          ></motion.div>
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}
