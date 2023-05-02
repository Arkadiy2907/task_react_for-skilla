import React from "react";
import Player from "../player/player";
import { getDataUser, getResTooltip } from "../helpers/helpersFunc";
import { TableBodyProps, ICallUser } from "../../types";
import outCall from "../../assets/table/outCall.svg";
import inCall from "../../assets/table/inCall.svg";
import noOutCall from "../../assets/table/noOutCall.svg";
import noInCall from "../../assets/table/noInCall.svg";
import web from "../../assets/table/web.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const TableItems: React.FC<TableBodyProps> = (props) => {
  const [boxClassName, setBoxClassName] = React.useState("li__last");

  const handleMouseEnter = (e: React.MouseEvent<HTMLTableRowElement>) => {
    setBoxClassName("li__last active__player");
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLTableRowElement>) => {
    setBoxClassName("li__last");
  };

  const callUser: ICallUser =
    props.in_out === 0
      ? { src: outCall, alt: "call out" }
      : { src: inCall, alt: "call in" };

  const noCallUser: ICallUser =
    props.in_out === 0
      ? { src: noOutCall, alt: "no call out" }
      : { src: noInCall, alt: "no call in" };

  const secondsToTime = React.useCallback((seconds: number): string => {
    const minutes =
      Math.floor(seconds / 60) < 10
        ? `0${Math.floor(seconds / 60)}`
        : Math.floor(seconds / 60);
    const remainingSeconds =
      seconds % 60 < 10 ? `0${Math.floor(seconds / 60)}` : seconds % 60;
    return `${minutes}:${remainingSeconds}`;
  }, []);

  return (
    <tr onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <td>
        {props.status === "Не дозвонился" ? (
          <img src={noCallUser.src} alt={noCallUser.alt} />
        ) : (
          <img src={callUser.src} alt={callUser.alt} />
        )}
      </td>
      <td>{getDataUser(props.date)}</td>
      <td>{props.avatar}</td>
      <td>{props.from_site === 1 ? <img src={web} alt="web" /> : ""}</td>
      <td>{props.from_number}</td>
      <td>{props.source}</td>
      <td>
        <div className="review">
          {props.time === 0 ? "" : props.getGrade}
          {props.time === 0 ? "" : getResTooltip(props.results)}
        </div>
      </td>
      <td>
        {props.time === 0 ? (
          ""
        ) : (
          <div className={boxClassName}>
            <span className="li__time">{secondsToTime(props.time)}</span>
            <div className="li__player">
              <Player
                record={props.record}
                partnership_id={props.partnership_id}
                time={props.time}
              />
            </div>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TableItems;
