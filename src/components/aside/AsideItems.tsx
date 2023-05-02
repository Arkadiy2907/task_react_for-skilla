import React from "react";
import { AsideDataProps } from "../../types";
import "./style.scss";

const AsideItems: React.FC<AsideDataProps> = (props) => {
  return (
    <li className={`nav-item item ${props.class ? "active" : ""}`}>
      <div className="nav-link">
        <img src={props.src} alt={props.alt} />
        {props.title}
      </div>
      <div className="point">&nbsp;</div>
    </li>
  );
};

export default AsideItems;
