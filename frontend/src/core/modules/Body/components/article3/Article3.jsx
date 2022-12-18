import { motion } from "framer-motion";
import './Article3.css'

const Article3 = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.8
            }
        }
    }

    return (
        <article className="mt-5 mb-5 background">
            <section className="container text-center text-color pt-5">
                <motion.ul
                    variants={container} initial="hidden" animate="show"
                    className="p-3"
                >
                    <motion.li
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <h3 className="fs-4">
                            Currently, apart from the systems already in operation, new <br/>
                            developments based on the potential offered by AI in the collection and analysis of <br/>
                        </h3>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <h3 className="fs-4">
                            information on logistics, cybernetic activities, semi-autonomous vehicles and <br/>
                            freelancers, etc. and in the field of defense, equally, of many applications,<br/>
                        </h3>
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
                        <h3 className="fs-4">
                            where the war, as it is known, would be conducted practically without the element<br/>
                            man on the battlefields. <br/>
                        </h3>
                    </motion.li>

                </motion.ul>
            </section>

            <section className="container text-lg-start text-start text-color pt-5">
                <motion.ul variants={container} initial="hidden" animate="show" className="p-3">
                    <motion.li
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <h3 className="fs-4">
                            AI, as is well known, has already been used in military activities by United States. <br/>
                            United States in Iraq, Syria and elsewhere, and is applied almost daily in missions of <br/>
                        </h3>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <h3 className="fs-4">
                            information, many of which are unknown, since both those who exercise them <br/>
                            as an attack, like those who receive them and lend themselves to their defense, they prefer <br/>
                        </h3>
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
                        <h3 className="fs-4">
                            keep them in the most absolute reserve. To which is added the application of AI in <br/>
                            the domain of outer space, where not long ago Russia destroyed one of its <br/>
                        </h3>
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
                        <h3 className="fs-4">
                            satellites by other spacecraft <br/>
                        </h3>
                    </motion.li>

                </motion.ul>
            </section>

            <section className="container text-lg-end text-start text-color pt-5 pb-3">
                <motion.ul variants={container} initial="hidden" animate="show" className="p-3">
                    <motion.li
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <h3 className="fs-4">
                            Thus, the difficulty in the process of acquiring defense systems based on <br/>
                            AI, or in the development thereof, will determine the ability to respond to <br/>
                        </h3>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <h3 className="fs-4">
                            new security challenges that will occur in the 21st century; all without the <br/>
                            urgent need to provide commands and human structures in the FAS  <br/>
                        </h3>
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
                        <h3 className="fs-4">
                            themselves that are capable of understanding, analyzing and manipulating   <br/>
                            these new technologies, that may not be available for use at the time and  <br/>
                        </h3>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, y: 320 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }
                        }}
                        viewport={{ once: true }}
                    >
                        <h3 className="fs-4">
                            in the manner required by the course of events in a highly changing. <br/>
                        </h3>
                    </motion.li>

                </motion.ul>
            </section>

        </article>
    );
};
export default Article3;