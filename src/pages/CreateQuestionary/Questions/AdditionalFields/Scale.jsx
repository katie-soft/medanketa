import React, { useState } from 'react';
import InputUI from '../../../../ui/InputUI';
import './styles.scss';
import { OptionPlate } from '../../../../ui/OptionPlateUI/OptionPlate';
import ToggleButtonUI from '../../../../ui/ToggleButtonUI';

export const Scale = ({ startOptions, startAnswers }) => {
  const [options, setOptions] = useState(startOptions);
  const [answers, setAnswers] = useState(startAnswers);

  console.log(setOptions, setAnswers);

  return (
    <div className="columns-wrapper">
      <div>
        <label htmlFor="options">Критерии</label>
        <div className="inputs-wrapper">
          <ul className="options-wrapper">
            {options.map((option) => (
              <li key={option.value}>
                <OptionPlate text={option.name} />
              </li>
            ))}
          </ul>
          <InputUI id="new-option" type="text" placeholder="Введите вариант критерия" />
        </div>
      </div>
      <div>
        <div className="row">
          <label htmlFor="answers">Ответы</label>
          <ToggleButtonUI isActive={true} text="Возможность выбора нескольких ответов" />
        </div>
        <div className="inputs-wrapper">
          <ul className="options-wrapper">
            {answers.map((answer) => (
              <li key={answer.value}>
                <OptionPlate text={answer.name} />
              </li>
            ))}
          </ul>
          <InputUI id="new-option" type="text" placeholder="Введите вариант ответа" />
        </div>
      </div>
    </div>
  );
};
