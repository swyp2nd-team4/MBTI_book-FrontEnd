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

