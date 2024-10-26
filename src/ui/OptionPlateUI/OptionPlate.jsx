import React from 'react';
import { ReactComponent as MoveIcon } from '../../assets/svg/moveIcon.svg';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';

import './styles.scss';

export const OptionPlate = ({ text }) => {
  return (
    <div className="option-plate">
      <MoveIcon />
      {text}
      <CloseIcon />
    </div>
  );
};
