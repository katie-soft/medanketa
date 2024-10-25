import React from 'react'
import './styles.scss'
import MedicineQuestionCard from '../../../components/MedicineQuestionCard'

const Questions = ({ questionList }) => {
  return (
    <div className='question-grid'>
      {questionList.map((question) => (
        <MedicineQuestionCard key={question.number} number={question.number} text={question.text} type={question.type} />
      ))}
    </div>
  )
}

export default Questions
