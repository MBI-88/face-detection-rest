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
        <article className='mt-5 mb-5 news-bg'>
            <section className='container p-3 text-color'>
                <motion.h1
                    className='fs-1 text-start'
                    animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                >
                    News
                </motion.h1>

                <motion.ul variants={container} initial="hidden" animate="show">
                    <motion.li
                        className='pb-3'
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
                                <motion.img 
                                    whileHover={{ 
                                        scale: [null,1.8],
                                        x:150,
                                       
                                     }}
                                    transition={{ duration: 0.3 }}
                                    src='assets/recuento/cybor-woman.png' className='img-fluid rounded-3'
                                    loading='lazy' decoding='async' alt='...' />
                            </div>
                            <div>
                                <h3 className='fs-4'>
                                    From the Drudge Report to The New York Times, sex robots have quickly
                                    become a topic of interest when it comes to addressing the future of
                                    sex and relationships. Beyond the headlines, there are several companies
                                    dedicated to developing robots designed to provide humans with companionship and sexual pleasure,
                                    with a few already on the market.
                                    Unlike the sex dolls and toys that are usually found in offbeat stores and hidden in closets,
                                    sexbots could become popular. A 2017 poll suggested that nearly half of Americans thought having
                                    sex with robots would become commonplace in the next 50 years.
                                </h3>
                            </div>
                        </div>
                    </motion.li>

                    <motion.li
                        className='pb-3'
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
                                <motion.img 
                                    whileHover={{
                                        scale: [null, 1.8],
                                        x: 150,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    src='assets/recuento/cybor-running.png' className='img-fluid rounded-3'
                                    loading='lazy' decoding='async' alt='...' />
                            </div>
                            <div>
                                <h3 className='fs-4'>
                                    Cassie has set a Guinness World Record by managing to run the 100-meter dash. In this case, she is not a person,
                                    but a bipedal robot developed by the Oregon
                                    State University College of Engineering and produced by OSU's Agility Robotics company.
                                    The robot has set the historic time of 24.73 seconds to cover the distance (at an average speed of 4 m/s or about 14.4 kilometers per hour),
                                    during a test that was carried out at the OSU Whyte Athletic Center, leaving and returning to a standing position after running, without falling
                                    in the process. This is not the first achievement for Cassie, who had already managed to cover 5 kilometers in just over 53 minutes in 2021.
                                </h3>
                            </div>
                        </div>

                    </motion.li>

                    <motion.li
                        className='pb-3'
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
                                <motion.img 
                                    whileHover={{
                                        scale: [null, 1.8],
                                        x: 150,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    src='assets/recuento/robot-reading.png' className='img-fluid rounded-3'
                                    loading='lazy' decoding='async' alt='...' />
                            </div>
                            <div>
                                <h3 className='fs-4'>
                                    Google shows six new features for Android on these dates, among which the emoji 
                                    mixer from the keyboard and this new tool to bring more audiobooks to Android stand out: “Google Play, in 
                                    collaboration with US publishers. In the US and the UK, it will use auto-generated narrators so books 
                                    without audio versions can be narrated, which means you'll have more audio titles to choose from on the Play 
                                    Store. The tool is currently in beta, but will roll out to all publishers in early 2021."
                                </h3>
                            </div>
                        </div>
                    </motion.li>

                    <motion.li
                        className='pb-3'
                        initial={{ opacity: 0, y: 420 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <div className='d-lg-flex  d-block align-items-center'>
                            <div className='p-5'>
                                <motion.img 
                                    whileHover={{
                                        scale: [null, 1.8],
                                        x: 150,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    src='assets/recuento/robot-white.png' className='img-fluid rounded-3'
                                    loading='lazy' decoding='async' alt='...' />
                            </div>
                            <div>
                                <h3 className='fs-4'>
                                    The digital revolution has already changed how people live, work,
                                    and communicate. And it’s only just getting started. But the same technologies
                                    that have the potential to help billions of people live happier, healthier, and
                                    more productive lives are also creating new challenges for citizens and governments
                                    around the world. From election meddling to data breaches and cyberattacks, recent events
                                    have shown that technology is changing how we think about privacy, national security, and
                                    maybe even democracy itself. In this project, we examine challenges in five key areas that
                                    will shape the future of the digital age: justice system, impact on democracy, global security
                                    and international conflict, the impact of automations and AI on the jobs marketplace,
                                    identity, and privacy. Explore provocative and through-provoking topics on how technology impacts our lives
                                </h3>
                            </div>
                        </div>
                    </motion.li>
                </motion.ul>
            </section>

        </article>
    );
};



export default Article5;