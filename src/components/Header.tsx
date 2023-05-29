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

const Img = styled.img({ width: "100vw", height: "300px" });

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
      />
    </div>
  );
};
