import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.article`
  margin: auto;
  width: 208px;
  background: ${({ theme }) => theme.colors.white};
  height: 339px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    margin: auto;
    height: 245x;
    max-width: 500px;
  }
`;

export const PersonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const PersonPoster = styled.img`
  border-radius: 5px;
`;

export const PersonName = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
`;

export const CharacterName = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
`;

export const GetDetailsPeopleLink = styled(Link)`
  text-decoration: none;
`;
