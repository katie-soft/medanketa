import React from 'react';
import InputUI from '../../../../ui/InputUI';
import ToggleButtonUI from '../../../../ui/ToggleButtonUI';
import './styles.scss';

export const TimeRange = () => {
  return (
    <div>
      <label htmlFor="min-num">Ограничение по времени</label>
      <div className="inputs-wrapper">
        <ToggleButtonUI isActive={true} text="Использовать временной диапазон" />
        <InputUI id="min-time" type="time" />
        <InputUI id="max-time" type="time" />
      </div>
    </div>
  );
};
