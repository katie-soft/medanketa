import React, { useState } from 'react';
import CustomCheckbox from '../../ui/CustomCheckbox';
import ButtonUI from '../../ui/ButtonUI';
import { ReactComponent as NextIcon } from '../../assets/svg/arrowNext.svg';
import { ReactComponent as BackIcon } from '../../assets/svg/arrowBack.svg';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';
import AnswerField from './AnswerField';

import './style.scss';

const AnswerQuestionaryContent = ({ questionaryData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  console.log(setCurrentQuestionIndex);
  const totalQuestionsNumber = questionaryData.questionList.length;
  const progress = Math.round(((currentQuestionIndex + 1) * 100) / totalQuestionsNumber);

  return (
    <div className="questionary-content">
      <div className="questionary-content-header">
        <div>
          <span className="question-number">
            Вопрос №{currentQuestionIndex + 1} <span>из {totalQuestionsNumber}</span>
          </span>
          <p className="questionary-content-subtitle">Начало анкеты. Тестовые вопросы.</p>
        </div>
        <span className="progress">{progress}% пройдено</span>
      </div>
      <div className="questionary-content-text">
        <span className="question-text">{questionaryData.questionList[currentQuestionIndex].questionText}</span>
        <AnswerField questionData={questionaryData.questionList[currentQuestionIndex]} />
      </div>
      <div className="questionary-content-footer">
        {currentQuestionIndex === 0 ? (
          <CustomCheckbox label="Даю согласие на обработку персональных данных" />
        ) : (
          <ButtonUI
            text="Назад"
            type="light"
            icon={BackIcon}
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          />
        )}
        <p className="footer-text">
          Все ваши ответы и результаты анкетирования конфиденцальны. Результыт доступны будут вам и автору анкеты.
        </p>
        {currentQuestionIndex < totalQuestionsNumber - 1 ? (
          <ButtonUI text="Далее" icon={NextIcon} onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} />
        ) : (
          <ButtonUI text="Закончить" icon={CloseIcon} type="transparent" />
        )}
      </div>
    </div>
  );
};

export default AnswerQuestionaryContent;
