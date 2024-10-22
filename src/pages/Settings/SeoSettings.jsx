import React from "react";
import useWindowResize from "../../hooks/useWindowResize";
import { CardUI } from "../../ui/CardUI";
import RoundedWrapperUI from "../../ui/RoundedWrapperUI";
import TitleUI from "../../ui/TitleUI";
import ToggleButtonUI from "../../ui/ToggleButtonUI";
import MulitiLineTextarea from "../../ui/MulitiLineTextarea";

export const SeoSettings = () => {
  const isMob = useWindowResize().width < 1024;
  return (
    <div className="list-pages">
      <div className="tab-content seo-content">
        {isMob && <TitleUI text="SEO" level="1" />}
        <RoundedWrapperUI className="maintance-mod-activation">
          <TitleUI text="Индексация сайта" level="2" />
          <ToggleButtonUI />
        </RoundedWrapperUI>

        <div className="seo-cards-content">
          <CardUI>
            <div className="card-wrapper-content">
              <label htmlFor="htaccess">htaccess</label>
              <MulitiLineTextarea id="htaccess"
                firstLine="<Rewrite>"
                secondLine="..."
                thirdLine="</Rewrite>"
              />
            </div>
          </CardUI>

          <CardUI>
            <div className="card-wrapper-content">
              <label htmlFor="robots">robots.txt</label>
              <MulitiLineTextarea
                firstLine="Dissallow"
                secondLine="..."
                thirdLine="/"
                id="robots"
              />
            </div>
          </CardUI>

          <CardUI>
            <div className="card-wrapper-content">
              <label htmlFor="codeForSearch">Код метрики Яндекс/Google</label>

              <MulitiLineTextarea
                firstLine="<script>"
                secondLine="..."
                thirdLine="</script>"
                id="codeForSearch"
              />
            </div>
          </CardUI>
        </div>

        <div></div>
      </div>
    </div>
  );
};
