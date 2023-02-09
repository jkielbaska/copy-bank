import * as Avatar from "@radix-ui/react-avatar";
import styled from "@emotion/styled";
import R2D2 from "../assets/R2D2.png";
import MoneyBag from "../assets/MoneyBag.png";
import MoneyWithEyes from "../assets/MoneyWithEyes.png";

interface AvatarLogoProps {
  avatar?: "R2" | "MB" | "MS" | "OTH";
}
const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;
export const AvatarLogo = ({ avatar }: AvatarLogoProps) => (
  <Avatar.Root>
    <StyledImg
      src={
        avatar === "R2"
          ? R2D2
          : avatar === "MB"
          ? MoneyBag
          : avatar === "MS"
          ? MoneyWithEyes
          : ""
      }
      alt={avatar + " ChoosenAvatar"}
    ></StyledImg>
  </Avatar.Root>
);
//Money Bag icon by Icons8
//Bonds icon by Icons8
//R2-D2 icon by Icons8
