import styled from "styled-components";

export const PersonDetailContainer = styled.div`
  max-width: 1400px;
  margin: 30px auto 130px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PersomDetailWrap = styled.div`
  margin: auto;
  padding-top: 56px;
`;

export const FilmList = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0;
`;

export const FilmHeader = styled.h2`
  color: ${({ theme }) => theme.colors.black};

  margin-top: 64px;
  margin-bottom: 0px;
  margin-left: 40px;
  font-weight: 600;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;
