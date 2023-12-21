import React from 'react';
import Check from '../components/Check';
import { BackGroundColor } from './Main';
import ShadowBox from '../components/ShadowBox';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ShadowBoxDiv, Number, StepTextStyle } from '../styled/StepStyle';

function Step1() {
  const navigate = useNavigate();

  const handleShadowBoxClick = () => {
    navigate('/step3');
  };

  return (
    <BackGroundColor gap='80px'>
      <Check />
      <ShadowBoxDiv>
        <Number>02</Number>
        <StepTextStyle>나는 책을 읽을 때</StepTextStyle>
      </ShadowBoxDiv>
      <ShadowBoxDiv gap='30px'>
        <ShadowBox
          title='현실성 넘치는 책이 더 몰입되는 것 같다'
          onClick={handleShadowBoxClick}
        />
        <ShadowBox
          title='상상도 해본 적 없는 미지의 세계로 가고 싶다'
          onClick={handleShadowBoxClick}
        />
      </ShadowBoxDiv>
    </BackGroundColor>
  );
}

export default Step1;
