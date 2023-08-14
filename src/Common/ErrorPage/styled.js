import styled from "styled-components";
import { ReactComponent as Danger } from "../../../src/Assets/Images/Danger.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { activeClassName } from "../../Assets/Styles/styled";

export const ErrorWrap = styled.div`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    margin-top: 60px;
  }
`;

export const DangerIcon = styled(Danger)`
  width: 120px;
  height: 120px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    width: 60px;
    height: 60px;
  }
`;

export const ErrorHeader = styled.h1`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 20px;
  }
`;

export const ErrorInfo = styled.h2`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 14px;
  }
`;

export const ErrorButton = styled.div`
  width: 181px;
  height: 51px;
  background-color: blue;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    width: 120px;
    height: 34px;
  }
`;

export const ErrorButtonLink = styled(NavLink).attrs(() => ({
  activeClassNamee: activeClassName,
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 10px;
  }

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.stormGray};
  }
`;
