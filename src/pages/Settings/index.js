import React, { useEffect, useState } from "react";
import { MailNotifications } from "./MailNotifications";
import { SeoSettings } from "./SeoSettings";
import { SiteAccess } from "./SiteAccess";
import "./style.scss";
import TabsContainer from "../../ui/TabsContent";
import PageListHeader from "../../ui/PageListHeader";

export const Settings = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("siteAccess");

  const tabs = [
    { label: "Доступность сайта", tabName: "siteAccess" },
    { label: "Почтовые уведомления", tabName: "mailNotifications" },
    { label: "SEO", tabName: "seo" },
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
      case "siteAccess":
        return <SiteAccess />;
      case "mailNotifications":
        return <MailNotifications />;
      case "seo":
        return <SeoSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="settings-container list-pages">
      <div className="tabs-title">
        <PageListHeader
          titleText="Настройки"
          description="Создавайте ваши персональные анкеты, и распространяйте среди пользователей"
        />
      </div>
      <TabsContainer
        renderContent={renderContent}
        titleText="Настройки"
        description="Создавайте ваши персональные анкеты, и распространяйте среди пользователей"
        tabs={tabs}
        handleClick={handleClick}
        activeIndex={activeIndex}
      />
    </div>
  );
};
