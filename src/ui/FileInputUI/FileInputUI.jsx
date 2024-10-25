import React from 'react';
import './styles.scss';
import IconButtonUI from '../IconButtonUI/IconButtonUI';

const FileInputUI = () => {
  return (
    <div className="file-input-wrapper">
      <IconButtonUI type="close" />
      <label htmlFor="file">Вставить / Изменить Логотип</label>
      <input className="file-input" type="file" name="file" id="file" />
    </div>
  );
};

export default FileInputUI;
