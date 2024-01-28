/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PushButton from "./PushButton";
import { useState } from "react";

function CalculatorSection3() {
  const [number, setNumber] = useState();
  const [sum, setSum] = useState();
  const [plus, setPlus] = useState();
  const [minus, setMinus] = useState();
  const [multiply, setMultiply] = useState();
  const [divide, setDivide] = useState();

  /*   function handleClickNumber(event) {
    setNumber(event)

  } */

  return (
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
        >
          <p
            css={css`
              font-weight: 600;
              font-size: 25px;
            `}
            onClick={handleClickNumber}
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
  );
}

export default CalculatorSection3;
