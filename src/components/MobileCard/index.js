import React from "react";
import { IconWrapperUI } from "../../ui/IconWrapperUI";
import ToggleButtonUI from "../../ui/ToggleButtonUI";
import { ReactComponent as Pen } from "../../assets/svg/pen.svg";
import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg";
import TitleUI from "../../ui/TitleUI";
import "./style.scss";

const MobileCard = ({
  name,
  date,
  active,
  iconTitle,
  creator,
  edit,
  remove,
  recipient,
  iconCreator,
  typeAction,
  iconType,
  action,
  orderNumber,
  role,
  onClick 
}) => {
  return (
    <div className="mobile-card-container">
      <div className="mobile-card">
        <div className="mobile-card-content">
          {name && (
            <div className="mobile-card-content-name">
              <TitleUI text="Название" level="3" />
              {iconTitle && name ? (
                <div className="title-mob-card" onClick={onClick}> 
                  <span>{iconTitle}</span>
                  <TitleUI text={name} level="2" />
                </div>
              ) : name ? (
                <div className="title-mob-card" onClick={onClick}>  
                  <TitleUI text={name} level="2" />
                </div>
              ) : null}
            </div>
          )}
          {iconCreator && creator ? (
            <div>
              <TitleUI text="Создатель" level="3" />
              <div className="creator-block title-mob-card">
                <TitleUI text={creator} level="2" />
                <span className="row-creator-icon">{iconCreator}</span>
              </div>
            </div>
          ) : creator ? (
            <div>
              <TitleUI text="Создатель" level="3" />
              <div className="title-mob-card">
                <TitleUI text={creator} level="2" />
              </div>
            </div>
          ) : null}
          {iconType && typeAction ? (
            <div>
              <TitleUI text="Тип события" level="3" />
              <div className="title-mob-card">
                <div className="action-type">
                  <TitleUI text={typeAction} level="2" />
                  <span className="row-creator-icon">{iconType}</span>
                </div>
                <span>
                  {action} <span className="ordernumber">{orderNumber}</span>
                </span>
              </div>
            </div>
          ) : typeAction ? (
            <div>
              <TitleUI text="Тип события" level="3" />
              <div className="title-mob-card">
                <TitleUI text={typeAction} level="2" />
              </div>
            </div>
          ) : null}
          {date && (
            <div className="date-mob-card">
              <p>Дата изменения</p>
              <span>{date}</span>
            </div>
          )}
          {role && (
            <div className="role-mob-card">
              <p>Роль</p>
              <TitleUI text={role} level="2" />
            </div>
          )}
          {active !== undefined && (
            <div>
              <p className="mob-card-status">Статус</p>
              <ToggleButtonUI text="Статус" isActive={!!active} />
            </div>
          )}
        </div>
      </div>

      {edit && (
        <IconWrapperUI classN="edit-button mb-edit" bgColor="none">
          <Pen />
        </IconWrapperUI>
      )}
      {remove && (
        <IconWrapperUI bgColor="none" classN="close-icon">
          <CloseIcon />
        </IconWrapperUI>
      )}
    </div>
  );
};

export default MobileCard;
