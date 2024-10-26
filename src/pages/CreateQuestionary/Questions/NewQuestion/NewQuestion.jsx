import React from 'react';
import { ReactComponent as PlusIcon } from '../../../../assets/svg/circlePlusIcon.svg';
import './styles.scss';

const NewQuestion = () => {
  return (
    <div className="new-question">
      <div className="new-question-card">
        <PlusIcon />
        <span className="new-question-text">Добавить новый вопрос</span>
      </div>
    </div>
  );
};

export default NewQuestion;
