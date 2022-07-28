import './Question.css'

const Question = ({ answer, question }) => {
  return (
    <div className='question'>
      <h2 className='questionHeader'>{`Q: ${question}`}</h2>
      <p className='questionAnswer'>{answer}</p>
    </div>
  )
}

export default Question
