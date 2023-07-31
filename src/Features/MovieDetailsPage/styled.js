import styled from "styled-components";

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 770px;
  margin-bottom: 64px;
`;

export const Panel = styled.div`
  height: 770px;
  width: 1368px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const PosterPath = styled.div`
  height: 770px;
  width: 1368px;
  margin: auto;
  background-size: contain;
  background-image: url(${(props) => props.src});
  -webkit-box-shadow: inset 0px 0px 42px 47px
    ${({ theme }) => theme.colors.black};
  -moz-box-shadow: inset 0px 0px 42px 47px ${({ theme }) => theme.colors.black};
  box-shadow: inset 0px 0px 42px 47px ${({ theme }) => theme.colors.black};
`;

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const TileContainer = styled.div`
  width: 1368px;
  margin: auto;
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
  margin-top: 0px;
  font-weight: 600;
  font-size: 64px;
`;
