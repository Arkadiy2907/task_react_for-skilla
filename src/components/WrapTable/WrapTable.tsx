import React from "react";
import { useDispatch } from "react-redux";
import { fetchRows } from "../../store/rowSlise";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import asideData from "../helpers/asideData";
import AsideItems from "../aside/AsideItems";
import plas from "../../assets/aside/plas.svg";
import attention from "../../assets/aside/attention.svg";
import logo from "../../assets/aside/logo.svg";
import analisCall from "../../assets/header/analisCall.svg";
import search from "../../assets/header/search.svg";
import avatar from "../../assets/header/avatar.svg";
import arrow from "../../assets/header/arrow.svg";
import balance from "../../assets/wrapTable/balance.svg";
import TableList from "../table/TableList";
import SearchList from "../search/SearchList";
import {
  getDate,
  getOptions,
  arrOptionsDate,
  changeObgDate,
} from "../helpers/helpersFunc";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const WrapTable = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState("3 дня");

  React.useEffect(() => {
    let today = new Date();
    today.setDate(today.getDate() - 3);

    dispatch(fetchRows(changeObgDate(today)) as any);
  }, [dispatch]);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelected(event.target.value);
    const values = event.target.value;
    let today = new Date();

    if (values === undefined || values === "3 дня") {
      today.setDate(today.getDate() - 3);
    }
    if (values === "неделя") today.setDate(today.getDate() - 7);
    if (values === "месяц") today.setMonth(today.getMonth() - 1);
    if (values === "год") today.setFullYear(today.getFullYear() - 1);

    dispatch(fetchRows(changeObgDate(today)) as any);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={2} sm={12} className="aside">
            <div className="logo">
              <img src={logo} alt="логотип" />
            </div>
            <ul className="nav flex-column primary__nav">
              {!!asideData &&
                asideData.map((item) => {
                  return (
                    <AsideItems
                      title={item.title}
                      key={item.id}
                      src={item.src}
                      alt={item.alt}
                      id={item.id}
                      class={item?.class}
                    />
                  );
                })}

              <Button className="aside__button">
                Добавить заказ
                <img src={plas} alt="plas" />
              </Button>
              <Button className="aside__button">
                Оплата
                <img src={attention} alt="attention" />
              </Button>
            </ul>
          </Col>
          <Col md={10} sm={12} className="main">
            <ul className="header">
              <li className="dateToday">
                <time>{getDate()}</time>
              </li>
              <li className="wrap__call">
                <img src={analisCall} alt="analis Call" />
              </li>
              <li className="search">
                <img src={search} alt="search" />
              </li>
              <li className="user">
                <p>ИП Сидорова Александра Михайловна</p>
                <img src={arrow} alt="arrow" />
              </li>
              <li className="avatar">
                <img src={avatar} alt="avatar" />
              </li>
            </ul>
            <div className="wrapper__content">
              <section className="balance">
                <img src={balance} alt="balance" />
                <span className="span">&#8249;</span>
                <select
                  value={selected}
                  id="select"
                  className="form__select-date"
                  onChange={handleChange}
                >
                  {getOptions(arrOptionsDate)}
                </select>
                <span className="span">&#8250;</span>
              </section>
              <section className="filter">
                <div className="search__call">
                  <img src={search} alt="search" />
                  <p>Поиск по звонкам</p>
                </div>
                <SearchList />
              </section>
              <section className="table__wrap">
                <TableList />
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WrapTable;
