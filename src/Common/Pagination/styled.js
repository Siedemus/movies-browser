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
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.waterloo};
  margin: auto 12px;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 12px;
`;

export const Important = styled.b`
  color: ${({ theme }) => theme.colors.black};
`;
