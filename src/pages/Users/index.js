import React from "react";
import MobileCard from "../../components/MobileCard";
import { userData } from "../../helpers/data";
import useWindowResize from "../../hooks/useWindowResize";
import PageListHeader from "../../ui/PageListHeader";
import TableUI from "../../ui/TableUI";
import WrapperUI from "../../ui/WrapperUI";
import "./style.scss";
export const Users = () => {
  const headers = [
    { title: "Название" },
    { title: "Роль" },
    { title: "Дата изменения" },
    { title: "Статус" },
    { title: "Действие" },
  ];
  const isMob = useWindowResize().width < 1024;
  return (
    <div className="list-pages user-page">
      <PageListHeader
        titleText="Пользователи"
        description="Создавайте ваши персональные анкеты, и распространяйте среди пользователей."
        buttonText="Управление ролями"
        path="control-roles"
      />
      {isMob ? (
        <div className="list-page-mobile users-mob">
          {userData.map((item, idx) => (
            <React.Fragment key={idx}>
              <MobileCard {...item} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <WrapperUI className="table-wrapper">
          <TableUI data={userData} headers={headers} />
        </WrapperUI>
      )}
    </div>
  );
};
