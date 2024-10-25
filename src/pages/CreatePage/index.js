import React, { useEffect, useState } from 'react';
import ButtonUI from '../../ui/ButtonUI';
import TabsContainer from '../../ui/TabsContent';
import { Content } from './Content';
import { Main } from './Main';
import { Seo } from './Seo';
import './style.scss';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';
import { Link } from 'react-router-dom';
import PageListHeader from '../../ui/PageListHeader';
export const CreatePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('main');

  const tabs = [
    { label: 'Основное', tabName: 'main' },
    { label: 'Содержание', tabName: 'content' },
    { label: 'SEO', tabName: 'seo' },
  ];

  useEffect(() => {
    const savedTabData = localStorage.getItem('activeTab');
    if (savedTabData) {
      const { activeTab: savedTab, activeIndex: savedIndex } = JSON.parse(savedTabData);

      const isValidTab = tabs.some((tab) => tab.tabName === savedTab);

      if (isValidTab) {
        setActiveTab(savedTab);
        setActiveIndex(savedIndex);
      } else {
        setActiveTab(tabs[0].tabName);
        setActiveIndex(0);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activeTab', JSON.stringify({ activeTab, activeIndex }));
  }, [activeTab, activeIndex]);

  const handleClick = (index, tab) => {
    setActiveIndex(index);
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'main':
        return <Main />;
      case 'content':
        return <Content />;
      case 'seo':
        return <Seo />;
      default:
        return null;
    }
  };
  return (
    <div className="create-page-container list-pages">
      <div className="tabs-title">
        <PageListHeader
          titleText="Создание страницы"
          description="Создавайте ваши персональные анкеты, и распространяйте среди пользователей"
        />
        <div className="btn-parent">
          <Link to="/">
            <ButtonUI text="Назад" icon={Arrow} classN="backward-btn" />
          </Link>
          <ButtonUI text="Сохарнить как черновик" classN="save-as-draft" />
        </div>
      </div>
      <TabsContainer
        renderContent={renderContent}
        backWard={true}
        tabs={tabs}
        handleClick={handleClick}
        activeIndex={activeIndex}
      ></TabsContainer>
    </div>
  );
};
