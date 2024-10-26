import React from 'react';
import InputUI from '../../../../ui/InputUI';
import ToggleButtonUI from '../../../../ui/ToggleButtonUI';
import './styles.scss';

export const DateRange = () => {
  return (
    <div>
      <label htmlFor="min-num">Ограничение по датам</label>
      <div className="inputs-wrapper">
        <ToggleButtonUI isActive={true} text="Использовать диапазон дат" />
        <InputUI id="min-date" type="date" />
        <InputUI id="max-date" type="date" />
      </div>
    </div>
  );
};
