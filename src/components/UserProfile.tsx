import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { AvatarLogo } from "./AvatarLogo";
import { Block } from "./Block";
import { Text } from "./Text";
import { auth } from "../firebase/firebase";
import { useUserData } from "../hooks/useUserData";

const LoggedFrame = styled.div({
  zIndex: 100,
  marginTop: "80px",
  width: "40vw",
  height: "50vh",
  maxWidth: "750px",
  maxHeight: "350px",
  minWidth: "250px",
  minHeight: "250px",
  fontSize: "20px",
  fontWeight: "200",
  backgroundColor: "#F2F2F2",
  borderRadius: "20px 20px 20px 20px",
});

export const UserProfile = () => {
  const userId = auth.currentUser?.uid;
  console.log(userId);
  const userData = useUserData({ userId });

  return (
    <Block
      css={css`
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
      `}
    >
      <LoggedFrame>
        <Block
          direction="column"
          css={css`
            padding: 10px 10px 15px 10px;
          `}
        >
          <AvatarLogo avatar={userData?.avatar} />
          <Text size="big">{userData?.name}</Text>
        </Block>

        <Block
          direction="column"
          css={css`
            padding: 0px 10px 15px 10px;
          `}
        >
          <Text>stan Twojego konta wynosi: </Text>
          <Text size="big">
            {Math.floor(Math.random() * 100000) + 1 + " zł"}
          </Text>
        </Block>

        <Block>
          <Text>ostatnie operacje:</Text>
        </Block>
      </LoggedFrame>
    </Block>
  );
};
