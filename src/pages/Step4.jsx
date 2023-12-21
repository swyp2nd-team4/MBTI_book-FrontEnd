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
    navigate('/step5');
  };

  return (
    <BackGroundColor gap='80px'>
      <Check />
      <ShadowBoxDiv>
        <Number>04</Number>
        <StepTextStyle>나는 책을 고를 때</StepTextStyle>
      </ShadowBoxDiv>
      <ShadowBoxDiv gap='30px'>
        <ShadowBox
          title='클래식 이즈 더 베스트. 오랫동안 사랑받은 고전은 그만한 가치가 있겠지'
          onClick={handleShadowBoxClick}
        />
        <ShadowBox
          title='명성보다는 느낌. 남들은 모르고 나만 아는 비밀의 책 발굴하는 기분도 좋다'
          onClick={handleShadowBoxClick}
        />
      </ShadowBoxDiv>
    </BackGroundColor>
  );
}

export default Step1;
