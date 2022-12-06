import './Footer.css';
import { BsFacebook, BsMicrosoft, BsApple } from 'react-icons/bs';
import { FaGooglePlusG } from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';
import { SiNvidia } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';


const Footer = () => {
  const facebookIcoStyle = {

  }
  const googleIcoStyle = {}
  const microsoftIcoStyle = {}
  const oracleIcoStyle = {}
  const appleIcoStyle = {}
  const nvidiaIcoStyle = {}

  return (
    <footer className='background-footer'>
      <section className='container'>
        <div className='container d-flex g-sm-1 g-lg-5'>
          <article className='container p-5 text-start'>
            <ul>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <BsFacebook style={facebookIcoStyle} />
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <FaGooglePlusG />

                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <BsMicrosoft />
                </a>

              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <GrOracle />
                </a>

              </li>

              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <SiNvidia />
                </a>

              </li>

              <li className=' nav-item'>
                <a href='#' className='nav-link'>
                  <BsApple />
                </a>

              </li>
            </ul>
          </article>

          <article className='container p-5 text-end'>
            <h1>API</h1>
          </article>
        </div>

      </section>

      <section className='container p-5 text-center'>
        <h1>MBIMBIMBIMB</h1>
      </section>

    </footer>
  )
}

export default Footer
