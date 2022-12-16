import { motion } from 'framer-motion';
import './Article5.css'



const Article5 = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 1,
            }
        }
    }

    return (
        <article className='mt-5 mb-5'>
            <section className='container p-3'>
                <motion.h1
                    className='fs-1 text-start'
                    animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                >
                    News
                </motion.h1>

                <motion.ul variants={container} initial="hidden" animate="show">
                    <motion.li
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                    <div className='d-lg-flex  d-block align-items-center'>
                        <div className='p-5'>
                            <img src='assets/recuento/cybor-woman.png' className='img-fluid rounded-3 w-25'
                                    loading='lazy' decoding='async' alt='...'/>
                        </div>
                        <div>
                            <h3>Cybor woman</h3>
                        </div>
                    </div>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, y: 300 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <div className='d-lg-flex  d-block align-items-center'>
                            <div className='p-5'>
                                <img src='assets/recuento/android-running.png' className='img-fluid rounded-3 w-50'
                                    loading='lazy' decoding='async' alt='...'/>
                            </div>
                            <div>
                                <h3>Android running</h3>
                            </div>
                        </div>

                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, y: 400 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <div className='d-lg-flex  d-block align-items-center'>
                            <div className='p-5'>
                                <img src='assets/recuento/android-reading.png' className='img-fluid rounded-3 w-50'
                                    loading='lazy' decoding='async' alt='...'/>
                            </div>
                            <div>
                                <h3>Android reading</h3>
                            </div>
                        </div>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, y: 500 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <div className='d-lg-flex  d-block align-items-center'>
                            <div className='p-5'>
                                <img src='assets/recuento/robot-white.png' className='img-fluid rounded-3 w-25'
                                    loading='lazy' decoding='async' alt='...' />
                            </div>
                            <div>
                                <h3>Robot white</h3>
                            </div>
                        </div>
                    </motion.li>
                </motion.ul>
            </section>

        </article>
    );
};



export default Article5;