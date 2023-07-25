import styled from "styled-components";

export const Tile = styled.article`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
`;

export const Image = styled.img``;

export const Content = styled.div``;

export const Title = styled.header`
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 24px;
`;

export const Year = styled.div`
  font-weight: 400;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Tags = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  margin: 16px -8px;
`;

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.gray};

  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  margin: 8px;
  border-radius: 5px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin: 24px 0px 0px 0px;
`;
