import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  width?: "full" | "medium" | "small";
  height?: "big" | "medium" | "small";
  fontsize?: "big" | "normal" | "small";
  backgroundcolor?:
    | "white"
    | "black"
    | "green"
    | "transparent"
    | "brown"
    | "KI"
    | "PB"
    | "CN";

  color?: "white" | "black" | "green" | "brown";
  border?: "none" | "light" | "hard";
  borderradius?: "big" | "medium" | "small";
  margintop?: "big" | "medium" | "small";
  css?: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${(props) =>
    props.width === "full"
      ? "100%"
      : props.width === "medium"
      ? "75%"
      : props.width === "small"
      ? "50%"
      : ""};

  height: ${(props) =>
    props.height === "big"
      ? "25%"
      : props.height === "medium"
      ? "15%"
      : props.height === "small"
      ? "5%"
      : ""};

  font-size: ${(props) =>
    props.fontsize === "big"
      ? "20px"
      : props.fontsize === "normal"
      ? "12px"
      : props.fontsize === "small"
      ? "8px"
      : ""};

  background-color: ${(props) =>
    props.backgroundcolor === "white"
      ? "white"
      : props.backgroundcolor === "black"
      ? "black"
      : props.backgroundcolor === "green"
      ? "#3FB83F"
      : props.backgroundcolor === "transparent"
      ? "transparent"
      : props.backgroundcolor === "brown"
      ? "#A68860"
      : props.backgroundcolor === "KI"
      ? "#3FB83F"
      : props.backgroundcolor === "PB"
      ? "#A68860"
      : props.backgroundcolor === "CN"
      ? "#99CCFF"
      : ""};

  color: ${(props) =>
    props.color === "white"
      ? "white"
      : props.color === "black"
      ? "black"
      : props.color === "green"
      ? "#3FB83F"
      : props.color === "brown"
      ? "#A68860"
      : ""};

  border: ${(props) =>
    props.border === "none"
      ? "none"
      : props.border === "light"
      ? "2px"
      : props.border === "hard"
      ? "5px"
      : ""};

  border-radius: ${(props) =>
    props.borderradius === "big"
      ? "10px 10px 10px 10px"
      : props.borderradius === "medium"
      ? "5px 5px 5px 5px"
      : props.borderradius === "small"
      ? "2px 2px 2px 2px"
      : ""};

  margin-top: ${(props) =>
    props.margintop === "big"
      ? "25px"
      : props.margintop === "medium"
      ? "15px"
      : props.margintop === "small"
      ? "5px"
      : ""};
  ${(props) => props.css}
`;

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  width = "full",
  height = "medium",
  fontsize = "big",
  backgroundcolor = "green",
  color = "white",
  border = "none",
  borderradius = "medium",
  margintop = "big",
  children,
  css,
  ...restProps
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      fontsize={fontsize}
      backgroundcolor={backgroundcolor}
      color={color}
      border={border}
      borderradius={borderradius}
      margintop={margintop}
      className={css}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};
