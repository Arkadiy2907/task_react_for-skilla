import Button from "react-bootstrap/Button";
import red from "../../assets/grade/red.svg";
import redButton from "../../assets/grade/redButton.svg";
import gray from "../../assets/grade/gray.svg";
import grayButton from "../../assets/grade/grayButton.svg";
import green from "../../assets/grade/green.svg";
import greenButton from "../../assets/grade/greenButton.svg";

const recognize = (
  <Button variant="outline-primary" size="sm">
    Распознать
  </Button>
);

const bad = (
  <div className="grade">
    <img src={red} alt="bed"></img>
    <img src={redButton} alt="red Button"></img>
  </div>
);

const ok = (
  <div className="grade">
    <img src={gray} alt="ok"></img>
    <img src={grayButton} alt="gray Button"></img>
  </div>
);

const best = (
  <div className="grade">
    <img src={green} alt="best"></img>
    <img src={greenButton} alt="green Button"></img>
  </div>
);

const noScript = (
  <>
    <span style={{ color: "red", fontSize: "0.6rem" }}>
      Скрипт не использован
    </span>
  </>
);

export const arrGrade = [recognize, ok, best, bad, noScript];
