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

export const Navigation = (toMovies, toPeople) => {
  return (
    <NavigationContainer>
      <Container>
        <NavigationWrapper>
          <NavigationLogo toMovies={toMovies} />
          <List>
            <Item>
              <StyledNavLink to={toMovies}>Movies</StyledNavLink>
            </Item>
            <Item>
            <StyledNavLink to={toPeople}>People</StyledNavLink>
            </Item>
          </List>
          <Search />
        </NavigationWrapper>
      </Container>
    </NavigationContainer>
  );
};
