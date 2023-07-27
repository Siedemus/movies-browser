import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    padding: 8px 0px;
  }
`;

export const Score = styled.span`
  font-weight: 600;
  font-size: 16px;
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-weight: 600;
    font-size: 13px;
    margin-left: 4px;
  }
`;

export const AllVotes = styled.span`
  font-weight: 400;
  font-size: 16px;
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-weight: 400;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.waterloo};
    margin-left: 7px;
  }
`;
