import Footer from '../../Reusable Components/Footer/Footer'
import Navbar from '../../Reusable Components/Navbar/Navbar'
import TurningLine from '../../Reusable Components/TurningLine/TurningLine'
import Questions from './Questions/Questions'

import './Faq.css'

const FAQ = () => {
  return (
    <div className='faq'>
      <Navbar />
      <section className='faqQuestions'>
        <TurningLine classname='donationTurningLine' />
        <h1 className='faqHeader'>Frequently Asked Questions</h1>
        <Questions />
      </section>
      <Footer />
    </div>
  )
}

export default FAQ
