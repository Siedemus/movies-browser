import { styled, css } from "styled-components";
import { ReactComponent as vector } from "../../Assets/Images/Vector.svg";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 8px 16px;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 5px;

  &:disabled {
    cursor: not-allowed;
  }

  ${({ next }) =>
    next &&
    css`
      background-color: ${({ theme }) => theme.colors.blue};
    `}
`;

export const Vector = styled(vector)`
  ${({ next }) =>
    next &&
    css`
      fill: blue;
      rotate: 180deg;
    `}

  ${({ gray }) =>
    gray &&
    css`
      fill: gray;
    `}

  ${({ mobile }) =>
    mobile &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoint.mini}) {
        display: none;
      }
    `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.waterloo};
  margin: auto 12px;
  

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    font-size: 10px;
    margin: auto 2px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  margin-right: 5px;
  margin-left: 5px;
  gap: 12px;
  max-height: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    max-height: 24px;
  }
`;

export const Important = styled.b`
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonText = styled.p`
  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    display: none;
  }
`;
