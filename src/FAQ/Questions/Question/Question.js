import Description from "../../../Reusable Components/Description/Description"
import Header from "../../../Reusable Components/Header/Header"
import './Question.css'


const Question = ({answer, question}) => {
    return (
      <div className='question'>
        <Header text={`Q: ${question}`} className='questionHeader' />
        <Description text={answer} className='questionAnswer' />
      </div>
    )
}

export default Question