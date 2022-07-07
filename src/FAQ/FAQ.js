import Footer from '../Reusable Components/Footer/Footer'
import Header from '../Reusable Components/Header/Header'
import Navbar from '../Reusable Components/Navbar/Navbar'
import TurningLine from '../Reusable Components/TurningLine/TurningLine'

import './Faq.css'
import Questions from './Questions/Questions'

const FAQ = () => {
  return (
    <div className='faq'>
      <Navbar />
      <section className='faqQuestions'>
        <TurningLine classname='donationTurningLine' />
        <Header text='Frequently Asked Questions' className="faqHeader" />
        <Questions />
      </section>
      <Footer />
    </div>
  )
}

export default FAQ
