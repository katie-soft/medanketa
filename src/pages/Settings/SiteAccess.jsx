import React from "react";
import useWindowResize from "../../hooks/useWindowResize";
import { CardUI } from "../../ui/CardUI";
import InputUI from "../../ui/InputUI";
import RoundedWrapperUI from "../../ui/RoundedWrapperUI";
import TitleUI from "../../ui/TitleUI";
import ToggleButtonUI from "../../ui/ToggleButtonUI";

export const SiteAccess = () => {
  const isMob = useWindowResize().width < 1024;
  return (
    <div className="list-pages">
      <div className="tab-content">
        {isMob && <TitleUI text="Доступность сайта" level="1" />}
        <RoundedWrapperUI className="maintance-mod-activation">
          <TitleUI text="Maintance mod" level="2" />
          <ToggleButtonUI />
        </RoundedWrapperUI>
        <div className="cards-content">
          <CardUI>
            <div className="card-wrapper-content">
              <label htmlFor="messageTitle">Заголовок сообщения</label>
              <InputUI
                id="messageTitle"
                placeholder="Сайт временно не доступен"
              />

              <p> Не более 250 символов</p>
            </div>
          </CardUI>
          <CardUI>
            <div className="card-wrapper-content">
              <label htmlFor="soonreturn">Описание</label>
              <InputUI
                id="soonreturn"
                placeholder="Мы рабоатем над новым обновлением. Скоро вернемся."
              />
              <p>Не более 750 символов</p>
            </div>
          </CardUI>
        </div>

        <div></div>
      </div>
    </div>
  );
};
