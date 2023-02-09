import React from "react";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { Block } from "./Block";
import { Text } from "./Text";
import loginMain from "../assets/loginMain.png";
import avatar_pb from "../assets/avatar_pb.png";
import logoCompany from "../assets/logoCompany.svg";
import klodka from "../assets/klodka.png";
import background from "../assets/background.png";
import background_pb from "../assets/background_pb.png";
// import avatarCompany from "../assets/avatarCompany.png";
// import avatarRetail from "../assets/avatarRetail.png";
// import { Link } from "react-router-dom";
// import { LoginWrapper } from "./LoginWrapper";

const Img = styled.img({ width: "100vw", height: "300px" });

// interface LoginPanelProps {
//   title: string;
//   variant: "KI" | "PB" | "CN";
// }
export const Header = () => {
  const location = useLocation();

  return (
    <div style={{ minHeight: "500px" }}>
      <Block justify="space-between">
        <Block>
          <img
            src={
              location.pathname === "/"
                ? loginMain
                : location.pathname === "/login"
                ? loginMain
                : location.pathname === "/profile"
                ? loginMain
                : location.pathname === "/privatebanking"
                ? avatar_pb
                : location.pathname === "/companyNet"
                ? logoCompany
                : ""
            }
            alt="loginMain"
          />
          <Text size="small" margin="small">
            Zaloguj się do serwisu transakcyjnego
          </Text>
        </Block>
        <Block>
          <img src={klodka} alt="klodka" />
          <Text size="small" margin="small">
            Bezpieczeństwo
          </Text>
        </Block>
      </Block>
      <Img
        src={
          location.pathname === "/"
            ? background
            : location.pathname === "/login"
            ? background
            : location.pathname === "/profile"
            ? background
            : location.pathname === "/privatebanking"
            ? background_pb
            : ""
        }
        alt={"background"}
      ></Img>

      {/* <Block direction="column">
          <Text
            size="big"
            color="white"
            css={css`
              padding-bottom: 20px;
            `}
          >
            Klienci indywidualni i firmowi
          </Text>
          <Link to="/login">
            <img src={avatarRetail} alt="avatarRetail"></img>
          </Link>
        </Block>

        <Block direction="column">
          <Text
            size="big"
            color="white"
            css={css`
              padding-bottom: 20px;
            `}
          >
            Private Banking
          </Text>
          <Link to="/privatebanking">
            <img src={avatar_pb} alt="avatar_pb"></img>
          </Link>
        </Block>

        <Block direction="column">
          <Text
            size="big"
            color="white"
            css={css`
              padding-bottom: 20px;
            `}
          >
            Company Net
          </Text>
          <Link to="/companyNet">
            <img src={avatarCompany} alt="avatarCompany"></img>
          </Link>
        </Block> */}
    </div>
  );
};
