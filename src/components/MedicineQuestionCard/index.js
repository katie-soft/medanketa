import React from 'react';
import ToggleButtonUI from '../../ui/ToggleButtonUI';
import IconButtonUI from '../../ui/IconButtonUI/IconButtonUI';

import './style.scss';

const MedicineQuestionCard = ({ onClick, number, text, type, status = true, isInactive = false }) => {
  return (
    <div className={`question-card ${isInactive && 'inactive'}`}>
      <IconButtonUI type="close" />
      <div>
        <div className="question-header">
          <p className="question-number">Вопрос №{number}</p>
          <ToggleButtonUI text="Статус" isActive={status} />
        </div>
        <p className="question-text">{text}</p>
      </div>
      <p className="question-type">
        Тип вопросов: <span>{type}</span>
      </p>
      <IconButtonUI type="edit" onClick={onClick} />
    </div>
  );
};

export default MedicineQuestionCard;
