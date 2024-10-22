import React from "react";
import MobileCard from "../../components/MobileCard";
import { directoriesData } from "../../helpers/data";
import useWindowResize from "../../hooks/useWindowResize";
import PageListHeader from "../../ui/PageListHeader";
import TableUI from "../../ui/TableUI";
import WrapperUI from "../../ui/WrapperUI";
import "./style.scss";
export const Directories = () => {
  const headers = [
    { title: "Название" },
    { title: "Дата изменения" },
    { title: "Статус" },
    { title: "Действие" },
  ];
  const isMob = useWindowResize().width < 1024;
  return (
    <div className="list-pages directories-page">
      <PageListHeader
        titleText="Список справочников"
        description="Список страниц созданный вами. Редактируйте, создавайте и удаляйте."
        buttonText="Создать справочник"
        path="/create-directory"
        // onButtonClick={handleCreatePage}
      />
      {isMob ? (
        <div className="list-page-mobile directories-mob-page">
          {directoriesData.map((item, idx) => (
            <React.Fragment key={idx}>
              <MobileCard {...item} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <WrapperUI className="table-wrapper">
          <TableUI data={directoriesData} headers={headers} />
        </WrapperUI>
      )}
    </div>
  );
};
