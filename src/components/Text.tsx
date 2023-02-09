import React from "react";
import styled from "@emotion/styled";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  display?: "inline" | "block" | "flex";
  margin?: "big" | "medium" | "small" | "none";
  isCentered?: boolean;
  isUppercase?: boolean;
  size?: "big" | "medium" | "small";
  color?: "black" | "blue" | "white";
  css?: string;
  weight?: string;
}

const StyledText = styled.span<TextProps>`
  display: ${(props) => props.display};
  margin: ${(props) =>
    props.margin === "big"
      ? "40px"
      : props.margin === "medium"
      ? "10px"
      : props.margin === "small"
      ? "5px"
      : ""};
  text-align: ${(props) => (props.isCentered ? "center" : "left")};
  text-transform: ${(props) => (props.isUppercase ? "uppercase" : "none")};
  color: ${(props) => props.color};
  font-size: ${(props) =>
    props.size === "big"
      ? "20px"
      : props.size === "medium"
      ? "16px"
      : props.size === "small"
      ? "12px"
      : ""};
  font-weight: ${(props) => props.weight};
`;

export const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  display = "inline",
  margin = "none",
  isCentered = false,
  isUppercase = false,
  children,
  size = "small",
  color = "black",
  weight = "400",
  css,
}) => {
  return (
    <StyledText
      className={css}
      display={display}
      margin={margin}
      isCentered={isCentered}
      isUppercase={isUppercase}
      size={size}
      color={color}
      weight={weight}
    >
      {children}
    </StyledText>
  );
};
