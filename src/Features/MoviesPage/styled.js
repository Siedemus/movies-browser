import { styled } from "styled-components";

export const Container = styled.section`
  max-width: 1400px;
  margin: 30px auto;
  padding: 0 20px;
`;

export const Header = styled.h2`
  font-weight: 600;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 25px;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0;
`;

export const Movie = styled.li``;
