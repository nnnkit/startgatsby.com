import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

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
        <Link to="/">StartGatsby</Link>
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
            a {
              color: #fff;
            }
          }
        `}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Themes</Link>
        </li>
      </ul>
    </header>
  );
}
