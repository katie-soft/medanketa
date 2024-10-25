import React, { useState } from 'react';
import CustomSelect from '../../ui/CustomSelectUI';
import ToggleButtonUI from '../../ui/ToggleButtonUI';
import WrapperUI from '../../ui/WrapperUI';
import IconButtonUI from '../../ui/IconButtonUI/IconButtonUI';

import './style.scss';

const MedicineQuestionCard = ({ onClick, number, text, type, status = true }) => {
  const [visited, setVisited] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState();

  const onChangeinp = (e) => {
    if (e.target.value) {
      setVisited(true);
    } else {
      setVisited(false);
    }
    setTextAreaValue(e.target.value);
  };

  return (
    <div onClick={onClick} className="question-card">
      <div className="question-number">
        <p>Вопрос №{number}</p>
        <ToggleButtonUI text="Статус" isActive={status} />
      </div>
      <WrapperUI className="question-text">
        <textarea
          className={visited ? 'visited' : ''}
          value={textAreaValue}
          onChange={onChangeinp}
          placeholder={text}
        />
      </WrapperUI>
      <CustomSelect placeholder={type} />
      <IconButtonUI type="close" />
    </div>
  );
};

export default MedicineQuestionCard;
