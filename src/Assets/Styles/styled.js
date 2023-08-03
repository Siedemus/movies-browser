import { styled } from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const activeClassName = "active";
const hoverClassName = "hover";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: activeClassName,
  hoverClassName: hoverClassName,
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  &: ${hoverClassName} {
    color: ${({ theme }) => theme.colors.waterloo};
  }

  &.${activeClassName} {
    font-weight: bold;
  }
`;
