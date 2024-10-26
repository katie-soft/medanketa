import React, { useState } from 'react';
import InputUI from '../../../../ui/InputUI';
import './styles.scss';
import { OptionPlate } from '../../../../ui/OptionPlateUI/OptionPlate';

export const Select = ({ startOptions }) => {
  const [options, setOptions] = useState(startOptions);

  console.log(setOptions);

  return (
    <div>
      <label htmlFor="min-num">Варианты ответа</label>
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
  );
};
