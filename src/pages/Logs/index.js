import React from "react";
import { logsData } from "../../helpers/data";
import PageListHeader from "../../ui/PageListHeader";
import TableUI from "../../ui/TableUI";
import WrapperUI from "../../ui/WrapperUI";
import "./style.scss";
import { useWindowResize } from "../../hooks/useWindowResize";
import MobileCard from "../../components/MobileCard/index";
export const Logs = () => {
  const headers = [{ title: "Тип события" }, { title: "Дата" }];
  const isMob = useWindowResize().width < 1024;
  return (
    <div className="list-pages logs-page">
      <PageListHeader
        titleText="Логи"
        description="Создавайте ваши персональные анкеты, и распространяйте среди пользователей"
        // onButtonClick={handleCreatePage}
      />
      {isMob ? (
        <div className="list-page-mobile logs-mob">
          {logsData.map((item, idx) => (
            <React.Fragment key={idx}>
              <MobileCard {...item} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <WrapperUI className="table-wrapper">
          <TableUI data={logsData} headers={headers} />
        </WrapperUI>
      )}
    </div>
  );
};
