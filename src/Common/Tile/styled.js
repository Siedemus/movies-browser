import styled from "styled-components";

export const TileWrap = styled.article`
  margin: auto;
  max-width: 1368px;
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 40px;
  grid-row-gap: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin: auto;
    padding: 16px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 0px;
  }
`;

export const Image = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    max-height: 288px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.micro}) {
    max-height: 150px;
  }
`;

export const Content = styled.div``;

export const Title = styled.header`
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 17px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 0px;
    line-height: 130%;
  }
`;

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 23px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    color: ${({ theme }) => theme.colors.waterloo};
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 5px;
    margin-top: 4px;
    line-height: 130%;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: row;
  margin-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    max-height: 16px;
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

export const AdditionInfo = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.stormGray};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    display: none;
  }
`;

export const Info = styled.span`
  margin-right: 11px;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-weight: 400;
    font-size: 12px;
  }
`;

export const InfoLong = styled.span`
  margin-right: 11px;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    display: none;
  }
`;

export const InfoShort = styled.span`
  font-weight: 400;
  font-size: 12px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.breakpoint.large}) {
    display: none;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  margin: 8px -4px 8px;
`;

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.gray};

  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  margin: 8px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 10px;
    padding: 2px 4px;
    margin: 2px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin: 12px 0px 0px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-weight: 400;
    font-size: 14px;
    display: grid;
    grid-column-start: 1;
    grid-column-end: span 2;
  }
`;
