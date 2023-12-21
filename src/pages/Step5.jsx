import React from 'react';
import Check from '../components/Check';
import { BackGroundColor } from './Main';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ShadowBoxDiv, Number, StepTextStyle } from '../styled/StepStyle';

const InputStyle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 592px;
  height: 70px;

  border: none;
  background: #fdfffc;
  box-shadow: 0px 4px 6px 0px #00000040;
  border-radius: 10px;

  font-family: "Noto Sans KR";

  &: :placeholder {
    position: absolute;
    top: 25px;
    left: 15px;
    font-size: 18px;
    color: #999; 
  }
`;

const NextButton = styled.input`
  width: 131px;
  height: 51px;

  margin-left: 470px;

  border: white;
  background: #fdfffc;
  box-shadow: 0px 4px 6px 0px #00000040;
  border-radius: 10px;
  cursor: pointer;
`;

function Step1() {
  const navigate = useNavigate();

  const handleShadowBoxClick = () => {
    navigate('/result');
  };

  return (
    <BackGroundColor gap='80px'>
      <Check />
      <ShadowBoxDiv>
        <Number>05</Number>
        <StepTextStyle>내가 평소에 좋아하는 책은?</StepTextStyle>
      </ShadowBoxDiv>
      <ShadowBoxDiv gap='20px'>
        <InputStyle placeholder='입력해주세요' />
        <NextButton
          type='button'
          value='건너뛰기'
          onClick={handleShadowBoxClick}
        />
      </ShadowBoxDiv>
    </BackGroundColor>
  );
}

export default Step1;
