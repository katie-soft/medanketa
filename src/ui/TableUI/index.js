import React from "react";
import ToggleButtonUI from "../../ui/ToggleButtonUI";
import { ReactComponent as Pen } from "../../assets/svg/pen.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { IconWrapperUI } from "../../ui/IconWrapperUI";
import "./tableUI.scss";
import { useNavigate } from "react-router-dom";

const TableUI = ({
  data,
  headers,
  setTabIndex,
  index,
  editPath,
  hasOnClick,
}) => {
  const columnCount = headers.length;
  const hasCreatorData = data.some((row) => row.creator);
  const hasTitle = data.some((row) => row.name);
  const hasDateData = data.some((row) => row.date);
  const hasRole = data.some((row) => row.role);
  const hasActive = data.some((row) => row.active);
  const edit = data.some((row) => row.edit);
  const hasRecipient = data.some((row) => row.recipient);
  const remove = data.some((row) => row.remove);

  const navigate = useNavigate();
  const editFunctionality = () => {
    if (editPath) {
      navigate(editPath);
    }
    setTabIndex && setTabIndex(index);
  };

  return (
    <div className="table-container">
      <table className={`${!(edit || remove) ? "" : "td-radius"}`}>
        <thead>
          <tr className="table-header-tr">
            {headers.map((header, index) => (
              <th
                key={index}
                style={{ width: `calc(100% / ${columnCount - 1})` }}
              >
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const hasActionColumn = edit || remove;
            const lastColumnClass = hasActionColumn ? "" : "penultimate";

            return (
              <tr key={rowIndex} className="table-content-tr">
                {hasTitle && (
                  <td
                    style={{ width: `calc(100% / ${columnCount - 1})` }}
                    onClick={hasOnClick ? hasOnClick : undefined}
                  >
                    {hasRole ? (
                      <>
                        {row.name}{" "}
                        {row.iconTitle && (
                          <span className="row-role-icon">{row.iconTitle}</span>
                        )}
                      </>
                    ) : (
                      <>
                        {row.iconTitle && (
                          <span className="row-icon">{row.iconTitle}</span>
                        )}
                        {row.name}
                      </>
                    )}
                  </td>
                )}

                {hasRecipient && (
                  <td style={{ width: `calc(100% / ${columnCount - 1})` }}>
                    {row.recipient || " "}
                  </td>
                )}

                {hasRole && (
                  <td style={{ width: `calc(100% / ${columnCount - 1})` }}>
                    {row.role || " "}
                    {row.iconRole && (
                      <span className="row-creator-icon">{row.iconRole}</span>
                    )}
                  </td>
                )}

                {row.typeAction && (
                  <td style={{ width: `calc(100% / ${columnCount - 1})` }}>
                    {row.typeAction}{" "}
                    <span className="row-creator-icon">{row.iconType}</span>{" "}
                    {row.action}
                    <span className="ordernumber">{row.orderNumber}</span>
                  </td>
                )}

                {hasCreatorData && (
                  <td style={{ width: `calc(100% / ${columnCount - 1})` }}>
                    {row.creator || " "}
                    {row.iconCreator && (
                      <span className="row-creator-icon">
                        {row.iconCreator}
                      </span>
                    )}
                  </td>
                )}

                {hasDateData && (
                  <td style={{ width: `calc(100% / ${columnCount - 1})` }}>
                    {row.iconDate && (
                      <span className="row-icon">{row.iconDate}</span>
                    )}
                    {row.date || " "}
                  </td>
                )}

                {hasActive && (
                  <td style={{ width: `calc(100% / ${columnCount - 1})` }}>
                    <ToggleButtonUI isActive={row.active} />
                  </td>
                )}
                {(edit || remove) && (
                  <td className={lastColumnClass}>
                    {edit && (
                      <IconWrapperUI
                        classN="edit-button"
                        bgColor="#F0F4F6"
                        onClick={editFunctionality}
                      >
                        <Pen />
                      </IconWrapperUI>
                    )}
                    {remove && (
                      <IconWrapperUI
                        classN="remove-button"
                        border="true"
                        borderColor="#F0F4F6"
                        bgColor="white"
                      >
                        <Close />
                      </IconWrapperUI>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableUI;
