<<<<<<< HEAD
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
    navigate('/step2');
  };

  return (
    <BackGroundColor gap='80px'>
      <Check />
      <ShadowBoxDiv>
        <Number>01</Number>
        <StepTextStyle>당신은 책을 통해 어떤 것을 얻고 싶나요?</StepTextStyle>
      </ShadowBoxDiv>
      <ShadowBoxDiv gap='30px'>
        <ShadowBox
          title='내가 몰랐던 흥미로운 정보를 얻고 싶다'
          onClick={handleShadowBoxClick}
        />
        <ShadowBox
          title='책 속 인물들의 이야기와 감정을 통해 새로운 세계를 경험하고 싶다'
          onClick={handleShadowBoxClick}
        />
      </ShadowBoxDiv>
    </BackGroundColor>
  );
}

export default Step1;
=======
import React from 'react'
import styled from 'styled-components'
import { CheckImgContainer, CheckImgStyle1, CheckImgStyle } from '../component/Check'

const CheckImgBOX = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

function Step1() {
  return (
    <CheckImgBOX>
        <CheckImgContainer>
        <CheckImgStyle src = './IMG/체크바탕.png' alt='이미지' />
     <CheckImgStyle1 src='./IMG/체크.png' alt='이미지' />
        </CheckImgContainer>
        <CheckImgContainer>
        <CheckImgStyle src = './IMG/체크바탕.png' alt='이미지' />
     <CheckImgStyle1 src='./IMG/체크.png' alt='이미지' />
        </CheckImgContainer>
        <CheckImgContainer>
        <CheckImgStyle src = './IMG/체크바탕.png' alt='이미지' />
     <CheckImgStyle1 src='./IMG/체크.png' alt='이미지' />
        </CheckImgContainer>
        <CheckImgContainer>
        <CheckImgStyle src = './IMG/체크바탕.png' alt='이미지' />
     <CheckImgStyle1 src='./IMG/체크.png' alt='이미지' />
        </CheckImgContainer>
    </CheckImgBOX>
    
  )
}

export default Step1

>>>>>>> 81947495ba6b60f7b64fccd9e79ced27042580b0
