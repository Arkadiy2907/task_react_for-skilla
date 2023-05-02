import info from "../../assets/grade/info.svg";
import { IDate } from "../../types";

export const getRandom = (arr: JSX.Element[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const getDate = () => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };
  const DateNow = new Date();
  const DateNowString = DateNow.toLocaleString("ru-RU", dateOptions);

  return (
    DateNowString[0].toUpperCase() +
    DateNowString.slice(1, DateNowString.length - 1)
  );
};

export const getDataUser = (x: string): string =>
  x.split(" ")[1].split(":").slice(0, -1).join(":");

export const getResTooltip = (x: { tooltip: string }[]): JSX.Element => {
  let result = (
    <div className="res">
      <span>&emsp;</span>
    </div>
  );
  if (x.length !== 0) {
    result = (
      <div className="res">
        <img src={info} alt="info" />
        <span>{x[0].tooltip}</span>
      </div>
    );
  }

  return result;
};

export const arrOptionsCall = ["Все типы", "Входящие", "Исходящие"];
export const arrOptionsDate = [
  "3 дня",
  "неделя",
  "месяц",
  "год",
  "указать даты",
];

export const getOptions = (x: string[]): JSX.Element[] => {
  return x.map((text, index) => {
    return <option key={index}>{text}</option>;
  });
};

export const changeObgDate = (y: Date): IDate => {
  return {
    day: y.getDate() < 10 ? `0${y.getDate()}` : `${y.getDate()}`,
    month: y.getMonth() < 10 ? `0${y.getMonth()}` : `${y.getMonth()}`,
    year: `${y.getFullYear()}`,
  };
};
