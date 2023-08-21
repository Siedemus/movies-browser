import styled from "styled-components";

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.blackyblack};
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
    ${({ theme }) => theme.colors.blackyblack};
  -moz-box-shadow: inset 0px 0px 42px 47px
    ${({ theme }) => theme.colors.blackyblack};
  box-shadow: inset 0px 0px 42px 47px ${({ theme }) => theme.colors.blackyblack};

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
  padding: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    padding: 8px;
  }
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
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  padding: 0;
  margin: 0 0 24px 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PeopleHeader = styled.h2`
  color: ${({ theme }) => theme.colors.black};

  margin-top: 64px;
  margin-bottom: 32px;
  margin-left: 0px;
  font-weight: 600;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 20px;
    margin-top: 21px;
    margin-bottom: 12px;
  }
`;
