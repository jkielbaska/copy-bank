import React from "react";
import styled from "@emotion/styled";
import { getValidChildren } from "../utils/getValidChildren";

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: number;
  divider?: React.ReactNode;
  display?: "flex" | "none";
  align?: "center" | "flex-start" | "flex-end";
  justify?:
    | "center"
    | "start"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  direction?: "row" | "column";
  width?: "auto" | "full" | "fullWidth" | "halfWidth";
  height?: "auto" | "title" | "min" | "halfHeight";
  as?: React.ElementType;
  css?: string;
}

const StyledBlock = styled.div<BlockProps>`
  display: ${(props) => props.display};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
  width: ${(props) =>
    props.width === "auto"
      ? "auto"
      : props.width === "full"
      ? "100%"
      : props.width === "fullWidth"
      ? "100vw"
      : props.width === "halfWidth"
      ? "40vw"
      : ""};
  height: ${(props) =>
    props.height === "auto"
      ? "auto"
      : props.height === "title"
      ? "60px"
      : props.height === "min"
      ? "10px"
      : props.height === "halfHeight"
      ? "40vh"
      : ""};
  ${(props) => props.css}
`;

export const Block: React.FC<React.PropsWithChildren<BlockProps>> = ({
  children,
  display = "flex",
  align = "center",
  justify = "center",
  direction = "row",
  width = "auto",
  height = "auto",
  spacing = 0,
  divider,
  css,
  as,
  ...restProps
}) => {
  const hasDivider = !!divider;
  const shouldUseChildren = !hasDivider;
  const validChildren = getValidChildren(children);

  const clones = shouldUseChildren
    ? validChildren
    : validChildren.map((child, idx) => {
        if (!hasDivider) {
          return child;
        }

        const isLast = idx + 1 === validChildren.length;
        const _divider = isLast ? null : divider;

        return (
          <React.Fragment key={idx}>
            {child}
            {_divider}
          </React.Fragment>
        );
      });

  return (
    <StyledBlock
      display={display}
      className={css}
      as={as}
      align={align}
      justify={justify}
      direction={direction}
      width={width}
      height={height}
      {...restProps}
    >
      {clones}
    </StyledBlock>
  );
};
