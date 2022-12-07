import './Header.css'
import { motion } from 'framer-motion';


const Header = () => {


    return (
        <article className='background-header mb-5 shadow'>
            <div className=' d-flex flex-row align-items-center'>
                <div className='container ps-4'>
                    <img src='/assets/recuento/header.png' className=' img-fluid ' alt='...' loading='lazy' />
                </div>

                <div className='image-2'>
                    <motion.ul>
                        <motion.li>
                            <motion.h1 className='text-center fs-1 pt-4'
                            animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                Artifitial
                            </motion.h1>
                        </motion.li>

                        <motion.li>
                        <motion.h1 className='text-center fs-1 pt-1'
                            animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                Intelligent
                            </motion.h1>
                        </motion.li>

                        <motion.li>
                            <motion.section>

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