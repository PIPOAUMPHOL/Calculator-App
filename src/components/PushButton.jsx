/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function PushButton(props) {
  return (
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
        {props.button}
      </p>
    </div>
  );
}

export default PushButton;
