import { motion } from 'framer-motion'
import './Article6.css'


const Article6 = () => (
    <article className='article-bg mt-5 mt-5 mb-5 pt-3 pb-3'>
        <section className='container'>
            <motion.h1
                className='fs-1 text-start mt-5 mb-5'
                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            >
                Here are some of the vexing questions that governments, companies, 
                and citizens will have to answer as AI
                plays an increasingly important role in our lives.
            </motion.h1>

            <motion.h3
                className='fs-3 text-start mb-5 mt-5'
                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            >
                Who is responsible for ensuring that the decisions made by AI are ethical and just?
            </motion.h3>
            <motion.p
                className='fs-5 text-start p-3'
                initial={{opacity:0}}
                whileInView={{
                    opacity:1,
                    transition:{delay:1}
                }}
                whileHover={{
                    scale:[null, 1.08],
                }}
                viewport={{ once: true }}
            >
                An elderly man steps off the curb, right into the path of an AI-powered driverless car.
                The AI must choose: hit the man or swerve dangerously into oncoming traffic. Who is legally
                liable for the decision that the AI makes? Here’s a less dramatic example: if an AI program denies
                your mortgage application, who can you appeal to? Accountability is critical if these technologies are
                going to win public trust. One option is for governments to regulate, as some already are. Europe’s tough data
                protection laws grant people the right to know why computers have made certain decision about them — but how the
                law will be applied in practice is still an open question. Another option is for companies to develop their own
                voluntary standards for “algorithmic transparency” and other ethical issues arising from AI. We’ll see whether a
                solution emerges that can assure people that the decisions being made about their lives by computers are fair and just.
            </motion.p>

            <motion.h3
                className='fs-3 text-start mb-5 mt-5'
                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            >
                How does accountability work when some AI decisions are opaque, even to their programmers?
            </motion.h3>

            <motion.p
                className='fs-5 text-start p-3'
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: { delay: 1 }
                }}
                whileHover={{
                    scale: [null, 1.08],
               
                }}
                viewport={{ once: true }}
            >
                It’s not always possible to understand how AI makes a particular decision. Some of the biggest
                advances responsible for putting modern AI on the map have come from a machine learning approach
                called “artificial neural networks” – which runs huge amounts of information through groups of powerful
                microprocessors arrayed in a way that mimic the way neurons are connected in the human brain. The neural networks
                ‘teach’ computers how to accurately answer narrowly posed questions. Within them, the digital equivalent of thousands
                of overlapping synapses are firing every millisecond. So even if you had access to the detailed source code that guided
                the AI, it might not tell you anything useful about what mistakes were made or which biases were amplified. You don’t understand
                exactly how your brain decides that the thing that just darted in front of your car is a harmless plastic bag, not a kid on a bike,
                right? The people programming the AIs that will power driverless cars don’t understand exactly how these programs make decisions,
                either. All they know is that when they design the network a certain way and feed it the data, they get a certain result.
            </motion.p>

            <motion.h3
                className='fs-3 text-start mb-5 mt-5'
                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            >
                Should AI be allowed to kill people?
            </motion.h3>
            
            <motion.p
                className='fs-5 text-start p-3'
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: { delay: 1 }
                }}
                whileHover={{
                    scale: [null, 1.08],
                }}
                viewport={{ once: true }}
            >
                Remotely-controlled drones have already raised tricky ethical issues on the battlefield,
                but just wait until AI makes takes human fighters out of the picture completely. Governments
                are already examining when and how they might deploy so-called lethal autonomous weapons systems
                that could one day be capable of finding and killing enemy soldiers without human input. Lethal AI-powered
                robots would have a number of advantages over human troops: they would be expendable, wouldn’t require sleep,
                and – more controversially – wouldn’t hesitate to pull the trigger on a target in their sights. But who will be
                held accountable if an AI-powered robot accidentally kills civilians? Would lethal robots make governments more
                likely to wage wars? Militaries around the world are likely to step carefully as they explore potential uses of these
                systems, but they – and the citizens they protect – won’t be able to escape the tremendous ethical and safety questions
                that they raise.
            </motion.p>
        </section>


    </article>
);

export default Article6;