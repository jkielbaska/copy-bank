import React from "react";
import styled from "@emotion/styled";
import * as Dialog from "@radix-ui/react-dialog";
import { ColorStripe } from "./ColorStripe";
import { Text } from "./Text";
import { Block } from "./Block";
import { Cross2Icon } from "@radix-ui/react-icons";
import { RegisterPanel } from "./RegisterPanel";
import { LoginPanel } from "./LoginPanel";
import avatarRetail from "../assets/avatarRetail.png";
import avatar_pb from "../assets/avatar_pb.png";
import avatarCompany from "../assets/avatarCompany.png";

interface SetDialogProps {
  variant: "KI" | "PB" | "CN";
}
const StyledContent = styled(Dialog.Content)({
  backgroundColor: "#F2F2F2",
  borderRadius: 5,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -90%)",
  width: "90vw",
  maxWidth: "430px",
  maxHeight: "85vh",
  padding: 25,
});

const LoginFrame = styled.div({
  marginTop: "65px",
  width: "auto",
  height: "auto",
  maxWidth: "450px",
  maxHeight: "250px",
  minWidth: "250px",
  minHeight: "250px",
  fontSize: "20px",
  fontWeight: "200",
  backgroundColor: "#F2F2F2",
  borderRadius: "1px 10px 10px 10px",
});

const StyledLogin = styled<any>(LoginFrame)`
  display: ${(props) => (props["data-state"] === "open" ? "none" : "block")};
`;

export const SetDialog = ({ variant }: SetDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <StyledLogin>
          <ColorStripe background={variant}></ColorStripe>
          <Block width="full" height="title" direction="column">
            <Text size="big">
              {variant === "KI"
                ? "Klienci indywidualni"
                : variant === "PB"
                ? "Public Banking"
                : variant === "CN"
                ? "Zarejestruj się"
                : ""}
            </Text>
          </Block>
          <Block>
            <img
              src={
                variant === "KI"
                  ? avatarRetail
                  : variant === "PB"
                  ? avatar_pb
                  : variant === "CN"
                  ? avatarCompany
                  : ""
              }
              alt={variant + "avatarLogo"}
            ></img>
          </Block>
        </StyledLogin>
      </Dialog.Trigger>

      <Dialog.Overlay asChild />
      <StyledContent>
        <Dialog.Close asChild>
          <Cross2Icon />
        </Dialog.Close>
        {variant === "KI" ? (
          <LoginPanel variant="KI" />
        ) : variant === "PB" ? (
          <LoginPanel variant="PB" />
        ) : variant === "CN" ? (
          <RegisterPanel />
        ) : (
          ""
        )}
      </StyledContent>
    </Dialog.Root>
  );
};
