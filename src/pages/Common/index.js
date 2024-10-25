import React, { useEffect, useState } from "react";
import "./style.scss";
import TabsContainer from "../../ui/TabsContent";
import { Contact } from "./Contact";
import { Apperanace } from "./Apperanace";
import PageListHeader from "../../ui/PageListHeader";

export const Common = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("contact");
  const tabs = [
    { label: "Контакты", tabName: "contact" },
    { label: "Внешний вид", tabName: "appearance" },
  ];
  useEffect(() => {
    const savedTabData = localStorage.getItem("activeTab");
    if (savedTabData) {
      const { activeTab: savedTab, activeIndex: savedIndex } =
        JSON.parse(savedTabData);

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
    localStorage.setItem(
      "activeTab",
      JSON.stringify({ activeTab, activeIndex }),
    );
  }, [activeTab, activeIndex]);

  const handleClick = (index, tab) => {
    setActiveIndex(index);
    setActiveTab(tab);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "contact":
        return <Contact />;
      case "appearance":
        return <Apperanace />;

      default:
        return null;
    }
  };

  return (
    <div className="comman-container list-pages">
      <div className="tabs-title">
        <PageListHeader
          titleText="Общее"
          description="Создавайте ваши персональные анкеты, и распространяйте среди пользователей"
        />
      </div>
      <TabsContainer
        renderContent={renderContent}
        tabs={tabs}
        handleClick={handleClick}
        activeIndex={activeIndex}
      />
    </div>
  );
};
