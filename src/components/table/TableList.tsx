import React from "react";
import { useSelector } from "react-redux";
import TableItems from "./TableItems";
import { getRandom } from "../helpers/helpersFunc";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { arrGrade } from "../helpers/gradeData";
import { arrAvatar } from "../helpers/avatarData";
import { RootState } from "../../types";
import "./style.scss";

const TableList = () => {
  const { status, error } = useSelector((state: RootState) => state.rows);
  const rows = useSelector((state: RootState) => state.rows.rows);
  const search = useSelector((state: RootState) => state.filter.filter);

  const THeader = React.useMemo(() => {
    const arrTh = [
      "Тип",
      "Время",
      "Сотрудник",
      " ",
      "Звонок",
      "Источник",
      "Оценка",
      "Длительность",
    ];
    return arrTh.map((text, index) => {
      return <th key={index}>{text}</th>;
    });
  }, []);

  return (
    <>
      <div className="table__wrap-padding">
        <Table responsive className="table-hover">
          <thead>
            <tr>{THeader}</tr>
          </thead>
          <tbody>
            {!!rows &&
              rows
                .filter((item) => {
                  return search === null ? item : item?.in_out === search;
                })
                .map((item) => {
                  return (
                    <TableItems
                      id={item.id}
                      key={item.id}
                      partnership_id={item.partnership_id}
                      date={item.date}
                      from_site={item.from_site}
                      from_number={item.from_number}
                      source={item.source}
                      time={item.time}
                      in_out={item.in_out}
                      record={item.record}
                      getGrade={getRandom(arrGrade)}
                      results={item.results}
                      status={item.status}
                      avatar={getRandom(arrAvatar)}
                      person_avatar={""}
                    />
                  );
                })}
          </tbody>
        </Table>
      </div>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
    </>
  );
};

export default TableList;
