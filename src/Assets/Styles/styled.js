import { styled } from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: activeClassName,
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  &: hover {
    color: ${({ theme }) => theme.colors.waterloo};
  }

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.stormGray};
  }
`;

export const TitleLink = styled(NavLink).attrs(() => ({
  activeClassName: activeClassName,
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 13px;
    line-height: 1, 3;
    letter-spacing: -0.5px;
    padding-bottom: 0;
    margin: 0;
  }

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.stormGray};
  }
`;
