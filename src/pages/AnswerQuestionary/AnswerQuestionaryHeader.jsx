import React from 'react';
import './style.scss';
import ButtonUI from '../../ui/ButtonUI';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';

const AnswerQuestionaryHeader = ({ questionaryData }) => {
  return (
    <div className="questionary-header">
      <div className="questionary-header-content">
        <img src={questionaryData.image} width={37} height={37}></img>
        <div>
          <p className="questionary-header-title">{questionaryData.title}</p>
          <p className="questionary-header-author">{questionaryData.author}</p>
        </div>
      </div>

      <ButtonUI text="Закончить" icon={CloseIcon} type="transparent" />
    </div>
  );
};

export default AnswerQuestionaryHeader;
