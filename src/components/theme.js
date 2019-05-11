import React from "react";
import { css } from "@emotion/core";
import blog from "./../images/blog.jpg";

export default function theme() {
  return (
    <div
      css={css`
        margin: 20px 0;
        width: 60%;
        margin: 0 auto;
      `}
    >
      <section
        css={css`
          display: flex;
        `}
      >
        <img
          src={blog}
          alt="Simple Blog Theme"
          css={css`
            height: 200px;
            margin-right: 20px;
          `}
        />
        <div>
          <h3>Simple Blog Starter</h3>
          <p>
            Simple blog theme for blogger to start with. In 10 minutes you will
            have your website ready.
          </p>
          <button>See Live Demo</button>
        </div>
      </section>
    </div>
  );
}
