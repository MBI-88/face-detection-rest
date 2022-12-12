import './Article1.css'
import { motion } from 'framer-motion';


const Article1 = () => (
    <article className='container-fluid text-start mt-5 mb-5'>
        <motion.h1
            className="text-start fs-1 mb-5"
            animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        >TOP AI Enterprises</motion.h1>

        <div className='rounded-3 shadow d-lg-flex d-md-block d-sm-block gap-5 flex-lg-row align-items-center mt-5 mb-5 p-5 facebook-bg'>
            <motion.img
                src='/assets/enterprises/Facebook.png'
                className=' img-fluid w-50'
                initial={{
                    opacity: 0,
                    x: -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            />

            <motion.h4
                className=' fs-4 pt-3'
                initial={{
                    opacity: 0,
                    x: 50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            >
                TextStyleBrush is the name given to the new Facebook AI project.
                It is an artificial intelligence that can copy the style of a text found in a photograph.
                What undoubtedly makes it impressive compared to other similar artificial intelligences is the small amount
                of data required for this: just a few letters from a word.
                That is, a theoretically could write his name and the AI would know how to imitate his writing.

                Facebook explains that while most AI systems can do this with specific tasks,
                in this case TextStyleBrush is flexible enough to understand all kinds of fonts in real environments.
                In other words, it understands without apparent problems texts with all types of calligraphy, applied styles, thicknesses, colors,
                shaded or rotated.

                They indicate that to achieve this, their artificial intelligence tries to understand the typography that it analyzes from a different point of view.
                more holistic and taking into account how it is in its fullness. AIs that imitate writing generally look for specific parameters
                like serifs or thickness, not in this case, which tries to understand writing more as a whole.

            </motion.h4>

        </div>

        <div className=' rounded-3 shadow d-lg-flex d-md-block d-sm-block gap-5 flex-lg-row align-items-center mt-5 mb-5 p-5'>

            <motion.img
                src='assets/enterprises/Google.png'
                className=' img-fluid w-50'
                initial={{
                    opacity: 0,
                    x: -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            />



            <motion.h4
                className=' fs-4 pt-3'
                initial={{
                    opacity: 0,
                    x: 50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            >
                BERT, in a nutshell, is the next step for Google Search. Using artificial intelligence,
                Google wants its search engine to not only recognize the key terms of a search, but also to understand their context.
                Because the word "change" has different meanings and changing chrome is not the same as changing a wheel.
                This technology, as Pandu Nayak, VP of Google Search, has explained to us, will arrive throughout the week in more than 70 languages,
                Spanish included, so let's see how it works and what it consists of.

            </motion.h4>

        </div>

        <div className='nvidia-bg rounded-3 shadow d-lg-flex d-md-block d-sm-block gap-5 flex-lg-row align-items-center mt-5 mb-5 p-5'>

            <motion.img
                src='assets/enterprises/Nvidia.png'
                className=' img-fluid w-50'
                initial={{
                    opacity: 0,
                    x: -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}

            />

            <motion.h4
                className=' fs-4 pt-3'
                initial={{
                    opacity: 0,
                    x: 50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            >
                The starting point of DLSS (Deep Learning Super Sampling) technology is very different from that of
                spatial scaling techniques that we currently use.
                Leaving aside the more complicated details stemming from the way NVIDIA has
                implemented this innovation, what we are interested in knowing is that DLSS works with a buffer
                that allows the reconstruction algorithm to access
                the three frames prior to the one that needs to be rebuilt
                It also uses some mathematical objects known as motion vectors that
                are used to describe the displacement of the elements that change position at the same time.
                compare two consecutive frames. Once all this information has been collected, the engine
                of inference collects it and processes it using deep learning techniques with the purpose of
                rebuild a new image incorporating the highest level of detail possible.

            </motion.h4>

        </div>
        <div className='rounded-3 shadow d-lg-flex d-md-block d-sm-block gap-5 flex-lg-row align-items-center mt-5 mb-5 p-5'>

            <motion.img
                src='assets/enterprises/Apple.png'
                className=' img-fluid w-50'
                initial={{
                    opacity: 0,
                    x: -50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            />



            <motion.h4
                className=' fs-4 pt-3'
                initial={{
                    opacity: 0,
                    x: 50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            >
                Apple has acquired the artificial intelligence company Xnor.ai with the aim of promoting the
                use of highly efficient machine learning algorithms. According to the Financial Times,
                the manufacturer of the iPhone will pay 200 million dollars for this American start up.
                Apple has confirmed the operation, but has not given more details about it.
                Xnor.ai has specialized in developing highly efficient artificial intelligence
                technology that allows machine learning algorithms to run on devices, without
                the need for powerful processors or establishing a connection to the cloud to use computing power.
                These capabilities are basic in what is known as edge computing, which allows the data produced by IoT
                devices to be processed in the place where it is generated,
                without the need to send it to a data center or a cloud computing platform.
            </motion.h4>

        </div>

        <div className='openai-bg rounded-3 shadow d-lg-flex d-md-block d-sm-block gap-5 flex-lg-row align-items-center mt-5 mb-5 p-5'>

            <motion.img
                src='assets/enterprises/OpenAI.png'
                className=' img-fluid w-50 '
                initial={{
                    opacity: 0,
                    x: -50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            >

            </motion.img>

            <motion.h4
                className=' fs-4 pt-3'
                initial={{
                    opacity: 0,
                    x: 50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            >
                En 2020, OpenAI presentó una inteligencia artificial llamada GPT-3, que tenía tal dominio del lenguaje que era asombroso.
                Podía generar frases convincentes, hablar con humanos e incluso autocompletar código. GPT-3 también es enorme en cuanto a su escala,
                más grande que cualquier otra red neuronal jamás construida. Inició una nueva tendencia en la Inteligencia Artificial,
                en la que se generan modelos enormes.
            </motion.h4>

        </div>

        <div className='oracle-bg rounded-3 shadow d-lg-flex d-md-block d-sm-block gap-5 flex-lg-row align-items-center mt-5 mb-5 p-5'>

            <motion.img
                src='assets/enterprises/Oracle.png'
                className=' img-fluid w-50'
                initial={{
                    opacity: 0,
                    x: -50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            />

            <motion.h4
                className=' fs-4 pt-3'
                initial={{
                    opacity: 0,
                    x: 50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            >
                Oracle's Fusion Marketing system, as the product announced Monday is called,
                uses artificial intelligence to automatically build marketing campaigns and determine
                whether people who interact with emails or ads could eventually buy a product,
                sending your contact information to sales teams.

                To do so, the system takes data from a variety of sources.
                Some of the data, such as email contact lists,
                they will come from Oracle customers using the system.
                Others will come from massive third-party data marketplaces that Oracle has
                acquired in recent years to grow its digital advertising business.
            </motion.h4>

        </div>

        <div className='microsoft-bg rounded-3 shadow d-lg-flex d-md-block d-sm-block gap-5 flex-lg-row align-items-center mt-5 mb-5 p-5'>

            <motion.img
                src='assets/enterprises/Microsoft.png'
                className=' img-fluid w-50'
                initial={{
                    opacity: 0,
                    x: -50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            />


            <motion.h4
                className=' fs-4 pt-3'
                initial={{
                    opacity: 0,
                    x: 50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 }
                }}
                viewport={{ once: true }}
            >
                AI Builder's entity extraction models recognize specific data in the text you
                target based on your business needs.
                The model identifies the key elements of the text and then
                classifies them into predefined categories.
                This can help you transform unstructured data into structured data that can be read by machines.
                You can then apply processing to retrieve information,
                extract data, and answer questions.
                AI Builder features two types of entity extraction models: prebuilt and custom.
                The pre-built models are ready to use, require no training or publishing, and
                are appropriate for many uses where customization is not needed. Custom entity extraction models
                must be compiled, trained, and published before you can use them. By using your own training data and design parameters,
                you can create an entity extraction model designed specifically for your unique requirements.
            </motion.h4>

        </div>

    </article>
)





export default Article1;