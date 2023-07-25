import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
 background-color: ${({ theme }) => theme.colors.grayish};
 font-family: "Poppins";
}
`;
