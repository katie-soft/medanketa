import React from 'react';
import './style.scss';
import PageListHeader from '../../ui/PageListHeader';
import { Link } from 'react-router-dom';
import AnswerQuestionaryHeader from './AnswerQuestionaryHeader';
import AnswerQuestionaryContent from './AnswerQuestionaryContent';

const AnswerQuestionary = ({ questionaryData }) => {
  return (
    <section className="questionary-wrapper">
      <PageListHeader
        titleText="Прохождение анкеты"
        description="Просьба внимательно отвечать на следующий блок вопросов! Будьте внимательны и отвечайте в соответствии с собственным состоянием"
      ></PageListHeader>
      <div className="questionary-content">
        <div className="registration-alert">
          <div className="registration-alert-content">
            <p className="registration-alert-title">Внимание</p>
            <p className="registration-alert-text">
              Вы не авторизованы. Для сохранения результатов пройденных анкет, вы можете зарегистрироваться в роли
              “Респондент”, нажав кнопку ниже.
            </p>
          </div>

          <Link to="/registration" className="registration-alert-link">
            Зарегистрироваться как респондент
          </Link>
        </div>
        <div className="answer-wrapper">
          <AnswerQuestionaryHeader questionaryData={questionaryData} />
          <AnswerQuestionaryContent questionaryData={questionaryData} />
        </div>
      </div>
    </section>
  );
};

export default AnswerQuestionary;
