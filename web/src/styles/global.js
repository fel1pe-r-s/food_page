import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root {
  font-size: 62.5%;
  font-family: "Roboto", sans-serif;
  --poppins: 'Poppins', sans-serif;
  --roboto: 'Roboto', sans-serif;
}

#root {
  font-size: 1.6rem;
  width: 100vw;
  height: 100vh;  
  background: ${({ theme }) => theme.COLORS.Dark400};
  color: $${({ theme }) => theme.COLORS.Light100};
}
`;
