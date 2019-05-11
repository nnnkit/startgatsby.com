import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

export default function header() {
  return (
    <header>
      <h2>
        <Link to="/">Start Gatsby</Link>
      </h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
