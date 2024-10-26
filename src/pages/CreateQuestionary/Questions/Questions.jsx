import React, { useState } from 'react';
import './styles.scss';
import MedicineQuestionCard from '../../../components/MedicineQuestionCard';
import NewQuestion from './NewQuestion/NewQuestion';
import EditQuestion from './EditQuestion/EditQuestion';

const Questions = ({ questionList }) => {
  const newQuestionParams = {
    initialQuestionText: '',
    initialAdditionalText: '',
    initialQuestionType: 'infoblock',
    initialIsRequired: false,
  };
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editFormParams, setEditFormParams] = useState(newQuestionParams);

  const openEmptyForm = () => {
    setIsEditFormOpen(true);
    setEditFormParams(newQuestionParams);
  };

  return (
    <>
      {isEditFormOpen && <EditQuestion questionParams={editFormParams} onSave={() => setIsEditFormOpen(false)} />}
      <div className="question-grid">
        <NewQuestion onClick={openEmptyForm} />
        {questionList.map((question) => (
          <MedicineQuestionCard
            key={question.number}
            number={question.number}
            text={question.text}
            type={question.type}
            onClick={openEmptyForm}
          />
        ))}
      </div>
    </>
  );
};

export default Questions;
