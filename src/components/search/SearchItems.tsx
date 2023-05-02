import React from "react";
import { SearchDataProps } from "../../types";

const SearchItems: React.FC<SearchDataProps> = (props) => {
  return (
    <>
      {props.class === "visible" && (
        <li className="search__li">
          <p>{props.title}</p>
          <img src={props.src} alt={props.alt} />
        </li>
      )}
    </>
  );
};

export default SearchItems;
