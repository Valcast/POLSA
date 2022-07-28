import questions from './questions.json'
import Question from './Question/Question'
import Button from '../../../Reusable Components/Button/Button'

import { useState } from 'react'

const Questions = () => {
  const [filteredQuestions, setQuestions] = useState(questions)

  const keyupHandler = e => {
    let temp = questions.filter(question =>
      question.question.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setQuestions(temp)
  }

  return (
    <>
      <div className='faqSearchOptions'>
        <div className='Search searchFaq'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22.245'
            height='22.166'
            viewBox='0 0 22.245 22.166'>
            <path
              id='Icon_ionic-ios-search'
              data-name='Icon ionic-ios-search'
              d='M25.412,24.127l-5.885-5.94a8.387,8.387,0,1,0-1.273,1.289l5.847,5.9a.906.906,0,0,0,1.278.033A.912.912,0,0,0,25.412,24.127ZM12.937,19.548a6.623,6.623,0,1,1,4.684-1.94A6.582,6.582,0,0,1,12.937,19.548Z'
              transform='translate(-4 -3.993)'
              fill='#fff'
              stroke='#fff'
              strokeWidth='1'
            />
          </svg>
          <input
            className='searchInput'
            type='search'
            placeholder='Search a question...'
            onKeyUp={keyupHandler}></input>
        </div>
        <span className='faqSearchOptionsText'>or</span>
        <Button text='Write an own question' to='contact' />
      </div>

      {filteredQuestions.map(question => {
        return (
          <Question
            question={question.question}
            key={question.id}
            answer={question.answer}
          />
        )
      })}
      <div className='faqQuestionNotFound'>
        <h2>Didn$apost find your question?</h2>
        <p className='faqQuestionNotFoundDescription'>
          Create your own by our Contact Page{' '}
        </p>
        <Button text='Write an own question' to='contact' />
      </div>
    </>
  )
}

export default Questions
