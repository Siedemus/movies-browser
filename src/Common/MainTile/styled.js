import styled from "styled-components";

export const MainTileContainer = styled.div`
  margin: auto;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  height: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);

  display: grid;
  grid-template-rows: auto 1fr;

  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(105%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    margin: auto;
    max-height: 300px;
    width: 100%;
    grid-template-columns: auto 1fr;
  }
`;

export const MainTileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 21px;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    height: 200px;
    padding: 16px;
    margin-bottom: 0px;
  }
`;

export const MainTileTitle = styled.header`
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 16px;
  }
`;

export const MainTileYear = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.waterloo};
  margin-bottom: 7px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 13px;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  margin: 0px -8px 0px;
`;

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.gray};

  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  margin: 4px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const Content = styled.div`
  padding: 0px 16px 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    padding: 16px 0px 0px;
  }
`;
