/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CalculatorSection1 from "./CalculatorSection1";
import CalculatorSection2 from "./CalculatorSection2";

function MainComponents() {
  return (
    <div
      css={css`
        background-color: #3b4664;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className="calculator-container"
        css={css`
          width: 30%;
          height: 80%;
          background-color: #3b4664;
          padding: 10px;
          border-radius: 10px;
        `}
      >
        <CalculatorSection1 />

        <CalculatorSection2 />
      </div>
    </div>
  );
}

export default MainComponents;
