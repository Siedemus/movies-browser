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

export const PeopleList = styled.ul`
  padding: 0px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    grid-template-columns: repeat(5, 1fr);
    padding-right: 16px;
    padding-left: 16px;
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ItemPeopleList = styled.li``;
