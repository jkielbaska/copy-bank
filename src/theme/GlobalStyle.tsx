import { Global, css } from "@emotion/react";

export const GlobalStyle = () => {
  const styles = css`
    * {
      margin: 0;
      padding: 0;
      font-size: 12px;
      font-family: "FS Lola Light Regular", sans-serif;
    }
    @font-face {
      font-family: "FS Lola Light Regular";
      font-style: normal;
      font-weight: 400;
      src: local('assets/FS Lola Light Regular'),
  `;
  return <Global styles={styles} />;
};
