/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function CalculatorSection1() {
  return (
    <div
      css={css`
        border-radius: 10px;
        background-color: #3b4664;
        height: 10%;
      `}
    >
      <div
        css={css`
          font-weight: bold;
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          margin-left: 10px;
          font-size: 25px;
          color: white;
        `}
      >
        calc
      </div>
    </div>
  );
}

export default CalculatorSection1;
