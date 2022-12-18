import './Footer.css';
import { BsFacebook, BsMicrosoft, BsApple, BsLinkedin } from 'react-icons/bs';
import { FaGooglePlusG } from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';
import { HiExternalLink } from 'react-icons/hi';
import { DiGithubAlt } from 'react-icons/di'
import { motion } from 'framer-motion';
import { MdAlternateEmail } from 'react-icons/md'
import { ImEye } from 'react-icons/im'


const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
      }
    }
  }

  return (
    <footer className='background-footer p-0'>
      <section className='container pt-5 pb-5'>
        <article className='row justify-content-center align-content-center'>
          <div className='col-auto'>
            <motion.ul initial="hidden" animate="show" variants={container}
              className='d-flex flex-row align-items-center gap-5'>
              <motion.li
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 1 }
                }}
                viewport={{ once: true }}
                className='nav-item mb-4'>
                <motion.a
                  whileHover={{ scale: [null, 1.5] }}
                  href='https://ai.facebook.com/blog/?page=1'
                  className='nav-link'
                  data-bs-toogle="tooltip"
                  title='Facebook'
                >
                  <BsFacebook className='social-link' />
                </motion.a>
              </motion.li>
              <motion.li
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: .8 }
                }}
                viewport={{ once: true }}
                className='nav-item mb-4'>
                <motion.a
                  whileHover={{ scale: [null, 1.5] }}
                  href='https://cloud.google.com/products/ai?utm_source=google&utm_medium=cpc&utm_campaign=latam-LATAM-all-es-dr-BKWS-all-all-trial-e-dr-1009897-LUAC0014885&utm_content=text-ad-none-any-DEV_c-CRE_547968512283-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20AI%20%26%20ML_General-KWID_43700066587075174-kwd-302146823909&utm_term=KW_google%20ai-ST_Google%20AI&gclid=CjwKCAiAkfucBhBBEiwAFjbkrwHPds4EbSCooTML6DyQ7rNBl9aKrTG7JvcA3TBgzkB92CXANIGFrBoCsssQAvD_BwE&gclsrc=aw.ds'
                  className='nav-link'
                  data-bs-toogle="tooltip"
                  title='Google'
                >
                  <FaGooglePlusG className='social-link' />

                </motion.a>
              </motion.li>
              <motion.li
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: .8 }
                }}
                viewport={{ once: true }}
                className='nav-item mb-4'>
                <motion.a
                  whileHover={{ scale: [null, 1.5] }}
                  href='https://www.microsoft.com/en-us/ai?activetab=pivot1%3aprimaryr6'
                  className='nav-link'
                  data-bs-toogle="tooltip"
                  title='Microsoft'
                >
                  <BsMicrosoft className='social-link' />
                </motion.a>

              </motion.li>
            </motion.ul>
          </div>

        </article>

        <article className='row justify-content-center align-content-center'>
          <div className='col-auto'>
            <motion.ul
              initial="hidden" animate="show" variants={container}
              className='d-flex flex-row align-items-center gap-5'>
              <motion.li
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: .8 }
                }}
                viewport={{ once: true }}
                className='nav-item mb-4'>
                <motion.a
                  whileHover={{ scale: [null, 1.5] }}
                  href='https://www.oracle.com/artificial-intelligence/'
                  className='nav-link'
                  data-bs-toogle="tooltip"
                  title='Oracle'
                >
                  <GrOracle className='social-link' />
                </motion.a>

              </motion.li>

              <motion.li
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: .8 }
                }}
                viewport={{ once: true }}
                className='nav-item mb-4'>
                <motion.a
                  whileHover={{ scale: [null, 1.5] }}
                  href='https://www.nvidia.com/es-la/research/ai-playground/'
                  className='nav-link'
                  data-bs-toogle="tooltip"
                  title='Nvidia'
                >
                  <ImEye className='social-link' />
                </motion.a>

              </motion.li>

              <motion.li
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: .8 }
                }}
                viewport={{ once: true }}
                className=' nav-item mb-4'>
                <motion.a
                  whileHover={{ scale: [null, 1.5] }}
                  href='https://www.apple.com/careers/us/machine-learning-and-ai.html'
                  className='nav-link'
                  data-bs-toogle="tooltip"
                  title='Apple'
                >
                  <BsApple className='social-link' />
                </motion.a>
              </motion.li>
            </motion.ul>
          </div>

        </article>
      </section>

      <section className='p-lg-5 p-sm-1 text-center '>
        <div className='d-inline-flex gap-lg-2 align-content-center flex-row'>
          <h1 className='develop-name'>MBI | </h1>
          <motion.ul variants={container} initial="hidden" animate="show"
            className='d-flex ps-0 flex-row align-items-center'>
            <motion.li
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: .8 }
              }}
              viewport={{ once: true }}
              className='nav-item ps-lg-5 ps-3'>
              <motion.a
                whileHover={{ scale: [null, 1.5] }}
                href='https://www.facebook.com/IngMBI8807/'
                className='nav-link'
                data-bs-toogle="tooltip"
                title='MBI Facebook link'
              >
                <BsFacebook className='develop-style' />
              </motion.a>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: .8 }
              }}
              viewport={{ once: true }}
              className='nav-item ps-lg-5 ps-3'>
              <motion.a
                whileHover={{ scale: [null, 1.5] }}
                href='https://www.linkedin.com/in/mbi-bi/'
                className='nav-link'
                data-bs-toogle="tooltip"
                title='MBI Linkedin link'
              >
                <BsLinkedin className='develop-style' />
              </motion.a>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: .8 }
              }}
              viewport={{ once: true }}
              className='nav-item ps-lg-5 ps-3'>
              <motion.a
                whileHover={{ scale: [null, 1.5] }}
                href='https://github.com/MBI-88/'
                className='nav-link'
                data-bs-toogle="tooltip"
                title='MBI Github link'
              >
                <DiGithubAlt className='develop-style' />
              </motion.a>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: .8 }
              }}
              viewport={{ once: true }}
              className='nav-item ps-lg-5 ps-3'>
              <motion.a
                whileHover={{ scale: [null, 1.5] }}
                href='https://porfoliombi.netlify.app/'
                className='nav-link'
                data-bs-toogle="tooltip"
                title='MBI Porfolio link'
              >
                <HiExternalLink className='develop-style' />
              </motion.a>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: .8 }
              }}
              viewport={{ once: true }}
              className='nav-item ps-lg-5 ps-3'>
              <motion.a
                className='nav-link'
                whileHover={{ scale: [null, 1.5] }}
                href='mailto:ingmbi8807@gmail.com'
                data-bs-toogle="tooltip"
                title='MBI Gmail link'
              >
                <MdAlternateEmail className='develop-style' />
              </motion.a>
            </motion.li>
          </motion.ul>

        </div>
      </section>

    </footer>
  )
}







export default Footer
