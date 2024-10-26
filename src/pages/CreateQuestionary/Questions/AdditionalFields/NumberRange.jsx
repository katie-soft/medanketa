import React from 'react';
import InputUI from '../../../../ui/InputUI';
import ToggleButtonUI from '../../../../ui/ToggleButtonUI';
import './styles.scss';

export const NumberRange = () => {
  return (
    <div>
      <label htmlFor="min-num">Границы значений</label>
      <div className="inputs-wrapper">
        <ToggleButtonUI isActive={true} text="Разрешить дробные числа" />
        <InputUI id="min-num" type="number" placeholder="Введите минимальное" />
        <InputUI id="max-num" type="number" placeholder="Введите максимальное" />
      </div>
    </div>
  );
};
