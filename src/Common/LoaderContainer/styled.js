import { styled } from "styled-components";

export const LoaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  margin-top: 120px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    margin-top: 24px;
  }
`;
