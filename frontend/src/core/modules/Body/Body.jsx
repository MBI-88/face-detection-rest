import './Body.css'
import Article1 from './components/article1/Article1'
import Article2 from './components/article2/Article2'
import Article3 from './components/article3/Article3'
import Header from './components/header/Header'

const Body = () => {

  return (
    <section className=' mt-5 mb-5'>
      <Header />
      <Article1 />
      <Article2 />
      <Article3 />

    </section>
  )
}

export default Body
