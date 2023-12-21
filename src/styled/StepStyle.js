import styled from 'styled-components';

export const ShadowBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;

export const StepTextStyle = styled.div`
  height: 68px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #6f6f70;
  margin-top: 10px;

  span {
    white-space: pre-line;
  }
`;

export const Number = styled.h1`
  font-family: Gasoek One;
  font-size: 64px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 3px;
  text-align: left;

  color: #326a4f;
`;
