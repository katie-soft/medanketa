import React from "react";
import TitleUI from "../../ui/TitleUI";
import ToggleButtonUI from "../../ui/ToggleButtonUI";
import { CardUI } from "../../ui/CardUI";
import PageListHeader from "../../ui/PageListHeader";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as SaveIcon } from "../../assets/svg/save.svg";
import "./style.scss";
import ButtonUI from "../../ui/ButtonUI";
import useWindowResize from "../../hooks/useWindowResize";
import InputUI from "../../ui/InputUI";

export const EditUser = () => {
  const isMob = useWindowResize().width < 1024;
  
  return (
    <div className="admin-container list-pages">
      <PageListHeader
        titleText="Администратор"
        buttonText="Назад"
        path=""
        icon={Arrow}
        description={isMob ? "Создавайте ваши персональные анкеты, и распространяйте среди пользователей" : undefined}
      />
      
      <div className="card">
        <div className="tab-content">
          <div className="admin-cards">
            <CardUI>
              <div className="card-wrapper-content">
                <label htmlFor="admin-name">Название</label>
                <InputUI id="admin-name" placeholder="Администратор" />
              </div>
            </CardUI>
          </div>
          
          <CardUI classN="btn-container">
            <div className="card-wrapper-content">
              <label>Роли</label>
              <div className="toggle-answer">
                <ToggleButtonUI isActive={false} text="Управление ролями пользователей" />
                <ToggleButtonUI isActive={false} text="Управление анкетами пользователей" />
                <ToggleButtonUI isActive={true} text="Управление данными пользователей" />
              </div>
            </div>
          </CardUI>
          
          <div className="explanation-text-block">
            <p className="explanation-text">
              Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается.
            </p>
            <ButtonUI text="Сохранить" icon={SaveIcon} classN="save-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};
