import styled from "styled-components";

export const PersonDetailContainer = styled.div`
  max-width: 1400px;
  margin: 30px auto 130px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const PersomDetailWrap = styled.div`
  padding-top: 56px;
`;

export const FilmList = styled.li`
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

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FilmHeader = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  margin-top: 64px;
  margin-bottom: 32px;
  margin-left: 40px;
  font-weight: 600;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;
