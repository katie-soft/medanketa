import React from "react";
import { CardUI } from "../../ui/CardUI";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import TitleUI from "../../ui/TitleUI";
import InputUI from "../../ui/InputUI";
import SocialMediaSelector from "../../components/SocialMediaSelector";
import { IconWrapperUI } from "../../ui/IconWrapperUI";
import useWindowResize from "../../hooks/useWindowResize";

export const Contact = () => {
  const isMob = useWindowResize().width < 1024;

  return (
    <div className="list-pages">
      <div className="tab-content">
        {isMob && <TitleUI text="Контакты" level="1" />}

        <div className="contact-tabs">
          <div className="tabs-cart">
            <TitleUI text="Логотип" level="2" />
            <CardUI classN="curved-block">
              <div className="curved-block-border">
                <div className="tabs-cart-block">
                  <label htmlFor="file-upload" className="custom-file-upload">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.248 25.5V13.75H0.498047V12.25H12.248V0.499999H13.748V12.25H25.498V13.75H13.748V25.5H12.248Z"
                        fill="#303030"
                      />
                    </svg>
                    <p>Загрузить</p>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </CardUI>
          </div>

          <div className="tabs-cart">
            <TitleUI text="Телефон" level="2" />
            <CardUI>
              <div className="card-wrapper-content">
                <label htmlFor="tel">Телефон</label>
                <InputUI id="tel" type="text" placeholder="+7 999 999 99 99" />
              </div>
              <div className="card-wrapper-content">
                <label htmlFor="reference">Ссылка</label>
                <InputUI
                  id="reference"
                  type="text"
                  placeholder="+7 999 999 99 99"
                />
              </div>
            </CardUI>
          </div>

          <div className="tabs-cart">
            <TitleUI text="Почта" level="2" />
            <CardUI>
              <div className="card-wrapper-content">
                <label htmlFor="email">Почта для обратной связи</label>
                <InputUI
                  id="email"
                  type="email"
                  placeholder="1111tasde2@mail.ru"
                />
              </div>
              <div className="card-wrapper-content">
                <label htmlFor="mailForApplication">
                  Почта для сбора заявок
                </label>
                <InputUI
                  id="mailForApplication"
                  type="email"
                  placeholder="1111tasde2@mail.ru"
                />
              </div>
            </CardUI>
          </div>

          <div className="tabs-cart social-media">
            <TitleUI text="Соц. сети" level="2" />
            <CardUI>
              <SocialMediaSelector />
            </CardUI>
          </div>
        </div>
      </div>
    </div>
  );
};
