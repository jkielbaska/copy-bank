import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Text } from "./Text";
import { Block } from "./Block";
import { Button } from "./Button";
import { useRegisterUser } from "../hooks/useRegisterUser";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const StyledInput = styled.input({
  width: "70%",
  height: "3vh",
  padding: "5px",
  border: "none",
  outline: "none",
  borderBottom: "1px solid black",
  backgroundColor: "transparent",
});

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegisterPanel = () => {
  const {
    isLoading,
    form: {
      watch,
      register,
      handleRegister,

      formState: { errors },
    },
  } = useRegisterUser({
    onSuccess: (data) => {
      toast.success("zarejestrowano " + data, {
        onClose: () => {
          window.location.reload();
        },
      });
    },
    onError: (error) => {
      if (typeof error !== "string") {
        toast.error(error.message);
      } else {
        toast.error(error);
      }
    },
  });
  const watchAvatar = watch("avatar");
  console.log(watchAvatar);
  // useEffect(() => {
  //   const watchAvatar = watch((value) => console.log(value));
  // }, [watch]);

  return (
    <StyledForm onSubmit={handleRegister}>
      <Block
        direction="column"
        width="halfWidth"
        height="halfHeight"
        css={css`
          border-radius: 10px 10px 10px 10px;
          background-color: #f2f2f2;
        `}
      >
        <Text size="big">Zarejestruj się</Text>
        <StyledInput type="text" placeholder="Imię" {...register("name")} />
        <Text>{errors?.name?.message}</Text>
        <StyledInput
          type="text"
          placeholder="Nazwisko"
          {...register("surname")}
        />
        <Text>{errors?.surname?.message}</Text>
        <StyledInput type="text" placeholder="Email" {...register("email")} />
        <Text>{errors?.surname?.message}</Text>
        <StyledInput
          type="tel"
          placeholder="Numer telefonu"
          {...register("phonenumber")}
        />
        <StyledInput
          type="text"
          placeholder="Identyfikator"
          {...register("login")}
        />
        <Text>{errors?.surname?.message}</Text>
        <StyledInput
          type="password"
          placeholder="Hasło"
          {...register("password")}
        />
        <Text>{errors?.surname?.message}</Text>

        <Block>
          <select {...register("avatar")}>
            <option value="MB">mb</option>
            <option value=" MS">ms</option>
            <option value=" R2">r2</option>
          </select>
        </Block>

        <Button width="medium" height="medium" backgroundcolor="brown">
          {isLoading ? "sending..." : "wyslij"}
        </Button>
      </Block>
    </StyledForm>
  );
};
