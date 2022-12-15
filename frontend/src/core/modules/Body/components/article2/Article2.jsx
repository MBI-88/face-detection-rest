import { motion } from "framer-motion";
import { article2DataDetect, article2DataTrans } from "../../../../interfaces/Body/article2/article2Interface";
import { apiGoogleDetect, apiGoogleTranslate } from "../../../../services/serviceBody/article2/serviceArticle2";
import { useState, useEffect, useRef } from "react";
import './Article2.css'

const Article2 = () => {
  const [dataDetect, setDetect] = useState(article2DataDetect)
  const [dataTrans, setTrans] = useState(article2DataTrans)
  const [send, setSend] = useState(false)
  const paramsQDetect = useRef()
  const paramsQTrans = useRef()
  const paramsSelectSource = useRef()
  const paramsSelectTarget = useRef()
  const encodedParamsDetect = new URLSearchParams()
  const encodedParamsTrans = new URLSearchParams()

  const handlerDetect = () => {
    setSend(true)
  }

  const handlerTrans = () => {
    setDetect(true)
  }

  useEffect(() => {
    if (paramsQDetect.current.value !== null && send === true) {
      encodedParamsDetect.append('q', paramsQDetect.current.value)
      apiGoogleDetect(encodedParamsDetect)
        .then(response => response.json())
        .then(response => {
          if (response.data !== undefined) {
            setDetect(response)

          } else {
            alert(response.message)
          }
        })
      setSend(false)
    } else {
      return
    }
  }, [send])

  useEffect(() => {
    if (send === true && paramsQTrans.current.value !== null && paramsSelectSource.current.value !== null &&
      paramsSelectTarget.current.value !== null) {
      encodedParamsTrans.append('q', paramsQTrans.current.value)
      encodedParamsTrans.append('target', paramsSelectTarget.current.value)
      encodedParamsTrans.append('source', paramsSelectSource.current.value)
      apiGoogleTranslate(encodedParamsTrans)
        .then(response => response.json())
        .then(response => {
          if (response.data !== undefined) {
            setTrans(response)
          } else {
            alert(response.message)
          }

        })
      setSend(false)
    } else {
      return
    }
  }, [send])

  return (
    <section className="container mb-5">
      <motion.h1
        className="container-fluid fs-2 text-start pt-5 pb-3"
        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}>
        Google Translate API

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
        <h3 className="fs-3 text-start pb-5">
          The Translation API provides a simple programmatic interface for translating an arbitrary
          string into any supported language using state-of-the-art Neural Machine Translation.
          It is highly responsive, so websites and applications can integrate with Translation API for fast,
          dynamic translation of source text from the source language to a target language (such as French to English).
          Language detection is also available in cases where the source language is unknown. The underlying technology
          is updated constantly to include improvements from Google research teams,
          which results in better translations and new languages and language pairs.
        </h3>

        <div className="container-fluid text-start">
          <article className="container rounded-3 shadow d-lg-flex d-md-block d-sm-block flex-row gap-lg-1 p-3">
            <div className="container mt-3 mb-2" >
              <h3 className="fs-6">Detecting languages</h3>
              <textarea className="form-control mt-2" rows="8" cols="3" ref={paramsQDetect} placeholder="Write here...">
              </textarea>
              <button className="btn btn-primary mt-4" onClick={handlerDetect}>
                Submit
              </button>
            </div>
            {
              dataDetect.data.detections.map(item => (
                <div className="container mt-4 mb-2 w-50" key="form">

                  <label className="fs-6 mt-2"><h3>Confidence</h3></label>
                  <input key="confidence" type="text" className="form-control" readOnly
                    value={item[0].confidence ? item[0].confidence : '...'} />

                  <label className="fs-6 mt-3"><h3>Language</h3></label>
                  <input key="language" type="text" className="form-control" readOnly
                    value={item[0].language ? item[0].language : '...'} />
                </div>
              ))
            }
          </article>
        </div>

        <div className="container-fluid text-start mt-4">
          <article className="container rounded-3 shadow p-3">
            <div className="container mt-4 mb-2">
              <h3 className="fs-6">Translate</h3>
              <textarea className="form-control mt-1" rows="8" cols="3" ref={paramsQTrans} placeholder="Write here...">
              </textarea>
              <div className="mt-2">
                <select className="form-control w-50" ref={paramsSelectSource}>
                  <option value="">--Source language--</option>
                  <option value="en">English</option>
                  <option value="es">Espanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
            </div>

            <div className="container mt-5 mb-4">
              {
                dataTrans.data.translations.map(item => (
                  <textarea className="form-control mt-1 mb-1" key="source"
                    value={item[0].translatedText ? item[0].translatedText: 'Watting...'} readOnly rows="8" cols="3" placeholder="Write here...">
                  </textarea>
                ))
              }

              <div className="d-flex align-items-center gap-2 mt-2">
                <select className="form-control w-50" ref={paramsSelectTarget}>
                  <option value="">--Target language--</option>
                  <option value="en">English</option>
                  <option value="es">Espanish</option>
                  <option value="fr">French</option>
                </select>
                <button className="btn btn-primary" onClick={handlerTrans}>
                  Submit
                </button>
              </div>
            </div>

          </article>
        </div>
      </motion.section>
    </section>

  );
};



export default Article2;