import styled from "styled-components";

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    margin: auto auto 16px auto;
  }
`;

export const Panel = styled.div`
  padding: 0px 0px 50px 50px;
  width: 1368px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    padding: 0px 0px 8px 8px;
    width: 600px;
  }
`;

export const PosterPath = styled.div`
  min-height: 770px;
  max-width: 1368px;
  margin: auto;
  filter: brightness(80%);
  display: flex;
  flex-direction: row-reverse;
  align-items: end;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.src});
  -webkit-box-shadow: inset 0px 0px 42px 47px
    ${({ theme }) => theme.colors.black};
  -moz-box-shadow: inset 0px 0px 42px 47px ${({ theme }) => theme.colors.black};
  box-shadow: inset 0px 0px 42px 47px ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    height: 350px;
    min-height: 150px;
    max-width: 600px;
    margin: auto;
  }
`;

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
`;

export const TileContainer = styled.div`
  max-width: 1368px;
  margin: auto;
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 1);
  margin-top: 0px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 24px;
    margin-bottom: 4px;
  }
`;

export const PeopleList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0;
`;

export const PeopleHeader = styled.h2`
  color: ${({ theme }) => theme.colors.black};

  margin-top: 64px;
  margin-bottom: 0px;
  margin-left: 40px;
  font-weight: 600;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;
