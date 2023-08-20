import { styled } from "styled-components";

export const Container = styled.section`
  max-width: 1400px;
  margin: 30px auto 130px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h2`
  font-weight: 600;
  font-size: 36px;
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 25px;
  }
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  padding: 0;
  margin: 0 0 24px 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Movie = styled.li``;
