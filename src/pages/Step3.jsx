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
    navigate('/step4');
  };

  return (
    <BackGroundColor gap='80px'>
      <Check />
      <ShadowBoxDiv>
        <Number>03</Number>
        <StepTextStyle>책이나 영화, 드라마를 보고나서</StepTextStyle>
      </ShadowBoxDiv>
      <ShadowBoxDiv gap='30px'>
        <ShadowBox
          title='한 번 과몰입하면 헤어나오기 어렵다.'
          onClick={handleShadowBoxClick}
        />
        <ShadowBox title='책은 책이고 나는 나' onClick={handleShadowBoxClick} />
      </ShadowBoxDiv>
    </BackGroundColor>
  );
}

export default Step1;
