import { motion } from "framer-motion";
import './Article4.css';
import { useState } from "react";


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Article4 = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    return (
        <article className="mt-5 mb-5 background-article">
            <motion.div
                className="d-lg-flex d-block gap-lg-4 p-4"
                initial={false}
                animate={
                    isLoaded && isInView
                        ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
            >
                <img className="img-fluid w-50 rounded-5"
                    src="assets/recuento/artificial-intelligence-3262753.png"
                    alt="Image..." loading="lazy" decoding="async" onLoad={() => setIsLoaded(true)} />
                <div className="card-body">
                    <motion.h1 className="card-title pb-2"
                        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    >
                        Face Recognition
                    </motion.h1>
                    <h3 className="card-text fs-5">
                        Facial recognition algorithms are getting better at recognizing faces in masks,
                        according to data published on Tuesday by the National Institute for Standards and Technology (NIST).
                        Drawing on independent testing of more than 150 separate facial recognition algorithms, the new report suggests
                        masks may not be as big a problem for facial recognition systems as initially thought.
                        Vendors voluntarily submit their facial recognition algorithms to NIST for testing as
                        part of the Facial Recognition Vendor Test (FRVT). The institute publishes results of
                        those tests on a rolling basis as each algorithm is submitted. When NIST first examined masks’
                        effect on facial recognition in July, it found that algorithms weren’t great at identifying faces with masks.
                        Unsurprisingly, it’s harder to recognize a face when the nose and mouth are covered.
                        <br />
                        But the pandemic has given developers plenty of time to focus on the mask problem, and NIST’s
                        data shows that facial recognition algorithms are getting better at working with masked faces.
                        Without masks, the best algorithms have a false match rate of roughly 0.3
                        percent — but that number still rises to 5 percent when high-coverage masks are worn.
                    </h3>

                </div>
            </motion.div>
        </article>
    )

}


export default Article4;