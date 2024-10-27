import React from 'react';
import { useState } from 'react';
import { CardUI } from '../../../ui/CardUI';
import InputUI from '../../../ui/InputUI';
import IconButtonUI from '../../../ui/IconButtonUI/IconButtonUI';

import './styles.scss';

const MainSettings = () => {
  const [qTitle, setQTitle] = useState('');
  const [qDescription, setQDescription] = useState('');

  return (
    <div className="settings-cards-wrapper">
      <CardUI classN="curved-block">
        <div className="curved-block-border">
          <IconButtonUI type="close" />
          <div className="tabs-cart-block">
            <label htmlFor="file-upload" className="custom-logo-upload">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.248 25.5V13.75H0.498047V12.25H12.248V0.499999H13.748V12.25H25.498V13.75H13.748V25.5H12.248Z"
                  fill="#303030"
                />
              </svg>
              <p>Загрузить</p>
            </label>
            <input id="file-upload" type="file" style={{ display: 'none' }} />
          </div>
        </div>
      </CardUI>
      <CardUI>
        <div className="card-wrapper-content">
          <InputUI
            id="page-title"
            label="page-title"
            placeholder="Название Меданкеты"
            value={qTitle}
            onChange={(e) => setQTitle(e.target.value)}
          />
          <p>Не более 250 символов</p>
        </div>
        <div className="card-wrapper-content">
          <textarea
            id="announcement"
            name="announcement"
            cols="30"
            rows="10"
            value={qDescription}
            onChange={(e) => setQDescription(e.target.value)}
            placeholder="Описание Меданкеты"
          >
            Текстовый анонс или краткое описание
          </textarea>
          <p>Не более 750 символов</p>
        </div>
      </CardUI>
    </div>
  );
};

export default MainSettings;
