import styled from "styled-components";

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
  border-radius: 5px;
  inset: 0;
  transition: transform 0.5s ease;
  background-size: contain;
`;

export const MoviePosterWrap = styled.div`
  margin: 16px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 2/3;

  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    margin: 8px 16px 8px 8px;
    max-height: 100%;
    min-height: 169px;
  }
`;
