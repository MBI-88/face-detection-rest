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
            transition: { duration: 1.5 }
        }
    }
    const item2 = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 2 }
        }
    }
    const item3 = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 3 }
        }
    }
    const item4 = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 4 }
        }
    }
    const item5 = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 5 }
        }
    }
    const item6 = {
        hidden: {
            opacity: 0,
            x: -100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 6 }
        }
    }
    const item7 = {
        hidden: {
            opacity: 0,
            x: 100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 7 }
        }
    }


    return (
        <article className='background-header shadow'>
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
                                Intelligence
                            </motion.h1>
                        </motion.li>

                        <motion.li variants={item3} className="nav-item pt-5 text-center">
                            <motion.h1
                                className='fs-2'
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                Economic
                            </motion.h1>
                        </motion.li>

                        <motion.li variants={item4} className="nav-item text-center pt-2">
                            <motion.h1
                                className='fs-2'
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                Science
                            </motion.h1>
                        </motion.li>

                        <motion.li variants={item5} className="nav-item text-center pt-2">
                            <motion.h1
                                className='fs-2'
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                Health
                            </motion.h1>
                        </motion.li>

                        <motion.li variants={item6} className="nav-item text-center pt-2">
                            <motion.h1
                                className='fs-2'
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                Education
                            </motion.h1>
                        </motion.li>

                        <motion.li variants={item7} className="nav-item text-center pt-2">
                            <motion.h1
                                className='fs-2'
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                Culture
                            </motion.h1>
                        </motion.li>

                    </motion.ul>

                    <img src='/assets/recuento/header2.png' className=' img-fluid w-50' alt='...' />
                </div>

            </div>

        </article>
    );
};

export default Header;