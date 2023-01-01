import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc"
import './Article2.css'

const Article2 = () => {

  return (
    <section className="container mb-5">
      <motion.h1
        className="container-fluid fs-2 text-start pt-5 pb-3"
        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}>
        Google Translate

      </motion.h1>
      <motion.section
        className="container-fluid mt-5 mb-5"
        initial={{
          opacity: 0,
          y: 300
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <h3 className="fs-3 text-start pb-5">
          The Translation API provides a simple programmatic interface for translating an arbitrary
          string into any supported language using state-of-the-art Neural Machine Translation.
          It is highly responsive, so websites and applications can integrate with Translation API for fast,
          dynamic translation of source text from the source language to a target language (such as French to English).
          Language detection is also available in cases where the source language is unknown. The underlying technology
          is updated constantly to include improvements from Google research teams,
          which results in better translations and new languages and language pairs.
        </h3>

        <a href="https://translate.google.com/" className="nav-link">
          <motion.h3
            className="fs-3 text-start fw-bold"
            animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
            transition={{ duration: 0.5, repeat: Infinity, }}
          > Go Translate <FcGoogle />
          </motion.h3>
        </a>
      </motion.section>
    </section>

  );
};



export default Article2;