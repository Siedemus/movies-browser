import styled from "styled-components";

export const Wrap = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ScoresContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    margin-bottom: 0px;
  }
`;

export const Score = styled.span`
  font-weight: 500;
  font-size: 30px;
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-weight: 600;
    font-size: 13px;
    margin-left: 4px;
  }
`;

export const MaxScore = styled.span`
  font-weight: 400;
  font-size: 16px;
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-weight: 400;
    font-size: 10px;
  }
`;

export const AllVotes = styled.span`
  font-weight: 400;
  font-size: 16px;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-weight: 400;
    font-size: 10px;
    margin-left: 7px;
  }
`;
