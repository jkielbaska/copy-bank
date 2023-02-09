import React from "react";
import { css } from "@emotion/css";
import * as Tabs from "@radix-ui/react-tabs";
import styled from "@emotion/styled";
import { ColorStripe } from "./ColorStripe";
import { Text } from "./Text";
import { Block } from "./Block";
import { RegisterPanel } from "./RegisterPanel";
import { LoginPanel } from "./LoginPanel";

const LoginFrame = styled.div({
  // zIndex: 100,
  marginTop: "80px",
  width: "auto",
  height: "auto",
  maxWidth: "450px",
  maxHeight: "550px",
  minWidth: "250px",
  minHeight: "300px",
  fontSize: "20px",
  fontWeight: "200",
  backgroundColor: "#F2F2F2",
  borderRadius: "0px 0px 10px 10px",
});

// interface LoginTabsProps {
//   title: string;
//   variant: "KI" | "PB" | "CN";
// }

const TabsTriggedStyled = styled(Tabs.Trigger)({
  border: "none",
  paddingRight: "10px",
  // display: "flex"//po dodaniu flexa znika colorstripe
  // position: "absolute",
  // left: 0,
});

export const LoginTabs = () => {
  return (
    <Block
      css={css`
        position: absolute;
        top: -30px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        gap: 50px;
      `}
    >
      <LoginFrame>
        <Tabs.Root defaultValue="KI">
          <Tabs.List>
            <TabsTriggedStyled value="KI">
              <ColorStripe background="KI"></ColorStripe>
              <Block
                width="full"
                height="title"
                direction="column"
                justify="space-around"
              >
                <Text size="big">Klienci indywidualni</Text>
              </Block>
            </TabsTriggedStyled>

            <TabsTriggedStyled
              value="PB"
              className={css`
                border: none;
                padding-right: 10px;
              `}
            >
              <ColorStripe background="PB"></ColorStripe>
              <Block
                width="full"
                height="title"
                direction="column"
                justify="space-around"
              >
                <Text size="big">Public Banking</Text>
              </Block>
            </TabsTriggedStyled>

            <TabsTriggedStyled
              value="CN"
              className={css`
                border: none;
                padding-right: 10px;
              `}
            >
              <ColorStripe background="CN"></ColorStripe>
              <Block
                width="full"
                height="title"
                direction="column"
                justify="space-around"
              >
                <Text size="big">Rejestracja</Text>
              </Block>
            </TabsTriggedStyled>
          </Tabs.List>

          <Tabs.Content value="KI">
            <LoginPanel variant="KI" />
          </Tabs.Content>

          <Tabs.Content value="PB">
            <LoginPanel variant="PB" />
          </Tabs.Content>

          <Tabs.Content value="CN">
            <Block>
              <RegisterPanel />
            </Block>
          </Tabs.Content>
        </Tabs.Root>
      </LoginFrame>
    </Block>
  );
};

/* <LoginFrame>
<Tabs.Root>
  <Tabs.List>
    <Tabs.Trigger value={title}>
      <ColorStripe background={variant}></ColorStripe>
      <Block
        width="full"
        height="title"
        direction="column"
        justify="space-around"
      >
        <Text size="big">{title}</Text>
      </Block>
    </Tabs.Trigger>
    <Tabs.Trigger value="tab">
      <ColorStripe background={variant}></ColorStripe>
      <Block
        width="full"
        height="title"
        direction="column"
        justify="space-around"
      >
        <Text size="big">Rejestracja</Text>
      </Block>
    </Tabs.Trigger>
  </Tabs.List>

  {/* <LoginFrame> */

//   <Tabs.Content value={title}>
//     <Block>
//       <img src={avatarRetail} alt={variant + "avatarLogo"}></img>
//     </Block>
//     <Block>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <StyledInput
//           placeholder="Identyfikator"
//           {...register("Identyfikator", {
//             required: true,
//             maxLength: 20,
//           })}
//         />
//         <div>
//           {formState?.errors?.login && (
//             <span>This field is required, max length 20</span>
//           )}
//         </div>

//         <StyledInput
//           type="password"
//           placeholder="Hasło"
//           {...register("Hasło", { required: true, maxLength: 20 })}
//         />

//         {formState?.errors?.haslo && <span>max length 20</span>}
//       </form>
//     </Block>

//     <Button backgroundcolor={variant}>Zaloguj się</Button>

//     <Block justify="end">
//       <Link to="/register">Nie masz konta? Zarejestruj się.</Link>
//     </Block>
//   </Tabs.Content>
//   {/* </LoginFrame> */}
// </Tabs.Root>
// </LoginFrame> */}
