import './Body.css'
import Article1 from './components/article1/Article1'
import Article2 from './components/article2/Article2'
import Article3 from './components/article3/Article3'
import Article4 from './components/article4/Article4'
import Article5 from './components/article5/Article5'
import Article6 from './components/article6/Article6'
import FaceDetection from './components/faceDetectionModel/FaceDetection'
import Header from './components/header/Header'
import Landmarks from './components/Landmarks/Landmarks'

const Body = () => {

  return (
    <section className=' mt-2 mb-5'>
      <Header />
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <FaceDetection />
      <Landmarks />
      <Article5 />
      <Article6 />
      

    </section>
  )
}

export default Body
