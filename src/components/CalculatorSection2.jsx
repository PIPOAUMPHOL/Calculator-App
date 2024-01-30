/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PushButton from "./PushButton";
import { useState } from "react";

function CalculatorSection2(props) {
  const [displayValue, setDisplayValue] = useState("");
  const [operator, setOperator] = useState("");
  const [plus, setPlus] = useState();
  const [minus, setMinus] = useState();
  const [multiply, setMultiply] = useState();
  const [divide, setDivide] = useState();

  function handleNumberClick(number) {
    setDisplayValue(displayValue + number);
  }

  function handleResetClick() {
    setDisplayValue("");
    setOperator("");
    setPlus(undefined);
    setMinus(undefined);
    setMultiply(undefined);
    setDivide(undefined);
  }

  function handleOperator(op) {
    const currentValue = Number(displayValue);
    setOperator(op);
    if (op === "+") {
      setPlus(currentValue);
    } else if (op === "-") {
      setMinus(currentValue);
    } else if (op === "x") {
      setMultiply(currentValue);
    } else if (op === "/") {
      setDivide(currentValue);
    }
    setDisplayValue("");
  }

  function handleDelClick() {
    if (displayValue.length > 0) {
      let newValue = displayValue.slice(0, -1);
      setDisplayValue(newValue);
    }
  }

  function handleEqualClick() {
    let result;
    const currentValue = Number(displayValue);
    if (operator === "+") {
      result = plus + currentValue;
    } else if (operator === "-") {
      result = minus - currentValue;
    } else if (operator === "x") {
      result = multiply * currentValue;
    } else if (operator === "/") {
      result = divide / currentValue;
    }
    setDisplayValue(result.toString());
  }

  return (
    <>
      <div
        css={css`
          background-color: #181f32;
          width: 100%;
          height: 30%;
          border-radius: 10px;
          margin-top: 10px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        `}
      >
        <p
          css={css`
            margin-right: 30px;
            font-weight: bold;
            font-size: 48px;
            color: white;
          `}
        >
          {displayValue === "" ? "0" : displayValue}
        </p>
      </div>
      <div
        css={css`
          background-color: #252d44;
          width: 100%;
          height: 56%;
          border-radius: 10px;
          margin-top: 10px;
          padding: 10px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          align-content: flex-start;
        `}
      >
        <div
          css={css`
            width: 100%;
            background-color: #252d44;
            height: 20%;
            display: flex;
            justify-content: space-evenly;
          `}
        >
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleNumberClick("7");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              7
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleNumberClick("8");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              8
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleNumberClick("9");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              9
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: #647299;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #355bc4;
              }
            `}
            onClick={() => {
              handleDelClick();
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
                color: white;
              `}
            >
              DEL
            </p>
          </div>
        </div>
        <div
          css={css`
            width: 100%;
            background-color: #252d44;
            height: 20%;
            display: flex;
            justify-content: space-evenly;
          `}
        >
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleNumberClick("4");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              4
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleNumberClick("5");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              5
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleNumberClick("6");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              6
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleOperator("+");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              +
            </p>
          </div>
        </div>
        <div
          css={css`
            width: 100%;
            background-color: #252d44;
            height: 20%;
            display: flex;
            justify-content: space-evenly;
          `}
        >
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleNumberClick("1");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              1
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleNumberClick("2");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              2
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleNumberClick("3");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              3
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleOperator("-");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              -
            </p>
          </div>
        </div>
        <div
          css={css`
            width: 100%;
            background-color: #252d44;
            height: 20%;
            display: flex;
            justify-content: space-evenly;
          `}
        >
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleNumberClick(".");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              .
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleNumberClick(0);
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              0
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleOperator("/");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              /
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 20%;
              height: 80%;
              background-color: silver;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #a4a8b3;
              }
            `}
            onClick={() => {
              handleOperator("x");
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
              `}
            >
              x
            </p>
          </div>
        </div>
        <div
          css={css`
            width: 100%;
            background-color: #252d44;
            height: 20%;
            display: flex;
            justify-content: space-evenly;
          `}
        >
          <div
            className="press-button"
            css={css`
              width: 44%;
              height: 80%;
              background-color: #647299;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #355bc4;
              }
            `}
            onClick={handleResetClick}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
                color: white;
              `}
            >
              RESET
            </p>
          </div>
          <div
            className="press-button"
            css={css`
              width: 44%;
              height: 80%;
              background-color: #d13f30;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              &:hover {
                background-color: #f72323;
              }
            `}
            onClick={() => {
              handleEqualClick();
            }}
          >
            <p
              css={css`
                font-weight: 600;
                font-size: 25px;
                color: white;
              `}
            >
              =
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorSection2;
