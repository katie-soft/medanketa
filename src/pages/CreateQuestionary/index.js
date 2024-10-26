import React from 'react';
import './style.scss';
import { useState, useEffect } from 'react';
import PageListHeader from '../../ui/PageListHeader';
import Banner from '../../components/Banner';
import ButtonUI from '../../ui/ButtonUI';
import TabsContainer from '../../ui/TabsContent';
import MainSettings from './MainSettings/MainSettings';
import Availability from './Availability/Availability';
import Statistics from './Statistics/Statistics';
import Questions from './Questions/Questions';
import { questions } from '../../helpers/data';

const CreateQuestionary = () => {
  const tabs = [
    { label: 'Основные настройки', tabName: 'main' },
    { label: 'Вопросы', tabName: 'questions' },
    { label: 'Доступность', tabName: 'availability' },
    { label: 'Статистика', tabName: 'statistics' },
  ];

  const [activeQIndex, setActiveQIndex] = useState(0);
  const [activeQTab, setActiveQTab] = useState('main');

  useEffect(() => {
    const savedQTabData = localStorage.getItem('activeQTab');
    if (savedQTabData) {
      const { activeQTab: savedQTab, activeQIndex: savedQIndex } = JSON.parse(savedQTabData);

      const isValidTab = tabs.some((tab) => tab.tabName === savedQTab);

      if (isValidTab) {
        setActiveQTab(savedQTab);
        setActiveQIndex(savedQIndex);
      } else {
        setActiveQTab(tabs[0].tabName);
        setActiveQIndex(0);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activeQTab', JSON.stringify({ activeQTab, activeQIndex }));
  }, [activeQTab, activeQIndex]);

  const handleClick = (index, tab) => {
    setActiveQIndex(index);
    setActiveQTab(tab);
  };

  const renderContent = () => {
    switch (activeQTab) {
      case 'main':
        return <MainSettings />;
      case 'questions':
        return <Questions questionList={questions} />;
      case 'availability':
        return <Availability />;
      case 'statistics':
        return <Statistics total={12} answers={500} views={31} />;
      default:
        return null;
    }
  };

  return (
    <section className="questionary-wrapper">
      <PageListHeader
        titleText="Создание анкеты"
        description="Создавайте ваши персональные анкеты, и распространяйте среди пользователей"
      >
        <ButtonUI text="Сохранить как черновик" type="transparent" onClick={() => {}} />
        <ButtonUI text="Шаблон" type="transparent" onClick={() => {}} />
      </PageListHeader>
      <div className="questionary-content">
        <Banner />
        <TabsContainer
          renderContent={renderContent}
          backWard={true}
          tabs={tabs}
          handleClick={handleClick}
          activeIndex={activeQIndex}
          explanationText={
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается '
          }
        ></TabsContainer>
      </div>
    </section>
  );
};

export default CreateQuestionary;
