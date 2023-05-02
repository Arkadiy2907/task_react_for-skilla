import chart from "../../assets/aside/chart.svg";
import orders from "../../assets/aside/orders.svg";
import mail from "../../assets/aside/mail.svg";
import phone from "../../assets/aside/phone.svg";
import people from "../../assets/aside/people.svg";
import doc from "../../assets/aside/doc.svg";
import man from "../../assets/aside/man.svg";
import briefcase from "../../assets/aside/briefcase.svg";
import book from "../../assets/aside/book.svg";
import gear from "../../assets/aside/gear.svg";
import { nanoid } from "nanoid";

const asideData = [
  { src: `${chart}`, alt: "chart", id: nanoid(), title: "Итоги" },
  { src: `${orders}`, alt: "orders", id: nanoid(), title: "Заказы" },
  { src: `${mail}`, alt: "mail", id: nanoid(), title: "Сообщения" },
  { src: `${phone}`, alt: "phone", id: nanoid(), title: "Звонки", class: true },
  { src: `${people}`, alt: "people", id: nanoid(), title: "Контрагенты" },
  { src: `${doc}`, alt: "doc", id: nanoid(), title: "Документы" },
  { src: `${man}`, alt: "man", id: nanoid(), title: "Исполнители" },
  { src: `${briefcase}`, alt: "briefcase", id: nanoid(), title: "Отчеты" },
  { src: `${book}`, alt: "book", id: nanoid(), title: "База знаний" },
  { src: `${gear}`, alt: "gear", id: nanoid(), title: "Настройки" },
];

export default asideData;
