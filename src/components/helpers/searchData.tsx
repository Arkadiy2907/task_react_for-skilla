import arrow from "../../assets/header/arrow.svg";
import { nanoid } from "nanoid";

const searchData = [
  {
    src: `${arrow}`,
    alt: "arrow",
    id: nanoid(),
    class: "visible",
    title: "Все сотрудники",
  },
  {
    src: `${arrow}`,
    alt: "arrow",
    id: nanoid(),
    class: "visible",
    title: "Все звонки",
  },
  {
    src: `${arrow}`,
    alt: "arrow",
    id: nanoid(),
    class: "visible",
    title: "Все источники",
  },
  {
    src: `${arrow}`,
    alt: "arrow",
    id: nanoid(),
    class: "visible",
    title: "Все оценки",
  },
  {
    src: `${arrow}`,
    alt: "arrow",
    id: nanoid(),
    class: "visible",
    title: "Все ошибки",
  },
];

export default searchData;
