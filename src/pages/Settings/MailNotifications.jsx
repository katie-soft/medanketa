import React, { useState } from 'react';
import MobileCard from '../../components/MobileCard';
import { settingData } from '../../helpers/data';
import useWindowResize from '../../hooks/useWindowResize';
import CustomCheckbox from '../../ui/CustomCheckbox';
import TableUI from '../../ui/TableUI';
import TitleUI from '../../ui/TitleUI';
import ToggleButtonUI from '../../ui/ToggleButtonUI';
import WrapperUI from '../../ui/WrapperUI';

export const MailNotifications = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [activeContent, setActiveContent] = useState(1);
   const [textAreaValue,setTextAreaValue]=useState()

  const headers = [
    { title: 'Название' },
    { title: 'Получатель' },
    { title: 'Дата изменения' },
    { title: 'Статус' },
    { title: 'Действие' },
  ];
const [visited,setVisited]=useState(false)
  const onChangeinp = (e) => {
    if (e.target.value) {
      setVisited(true);
    } else {
      setVisited(false);
    }
  };
  const isMob = useWindowResize().width < 1024;

   const changeContent = () => {
    setActiveContent(2);  
   };

  return (
    <div className="list-pages mail-notification">
      {tabIndex === 1 && activeContent === 1 && (  
        <>
          {isMob ? (
            <div className="tab-content mail-notification-tab">
              <TitleUI text="Почтовые уведомления" level="1" />
              <div className="list-page-mobile">
                {settingData.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <MobileCard {...item} onClick={changeContent} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ) : (
            <WrapperUI className="table-wrapper">
              <TableUI 
                data={settingData} 
                headers={headers} 
                setTabIndex={setTabIndex} 
                index={tabIndex} 
                hasOnClick={changeContent} 
              />
            </WrapperUI>
          )}
        </>
      )}

      {tabIndex === 1 && activeContent === 2 && ( 
        <div className="tab-content mail-notification-details">
          {isMob && <TitleUI text="Почтовые уведомления" level="1" />}
          <div className="left-content">
            <p className="type-event">
              Тип события: <span>Регистрация пользователя</span>
            </p>
            <p className="recipient">
              Получатель: <span>Администратор</span>
            </p>
            <ToggleButtonUI isActive={true} />
          </div>

          <div className="right-content">
            <TitleUI text="Текст письма" level="3" />
            <div className="checkbox-group">
              <CustomCheckbox label="HTML" />
              <CustomCheckbox label="Визуальный редактор" />
            </div>
            <textarea 
              name="email-content" 
              id="email-content" 
              cols="30" 
              rows="10" 
              placeholder="Введите текст письма..."
              onChange={onChangeinp}
              className={visited ? "visited" : ""}
              value={textAreaValue}
            ></textarea>

            <div className="available-variables">
              <TitleUI text="Доступные переменные:" level="4" />
              <div className="variables">
                <span>#NAME#</span>
                <span>#PHONE#</span>
                <span>#EMAIL#</span>
                <span>#LINK#</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MailNotifications;
