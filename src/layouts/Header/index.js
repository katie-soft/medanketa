import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import RoundedWrapperUI from '../../ui/RoundedWrapperUI';
import WrapperUI from '../../ui/WrapperUI';
import arrow from '../../assets/svg/arrowInHeader.svg';
import belt from '../../assets/svg/belt.svg';
import user from '../../assets/svg/user.svg';
import logOut from '../../assets/svg/log-out.svg';
import TitleUI from '../../ui/TitleUI';
import './header.scss';
import { IconWrapperUI } from '../../ui/IconWrapperUI';
import useWindowResize from '../../hooks/useWindowResize';
import CustomSelect from '../../ui/CustomSelectUI';
import { ReactComponent as MenuLogo } from '../../assets/svg/anketa.svg';
import { sidebarItems } from '../../helpers/data';
import ButtonUI from '../../ui/ButtonUI';

const Header = () => {
  const { width } = useWindowResize();
  const isMob = width < 1024;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {isMenuOpen && isMob && <div className="box-shadow"></div>}
      <section className="container ">
        <div className="header-wrapper">
          <WrapperUI className={`header-logo-wrapper ${isMenuOpen && 'menu-open-container'}`}>
            <Link to="/" className="logo-link">
              <img src={logo} alt="logo" />
            </Link>
            {isMob && (
              <div className="burger-menu">
                <ButtonUI
                  onClick={toggleMenu}
                  className="burger-icon"
                  text={
                    isMenuOpen ? (
                      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.05713L1 14.0571" stroke="#1C597B" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                          d="M14 14.0571L7.5 7.55713L1 1.05713"
                          stroke="#1C597B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 0.557129L1 0.557129"
                          stroke="#1C597B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M16 6.55713L1 6.55713" stroke="#1C597B" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 12.5571L1 12.5571" stroke="#1C597B" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )
                  }
                />
                {isMenuOpen && (
                  <div className="burger-menu-content">
                    <WrapperUI className="sidebar-wrapper">
                      {sidebarItems.map((item) => (
                        <React.Fragment key={item.id}>
                          {item.id === 'support' && <hr />}

                          <Link
                            key={item.id}
                            className={activeItem === item.id ? 'active' : ''}
                            onClick={() => {
                              setActiveItem(item.id);
                              setIsMenuOpen(false);
                            }}
                            to={item.path}
                          >
                            {item.icon}
                            {item.name}
                          </Link>
                        </React.Fragment>
                      ))}
                      <hr />
                      <Link to="" className="user-logout">
                        <img src={logOut} className="user-avatar" alt="" />
                        Выйти
                      </Link>
                    </WrapperUI>
                  </div>
                )}
              </div>
            )}
          </WrapperUI>
          {!isMob && (
            <WrapperUI className="header-right-part">
              <RoundedWrapperUI bgColor="#F0F4F6" className="return-home-btn">
                <Link to="/">
                  <img src={arrow} alt="" />
                  Вернуться в основной портал
                </Link>
              </RoundedWrapperUI>

              <div className="user-actions">
                <IconWrapperUI bgColor="transparent" border="true" borderColor="#E4E4E4">
                  <img src={user} className="user-avatar" alt="" />
                </IconWrapperUI>
                <div className="user-info">
                  <TitleUI level="4" text="Сергей Воронов" />
                  <p>1111tasde2@mail.ru</p>
                </div>
                <IconWrapperUI bgColor="#F0F4F6" classN="user-belt-icon">
                  <img src={belt} className="user-avatar" alt="" />
                </IconWrapperUI>
                {Boolean(isMob) && (
                  <IconWrapperUI bgColor="#F0F4F6" classN="header-menu">
                    <CustomSelect
                      chevronWidth={24}
                      chevronHeight={24}
                      options={sidebarItems}
                      icon={<MenuLogo />}
                      path="header"
                    />
                  </IconWrapperUI>
                )}
                <IconWrapperUI bgColor="#F0F4F6">
                  <img src={logOut} className="user-avatar" alt="" />
                </IconWrapperUI>
              </div>
            </WrapperUI>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
