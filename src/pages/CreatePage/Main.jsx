import React, { useState } from 'react';
import useWindowResize from '../../hooks/useWindowResize';
import { CardUI } from '../../ui/CardUI';
import CustomSelect from '../../ui/CustomSelectUI';
import DynamicInputUI from '../../ui/DynamicInputUI/DynamicInputUI';
import InputUI from '../../ui/InputUI';
import TitleUI from '../../ui/TitleUI';

export const Main = () => {
  const isMob = useWindowResize().width < 1024;

  const [pageTitle, setPageTitle] = useState('');
  const [symbolicCode, setSymbolicCode] = useState('');
  const [announcement, setAnnouncement] = useState('');
 const [visited, setVisited] = useState(false);

  const onChangeinp = (e) => {
    if (e.target.value) {
      setVisited(true);
    } else {
      setVisited(false);
    }
    setAnnouncement(e.target.value)
  };

  return (
    <div className='list-pages'>
      <div className='tab-content'>
        {isMob && <TitleUI text="Основное" level="1" />}
        <CustomSelect placeholder="Главная" />
        <div className='cards-content'>
          <CardUI>
            <div className='card-wrapper-content'>
              <label htmlFor="page-title">Название страницы</label>
              <InputUI 
                id="page-title" 
                label="page-title"   
                placeholder="Название страницы" 
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}  
              />
            </div>
            <div className='card-wrapper-content'>
              <label htmlFor="symbolic-code">Символьный код</label>
              <DynamicInputUI 
                id="symbolic-code" 
                label="symbolic-code"  
                baseText="site.com/users/"
                value={symbolicCode}
                onChange={(e) => setSymbolicCode(e.target.value)} 
              />
            </div>
          </CardUI>
          <CardUI>
            <div className='card-wrapper-content'>
              <label htmlFor="announcement">Анонс</label>
              <textarea 
                id="announcement" 
                name="announcement" 
                cols="30" 
                rows="10" 
                value={announcement}  
                onChange={onChangeinp}  
                className={` ${visited  ? "visited" : ''}`}

              >
                Текстовый анонс или краткое описание
              </textarea>
              <p>Не более 750 символов</p>
            </div>
          </CardUI>
        </div>
      </div>
    </div>
  );
};
