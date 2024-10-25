import React from 'react';
import { Link } from 'react-router-dom';
import ButtonUI from '../ButtonUI';
import TitleUI from '../TitleUI';
import './pageListHeader.scss';

const PageListHeader = ({ titleText, description, buttonText, onButtonClick, children, path = '', icon }) => {
  return (
    <div className="title-wrapper">
      <div>
        <TitleUI text={titleText} level="1" />
        <p>{description}</p>
      </div>
      <div className={`${children ? 'links-wrapper' : ''}`}>
        {children}
        {buttonText && (
          <Link to={path}>
            <ButtonUI classN="create-page" text={buttonText} onClick={onButtonClick} icon={icon} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageListHeader;
