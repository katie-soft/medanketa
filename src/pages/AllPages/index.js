import React from "react";
import TableUI from "../../ui/TableUI";
import WrapperUI from "../../ui/WrapperUI";
import "./style.scss";
import { allPageData } from "../../helpers/data";
import PageListHeader from "../../ui/PageListHeader";
import useWindowResize from "../../hooks/useWindowResize";
import MobileCard from "../../components/MobileCard";
export const AllPages = () => {
  const headers = [
    { title: "Название" },
    { title: "Дата изменения" },
    { title: "Статус" },
    { title: "Действие" },
  ];
  const isMob = useWindowResize().width < 1024;
  return (
    <div className="list-pages allpage">
      <PageListHeader
        titleText="Список страниц"
        description="Список страниц созданный вами. Редактируйте, создавайте и удаляйте."
        buttonText="Создать страницу"
        path="createpage"
      />
      {isMob ? (
        <div className="list-page-mobile">
          {allPageData.map((item, idx) => (
            <React.Fragment key={idx}>
              <MobileCard {...item} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <WrapperUI className="table-wrapper">
          <TableUI data={allPageData} headers={headers} />
        </WrapperUI>
      )}
    </div>
  );
};
