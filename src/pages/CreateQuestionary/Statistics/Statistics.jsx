import React from 'react';

import { CardUI } from '../../../ui/CardUI';

import './styles.scss';

const Statistics = ({ total, answers, views }) => {
  return (
    <div className="stat-cards">
      <CardUI>
        <div className="card-wrapper-content">
          <span className="stat-number">{total}</span>
          <span>Всего пройдено раз</span>
        </div>
      </CardUI>
      <CardUI>
        <div className="card-wrapper-content">
          <span className="stat-number">{answers}</span>
          <span>Общее количество ответов</span>
        </div>
      </CardUI>
      <CardUI>
        <div className="card-wrapper-content">
          <span className="stat-number">{views}</span>
          <span>Просмотров</span>
        </div>
      </CardUI>
    </div>
  );
};

export default Statistics;
