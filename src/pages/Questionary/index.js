import React from "react";
import TableUI from "../../ui/TableUI";
import WrapperUI from "../../ui/WrapperUI";
import "./style.scss";
import PageListHeader from "../../ui/PageListHeader";
import { Link } from "react-router-dom";
import { anketaData } from "../../helpers/data";
import { useWindowResize } from "../../hooks/useWindowResize";
import MobileCard from "../../components/MobileCard";

const Questionary = () => {
  const headers = [
    { title: "Название" },
    { title: "Создатель" },
    { title: "Дата изменения" },
    { title: "Статус" },
    { title: "Действие" },
  ];
  const isMob = useWindowResize().width < 1024;
  return (
    <div className="list-pages anketa">
      <PageListHeader
        titleText="Анкеты"
        description="Создавайте ваши персональные анкеты, и распространяйте среди пользователей."
        buttonText="Создать анкету"
        path="/create-questionary"
      >
        <div className="questionary-links">
          <Link to="questionary" className="active">
            Анкеты
          </Link>
          <Link>Шаблоны</Link>
          <Link to="directories">Справочники</Link>
        </div>
      </PageListHeader>
      {isMob ? (
        <div className="list-page-mobile questionary-mob">
          {anketaData.map((item, idx) => (
            <React.Fragment key={idx}>
              <MobileCard {...item} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <WrapperUI className="table-wrapper questionary-page">
          <TableUI data={anketaData} headers={headers} />
        </WrapperUI>
      )}
    </div>
  );
};

export default Questionary;
