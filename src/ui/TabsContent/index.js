import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import ButtonUI from '../../ui/ButtonUI';
import { ReactComponent as SaveIcon } from '../../assets/svg/save.svg';
import { ReactComponent as ArrowSlider } from '../../assets/svg/sliderArrow.svg';
import useWindowResize from '../../hooks/useWindowResize';

import { IconWrapperUI } from '../IconWrapperUI';
import { RefProvider } from '../../Context/refHeight';

const TabsContainer = ({ tabs, activeIndex, handleClick, renderContent, cardHeight = 'auto', explanationText }) => {
  const ref = useRef();
  const isMob = useWindowResize().width < 1024;
  const [, setDynamicHeight] = useState(cardHeight);

  const handleNextClick = () => {
    const nextIndex = (activeIndex + 1) % tabs.length;
    handleClick(nextIndex, tabs[nextIndex].tabName);
  };

  const handlePrevClick = () => {
    const prevIndex = (activeIndex - 1 + tabs.length) % tabs.length;
    handleClick(prevIndex, tabs[prevIndex].tabName);
  };

  useEffect(() => {
    if (ref.current) {
      setDynamicHeight(ref.current.offsetHeight);
    }
  }, [activeIndex]);
  return (
    <RefProvider>
      <div className="tabs-container">
        {!isMob && (
          <div className="navbar">
            <ul>
              {tabs.length &&
                tabs.map((tab, index) => (
                  <li
                    key={index}
                    className={`list-item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleClick(index, tab.tabName)}
                  >
                    {tab.label}
                  </li>
                ))}
            </ul>
          </div>
        )}

        <div className="card" ref={ref}>
          {Boolean(!isMob && activeIndex === 0) && <div className="bg-for-round"></div>}
          {isMob && (
            <>
              <IconWrapperUI bgColor="#F0F4F6" classN="prev-btn-slider" onClick={handlePrevClick}>
                <ArrowSlider />
              </IconWrapperUI>
              <IconWrapperUI bgColor="#F0F4F6" classN="next-btn-slider" onClick={handleNextClick}>
                <ArrowSlider />
              </IconWrapperUI>
            </>
          )}

          {renderContent()}

          <div className="explanation-text-block">
            {explanationText && <p className="explanation-text">{explanationText}</p>}
            <div className="btn-wrapper">
              <ButtonUI text="Сохранить" icon={SaveIcon} classN="save-btn" />
            </div>
          </div>
        </div>
      </div>
    </RefProvider>
  );
};

export default TabsContainer;
