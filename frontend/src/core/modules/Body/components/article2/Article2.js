import { motion } from "framer-motion";
import article2Data, { bodyData } from "../../../../interfaces/Body/article2/article2Interface";
import { apiFaceDetection1 } from "../../../../services/serviceBody/article2/serviceArticle2";
import { useState, useEffect, useRef } from "react";


const Article2 = () => {
  const [body, setBody] = useState(bodyData)
  const [faces, setFaces] = useState(article2Data)
  const [send, setSend] = useState(false)
  const url = useRef()

  const handlerSend = () => {
    //Validar info en el form
    setSend(true)
  }

  const handlerChange = () => {
    console.log(url.current.value)
  }

  useEffect(() => {
    if (send) {

    } else {
      return
    }
  }, [send])

  return (
    <section className="container">
      <motion.h1
        className="container-fluid fs-2 text-start pt-5 pb-3"
        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}

      >Affordable Computer Vision
      </motion.h1>
      <motion.section
        className="container-fluid mt-5 mb-5"
        initial={{
          opacity: 0,
          y: 300
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <h3 className="fs-3 text-start pb-5">Easily integrate our Computer Vision API to add some Machine Learning magic✨ to your app.
          At inferdo, we pride ourselves in our ability to offer state-of-the-art, pre-trained deep learning models,
          but also our ability to efficiently serve them at scale. That means we can pass the savings on to you!
          Simply provide an image URL to our API and we’ll handle the rest.
          The returned object includes the locations of the detected faces encoded in the form of the top-left and bottom-right
          pixel coordinates of the face’s bounding box, and the probability of the detected bounding box region being a face.
          To increase the accuracy of your request, in a trade-off of API response time, use the optional “accuracy_boost”
          param to boost model accuracy. Valid arguments are values in the range 1 to 4, with 1 being the fastest and least
          accurate model and 4 being the most accurate and slowest model. We recommend 2 for most use cases.
        </h3>

        <div className="container-fluid text-start">
          <article className="container rounded-3 shadow d-lg-flex d-md-block d-sm-block flex-row gap-lg-3 align-items-center">
            <form className="form-control text-start">
              <select className="form-control" ref={url}>
                <option value="">Select image...</option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </form>

            <div className="container text-center">
              <motion.img src="" alt="Waitting..." className="img-fluid pb-3" />

              <button className="btn">

              </button>
            </div>

          </article>
        </div>
      </motion.section>
    </section>

  );
};



export default Article2;