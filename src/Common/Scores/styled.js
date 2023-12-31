import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Score = styled.span`
  line-height: 130%;
  font-weight: 500;
  font-size: 22px;
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-weight: 600;
    font-size: 13px;
    margin-left: 4px;
  }
`;

export const MaxScore = styled.span`
  font-weight: 400;
  font-size: 14px;
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    display: none;
  }
`;

export const AllVotes = styled.span`
  font-weight: 400;
  font-size: 14px;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-weight: 400;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.waterloo};
    margin-left: 7px;
  }
`;
