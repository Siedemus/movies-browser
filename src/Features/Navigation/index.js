import {
  Item,
  List,
  NavigationContainer,
  NavigationWrapper,
  StyledNavLink,
} from "./styled";
import { NavigationLogo } from "./Logo/index";
import { Container } from "../../Common/Container/index";
import { Search } from "./Search";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Container>
        <NavigationWrapper>
          <NavigationLogo />
          <List>
            <Item>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to="/people">People</StyledNavLink>
            </Item>
            <Search />
          </List>
        </NavigationWrapper>
      </Container>
    </NavigationContainer>
  );
};
