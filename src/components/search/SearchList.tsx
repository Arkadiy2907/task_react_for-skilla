import React from "react";
import { useDispatch } from "react-redux";
import SearchItems from "./SearchItems";
import "bootstrap/dist/css/bootstrap.min.css";
import searchData from "../helpers/searchData";
import close from "../../assets/header/close.svg";
import { setFilter } from "../../store/filterSlice";
import { getOptions, arrOptionsCall } from "../helpers/helpersFunc";
import "./style.scss";

let call: number | null;

const SearchList = () => {
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState("Все типы");
  const dispatch = useDispatch();

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelected(event.target.value);
    let values = event.target.value;

    if (values === undefined || values === "Все типы") {
      setVisible(false);
      call = null;
    }
    if (values === "Входящие" || values === "Исходящие") {
      setVisible(true);
    }
    if (values === "Входящие") call = 1;
    if (values === "Исходящие") call = 0;

    dispatch(setFilter(call));
  };

  const clearSelect = () => {
    setVisible(false);
    setSelected("Все типы");
    call = null;
    dispatch(setFilter(call));
  };

  return (
    <>
      <ul className="search__all">
        <li
          className="search__li"
          style={{ visibility: visible ? "visible" : "hidden" }}
        >
          <p>Сбросить фильтры</p>
          <img
            src={close}
            alt="close"
            onClick={clearSelect}
            style={{ cursor: "pointer" }}
          />
        </li>
        <li className="search__li">
          <select
            value={selected}
            id="select"
            className="form-select"
            onChange={handleChange}
          >
            {getOptions(arrOptionsCall)}
          </select>
        </li>

        {!!searchData &&
          searchData.map((item) => {
            return (
              <SearchItems
                id={item.id}
                key={item.id}
                src={item.src}
                alt={item.alt}
                title={item.title}
                class={item.class}
              />
            );
          })}
      </ul>
    </>
  );
};

export default SearchList;
