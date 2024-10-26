import React, { useState } from 'react';
import { CardUI } from '../../../../ui/CardUI';
import TextareaUI from '../../../../ui/TextareaUI/TextareaUI';
import CustomSelect from '../../../../ui/CustomSelectUI';
import ToggleButtonUI from '../../../../ui/ToggleButtonUI';
import ButtonUI from '../../../../ui/ButtonUI';
import { ReactComponent as SaveIcon } from '../../../../assets/svg/save.svg';
import { questionTypes } from '../../../../helpers/data';

import './styles.scss';

const EditQuestion = ({ questionParams, onSave }) => {
  const [questionText, setQuestionText] = useState(questionParams.initialQuestionText || '');
  const [additionalText, setAdditionalText] = useState(questionParams.initialAdditionalText || '');
  const [questionType, setQuestionType] = useState(questionParams.initialQuestionType);

  const questionTypeName = questionTypes.filter((question) => question.value === questionType)[0].label;

  const handleQuestionTypeSelect = (value) => {
    setQuestionType(value);
  };

  return (
    <CardUI classN="edit-question">
      <div className="card-wrapper-content">
        <div className="row">
          <div className="question-wrapper">
            <label htmlFor="question-text">Вопрос</label>
            <TextareaUI
              id="question-text"
              label="question-text"
              placeholder="Введите текст вопроса"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />
          </div>
          <div className="question-wrapper">
            <label htmlFor="question-text">Дополнительный текст</label>
            <TextareaUI
              id="additional-text"
              label="additional-text"
              placeholder="Введите дополнительный текст"
              value={additionalText}
              onChange={(e) => setAdditionalText(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="question-wrapper">
            <p>Тип вопроса</p>
            <CustomSelect
              options={questionTypes}
              selectedOption={questionTypeName}
              placeholder="Выберите тип вопроса"
              onSelect={handleQuestionTypeSelect}
            />
          </div>
          {questionType}
        </div>
        <div className="row">
          <ToggleButtonUI isActive={questionParams.initialIsRequired} text="Обязательный вопрос" />
        </div>
      </div>
      <ButtonUI text="Сохранить" icon={SaveIcon} classN="save-btn" onClick={onSave} />
    </CardUI>
  );
};

export default EditQuestion;
