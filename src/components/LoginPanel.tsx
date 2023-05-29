import React from "react";
import styled from "@emotion/styled";
import avatarRetail from "../assets/avatarRetail.png";
import avatar_pb from "../assets/avatar_pb.png";
import { Text } from "./Text";
import { Block } from "./Block";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../hooks/useLogin";
import { toast } from "react-toastify";

interface LoginPanelProps {
  variant: "KI" | "PB" | "CN";
}

const StyledInput = styled.input({
  minWidth: "240px",
  maxWidth: "320px",
  padding: "1px 2px",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  width: "100%",
  borderBottom: "1px #a4a2a2 solid",
  margin: "0 auto",
  paddingBottom: "5px",
  paddingTop: "20px",
});

export const LoginPanel = ({ variant }: LoginPanelProps) => {
  const navigate = useNavigate();
  const {
    isLoading,
    form: {
      register,
      handleLogin,
      formState: { errors },
    },
  } = useLoginUser({
    onSuccess: (data) => {
      navigate("/profile");
    },
    onError: (error) => {
      if (typeof error !== "string") {
        toast.error(error.message);
      } else {
        toast.error(error);
      }
    },
  });

  return (
    <div>
      <Block>
        <Text size="big">
          {variant === "KI"
            ? "Klienci indywidualni"
            : variant === "PB"
            ? "Public Banking"
            : ""}
        </Text>
      </Block>

      <Block>
        <img
          src={
            variant === "KI" ? avatarRetail : variant === "PB" ? avatar_pb : ""
          }
          alt={variant + "avatarLogo"}
        ></img>
      </Block>

      <form onSubmit={handleLogin}>
        <Block direction="column">
          <StyledInput placeholder="Email" {...register("email")} />
          <Text>{errors?.email?.message}</Text>

          <StyledInput
            type="password"
            placeholder="Hasło"
            {...register("password")}
          />
          <Text>{errors?.password?.message}</Text>
          <Button
            backgroundcolor={variant}
            onClick={() => console.log("click")}
          >
            {isLoading ? "logowanie..." : "Zaloguj się"}
          </Button>
        </Block>
      </form>
    </div>
  );
};
