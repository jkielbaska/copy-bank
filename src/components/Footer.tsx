import React from "react";
import { css } from "@emotion/css";
import adv from "../assets/adv.png";
import { Block } from "./Block";
import { Text } from "./Text";

export const Footer = () => {
  return (
    <>
      <Block
        css={css`
          background-color: #e8ebea;
        `}
        width="full"
      >
        <img src={adv} alt="adv"></img>
      </Block>

      <Block
        css={css`
          margin-top: 30px;
        `}
      >
        <Block
          direction="column"
          align="flex-start"
          css={css`
            margin: 5px;
          `}
        >
          <Text display="block" margin="medium" size="big">
            mBank ostrzega!
          </Text>
          <Text
            size="small"
            css={css`
              padding-left: 40px;
            `}
          >
            Uważaj na oszustów wyłudzających dane oraz podszywających się pod
            popularną platformę z filmami i serialami! - więcej
          </Text>
          <Text size="big" display="block" margin="medium">
            Bezpieczeństwo
          </Text>

          <Text
            margin="medium"
            display="block"
            css={css`
              padding-left: 40px;
            `}
          >
            <Text weight="600">1. mBank ostrzega!- więcej </Text>
            <p>
              <Text weight="600">2.</Text> Złote zasady bezpieczeństwa -{" "}
              <Text weight="600">więcej</Text>
            </p>
            <p>
              <Text weight="600">3.</Text> Bezpieczny bank w komputerze -{" "}
              <Text weight="600">więcej</Text>
            </p>
            <p>
              <Text weight="600">4.</Text> Bezpieczny bank w telefonie i na
              tablecie - <Text weight="600">więcej</Text>
            </p>
            <p>
              <Text weight="600">5.</Text> Bezpieczeństwo kart płatniczych -
              <Text weight="600">więcej</Text>
            </p>
            <p>
              <Text weight="600">6.</Text> Jak mBank dba o Twoje bezpieczeństwo
              - <Text weight="600">więcej</Text>
            </p>
          </Text>
        </Block>

        <Block direction="column">
          <Text size="big" display="block" margin="medium">
            Masz problem z zalogowaniem?
          </Text>
          <p> Sprawdź jak odblokować dostęp do serwisu transakcyjnego</p>
          <Text size="big" display="block" margin="medium">
            Kontakt
          </Text>
          <sub>mLinia</sub>
          <p> +48 997</p>
        </Block>
      </Block>
    </>
  );
};
