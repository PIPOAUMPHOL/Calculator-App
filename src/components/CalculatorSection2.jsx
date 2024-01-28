/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function CalculatorSection2() {
  return (
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
        158,5464
      </p>
    </div>
  );
}

export default CalculatorSection2;
