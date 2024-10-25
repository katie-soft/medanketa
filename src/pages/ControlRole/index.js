import React from 'react';
import { Link } from 'react-router-dom';
import { controlRolesData } from '../../helpers/data';
import ButtonUI from '../../ui/ButtonUI';
import PageListHeader from '../../ui/PageListHeader';
import TableUI from '../../ui/TableUI';
import WrapperUI from '../../ui/WrapperUI';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';

import './style.scss';
import MobileCard from '../../components/MobileCard';
import useWindowResize from '../../hooks/useWindowResize';
export const ControlRoles = () => {
  const headers = [{ title: 'Роль' }, { title: 'Действие' }];
  const isMob = useWindowResize().width < 1024;
  return (
    <div className="list-pages control-roles">
      <PageListHeader
        titleText="Управление ролями"
        description="Создавайте ваши персональные анкеты, и распространяйте среди пользователей"
        buttonText="Добавить роль"
        path="add-role"
        // onButtonClick={handleCreatePage}
      >
        <div>
          <Link to="/users">
            <ButtonUI text="Назад" icon={Arrow} classN="backward-btn" />
          </Link>
        </div>
      </PageListHeader>
      {isMob ? (
        <div className="list-page-mobile roles-mob">
          {controlRolesData.map((item, idx) => (
            <React.Fragment key={idx}>
              <MobileCard {...item} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <WrapperUI className="table-wrapper">
          <TableUI data={controlRolesData} headers={headers} editPath="/editUser" />
        </WrapperUI>
      )}
    </div>
  );
};
