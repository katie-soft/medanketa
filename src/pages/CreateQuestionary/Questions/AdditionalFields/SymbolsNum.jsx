import React from 'react';
import InputUI from '../../../../ui/InputUI';

export const SymbolsNum = () => {
  return (
    <div>
      <label htmlFor="max-symbols">Ограничение по количеству символов</label>
      <InputUI id="max-symbols" value={1000} type="number" placeholder="Введите максимальное количество символов" />
    </div>
  );
};
