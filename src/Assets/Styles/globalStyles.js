import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.grayish};
    font-family: "Poppins";
}
`;
