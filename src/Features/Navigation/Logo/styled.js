import styled from "styled-components";

import { ReactComponent as Camera } from "../../../Assets/Images/camera.svg";

export const Wrapper = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 12px;
  padding-left: 12px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    gap: 8px;
    padding-left: 0;
  }
`;

export const Title = styled.p`
  margin-left: 12px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    margin-left: 8px;
    font-size: 13px;
    line-height: 1, 3;
    letter-spacing: -0.5px;
    padding-bottom: 0;
  }
`;

export const CameraIcon = styled(Camera)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mini}) {
    width: 17px;
    height: 17px;
  }
`;
