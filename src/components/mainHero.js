import React from "react";
import { css } from "@emotion/core";
import hero from "./../images/hero.svg";

export default () => (
  <div>
    <section className="hero__section">
      <div>
        <h1
          css={css`
            font-size: 40px;
            font-weight: 100;
          `}
        >
          Blazing Fast Website In Few Lines Of Code With Gatsy Themes
        </h1>
        <p css={css``}>Let's make gatsby more accessable with themes! 🍻</p>
      </div>
      <img src={hero} alt="" />
    </section>
  </div>
);
