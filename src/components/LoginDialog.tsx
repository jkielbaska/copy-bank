import React from "react";
import { Block } from "./Block";
import { SetDialog } from "./SetDialog";
import { css } from "@emotion/css";

export const LoginDialog = () => {
  console.log(window.innerWidth);
  return (
    <Block
      justify="space-evenly"
      css={css`
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        gap: 20px;
        top: 70px;
      `}
    >
      <SetDialog variant="KI"></SetDialog>
      <SetDialog variant="PB"></SetDialog>
      <SetDialog variant="CN"></SetDialog>
    </Block>
  );
};
