import styled from "styled-components";

export const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.silver};

  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 2 /3;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const Poster = styled.div.attrs(
  ({ background, noPoster }) =>
    (noPoster || background) && {
      style: {
        backgroundImage: ` url(${background}), url(${noPoster})`,
      },
    }
)`
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  inset: 0;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
