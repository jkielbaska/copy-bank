import React from "react";
import styled from "@emotion/styled";

interface StripeProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string;
  variant?: "KI" | "PB" | "CN";
}

const StyledStripe = styled.div<StripeProps>`
  height: 10px;
  color: #fff;
  variant: ${(props) => props.variant};
  background: ${(props) =>
    props.background === "KI"
      ? "linear-gradient(to right,#e41e0a 0%,#e41e0a 27%,#201c17 27%,#201c17 32%,#f39100 32%,#f39100 57%,#cc0b18 57%,#cc0b18 73%,#0077bd 73%,#0077bd 77%,#18a035 77%,#18a035 100%)"
      : props.background === "PB"
      ? "linear-gradient(to right,#322d25 0%,#322d25 28%,#981008 28%,#981008 32%,#b89562 32%,#b89562 59%,#645237 59%,#645237 71%,#323d42 71%,#323d42 73%,#9e825d 73%,#9e825d 75%,#151107 75%,#151107 100%)"
      : props.background === "CN"
      ? "linear-gradient(to right,#0000B3 10%,#8095FF 27%,#201c17 17%,#0022CC 32%,#4DA6FF 32%,#4DA6FF 57%,#0022CC 57%,#0022CC 83%,#0077bd 63%,#1987bd 77%,#E6EAFF 77%,#E6EAFF 100%)"
      : "red"};
  border-radius: 3px 3px 0px 0px;
`;

export const ColorStripe: React.FC<React.PropsWithChildren<StripeProps>> = ({
  background = "KI",
  variant = "KI",
}) => {
  return (
    <StyledStripe variant={variant} background={background}></StyledStripe>
  );
};
