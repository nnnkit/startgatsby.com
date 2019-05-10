import React from "react";
import { css } from "@emotion/core";

export default function header() {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
        background: #455a64;
        align-items: center;
      `}
    >
      <h2
        css={css`
          color: white;
        `}
      >
        StartGatsby
      </h2>
      <ul
        css={css`
          display: flex;
          align-items: center;
          li {
            list-style: none;
            border: 1px solid tomato;
            padding: 0.5rem 1rem;
            margin-right: 1rem;
            color: #fff;
          }
        `}
      >
        <li>Home</li>
        <li>Themes</li>
      </ul>
    </header>
  );
}
