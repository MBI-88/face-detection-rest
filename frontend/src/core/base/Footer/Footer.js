import './Footer.css';
import { BsFacebook, BsMicrosoft, BsApple, BsLinkedin } from 'react-icons/bs';
import { FaGooglePlusG } from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';
import { SiNvidia } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import { DiGithubAlt } from 'react-icons/di'
import { SiGmail } from 'react-icons/si'


const Footer = () => (

  <footer className='background-footer'>
    <section className='container p-5'>
      <div className='d-flex gap-4 gap-lg-5 flex-row'>
        <article className='ps-lg-5 ps-3'>
          <ul>
            <li className='nav-item mb-4'>
              <a href='#' className='nav-link'>
                <BsFacebook className='social-link' />
              </a>
            </li>
            <li className='nav-item mb-4'>
              <a href='#' className='nav-link'>
                <FaGooglePlusG className='social-link' />

              </a>
            </li>
            <li className='nav-item mb-4'>
              <a href='#' className='nav-link'>
                <BsMicrosoft className='social-link' />
              </a>

            </li>

          </ul>
        </article>

        <article className='ps-lg-5 ps-3'>
          <ul>
            <li className='nav-item mb-4'>
              <a href='#' className='nav-link'>
                <GrOracle className='social-link' />
              </a>

            </li>

            <li className='nav-item mb-4'>
              <a href='#' className='nav-link'>
                <SiNvidia className='social-link' />
              </a>

            </li>

            <li className=' nav-item mb-4'>
              <a href='#' className='nav-link'>
                <BsApple className='social-link' />
              </a>
            </li>
          </ul>
        </article>
      </div>

    </section>

    <section className='p-lg-5 p-sm-1 text-center '>
      <div className='d-inline-flex gap-lg-2 align-content-center flex-row'>
        <h1 className='develop-name'>MBI | </h1>
        <ul className='d-flex ps-0 flex-row align-items-center'>
          <li className='nav-item ps-lg-5 ps-3'>
            <a href='https://www.facebook.com/IngMBI8807/' className='nav-link'>
              <BsFacebook className='develop-style' />
            </a>
          </li>
          <li className='nav-item ps-lg-5 ps-3'>
            <a href='https://www.linkedin.com/in/mbi-bi/' className='nav-link'>
              <BsLinkedin className='develop-style' />
            </a>
          </li>
          <li className='nav-item ps-lg-5 ps-3'>
            <a href='https://github.com/MBI-88/' className='nav-link'>
              <DiGithubAlt className='develop-style' />
            </a>
          </li>
          <li className='nav-item ps-lg-5 ps-3'>
            <a href='https://porfoliombi.netlify.app/' className='nav-link'>
              <HiExternalLink className='develop-style' />
            </a>
          </li>
          <li className='nav-item ps-lg-5 ps-3'>
            <a href='mailto:ingmbi8807@gmail.com'>
              <SiGmail className='develop-style' />
            </a>
          </li>
        </ul>

      </div>
    </section>

  </footer>
)




export default Footer
