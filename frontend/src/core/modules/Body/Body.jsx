import './Body.css'
import Article1 from './components/article1/Article1'
import Article2 from './components/article2/Article2'
import Article3 from './components/article3/Article3'
import Article4 from './components/article4/Article4'
import Article5 from './components/article5/Article5'
import Header from './components/header/Header'

const Body = () => {

  return (
    <section className=' mt-5 mb-5'>
      <Header />
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Article5 />

    </section>
  )
}

export default Body
