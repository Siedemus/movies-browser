import { Wrapper, Title, CameraIcon } from "./styled";
import { TitleLink } from "../../../Assets/Styles/styled";

export const NavigationLogo = () => {
  return (
    <Wrapper>
      <TitleLink to="/movie">
        <CameraIcon />
        <Title>Movies Browser</Title>
      </TitleLink>
    </Wrapper>
  );
};
