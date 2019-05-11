import React from "react";
import { css } from "@emotion/core";
import hero from "./../images/hero.svg";

export default () => (
  <div>
    <section className="hero__section" css={css``}>
      <div>
        <h1
          css={css`
            font-size: 40px;
            font-weight: 100;
          `}
        >
          Building products should be fast not repetitive. Gatsby Theme to
          rescue.
        </h1>
        <p>Let's make gatsby more accessable with themes! 🍻</p>
      </div>
      <img src={hero} alt="" />
    </section>
  </div>
);
