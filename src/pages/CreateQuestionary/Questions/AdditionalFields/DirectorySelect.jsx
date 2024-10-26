import React, { useState } from 'react';
import InputUI from '../../../../ui/InputUI';
import './styles.scss';
import { OptionPlate } from '../../../../ui/OptionPlateUI/OptionPlate';
import { directories } from '../../../../helpers/data';
import CustomSelect from '../../../../ui/CustomSelectUI';

export const DirectorySelect = ({ directoryId }) => {
  const startOptions = directories.filter((directory) => directory.value === directoryId)[0].options;
  const directoryNames = directories.map((directory) => directory.name);
  const [options, setOptions] = useState(startOptions);

  console.log(setOptions);

  return (
    <div>
      <label htmlFor="directory">Выберите справочник</label>
      <div className="inputs-wrapper">
        <CustomSelect
          options={directoryNames}
          selectedOption={directoryNames[0]}
          placeholder="Выберите справочник"
          // onSelect={handleDirectorySelect}
        />
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
