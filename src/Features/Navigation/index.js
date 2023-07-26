import { NavigationContainer, NavigationWrapper, List, Item, StyledNavLink } from "./styled";
import { NavigationLogo } from "./Logo";
import { Container } from "../../Common/Container";

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
                    </List>
                </NavigationWrapper>
            </Container>
        </NavigationContainer>
    );
};