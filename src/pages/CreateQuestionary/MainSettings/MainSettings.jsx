import { useState } from 'react';
import { CardUI } from '../../../ui/CardUI';
import FileInputUI from '../../../ui/FileInputUI/FileInputUI';
import InputUI from '../../../ui/InputUI';

import './styles.scss';

const MainSettings = () => {

  const [qTitle, setQTitle] = useState('');
  const [qDescription, setQDescription] = useState('');

  return (
    <div className='settings-cards-wrapper'>
      <FileInputUI />
      <CardUI>
        <div className='card-wrapper-content'>
          <InputUI 
            id="page-title" 
            label="page-title"   
            placeholder="Название Меданкеты" 
            value={qTitle}
            onChange={(e) => setQTitle(e.target.value)}  
          />
          <p>Не более 250 символов</p>
        </div>
          <div className='card-wrapper-content'>
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
  )
}

export default MainSettings;

