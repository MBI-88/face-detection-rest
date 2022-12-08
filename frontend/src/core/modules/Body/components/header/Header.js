import './Header.css'
import { motion } from 'framer-motion';


const Header = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 1
            }
        }
    }

    const item1 = {
        hidden: {
            opacity: 0,
            y: -20
        },
        show: {
            opacity: 1,
            y: 20,
            transition: { duration: 1 }
        }
    }
    const item2 = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        show: {
            opacity: 1,
            x: 15,
            transition: { duration: 2 }
        }
    }
    const item3 = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 6 }
        }
    }

    return (
        <article className='background-header mb-5 shadow'>
            <div className=' d-flex flex-row align-items-center'>
                <img src='/assets/recuento/header.png' className=' img-fluid w-25' alt='...' loading='lazy' />
                <div className='image-2'>
                    <motion.ul variants={container} initial="hidden" animate="show" className='text-center'>
                        <motion.li
                            className=' nav-item text-center p-2' variants={item1}>
                            <motion.h1 className='fs-1'
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}>
                                Artifitial
                            </motion.h1>
                        </motion.li>

                        <motion.li
                            className='nav-item text-center' variants={item2}>
                            <motion.h1 className='fs-1'
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}>
                                Intelligent
                            </motion.h1>
                        </motion.li>

                        <motion.li variants={item3} className="nav-item text-center pt-5">
                            <motion.section className=' pt-5'>
                                <p className='text-header fs-4'>
                                    
                                </p>
                            </motion.section>
                        </motion.li>

                    </motion.ul>

                    <img src='/assets/recuento/header2.jpg' className=' img-fluid' alt='...' />
                </div>

            </div>

        </article>
    );
};

export default Header;