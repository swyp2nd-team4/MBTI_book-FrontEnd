import styled from 'styled-components';
import React from 'react';

const CheckImgContainer = styled.div`
  position: relative;
  width: 58px;
  height: 58px;
`;

const CheckImgStyle = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #84c3a5;
  filter: opacity(0.5) drop-shadow(0 0 0 ${(props) => props.color});
  z-index: 1;
`;

const CheckImgStyle1 = styled.img`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 35px;
  height: 35px;
  z-index: 2;
`;

const CheckImgBOX = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

function Check({ color }) {
  return (
    <CheckImgBOX>
      <CheckImgContainer>
        <CheckImgStyle src='./IMG/체크바탕.png' alt='이미지' color={color} />
        <CheckImgStyle1 src='./IMG/체크.png' alt='이미지' />
      </CheckImgContainer>
      <CheckImgContainer>
        <CheckImgStyle src='./IMG/체크바탕.png' alt='이미지' color={color} />
        <CheckImgStyle1 src='./IMG/체크.png' alt='이미지' />
      </CheckImgContainer>
      <CheckImgContainer>
        <CheckImgStyle src='./IMG/체크바탕.png' alt='이미지' color={color} />
        <CheckImgStyle1 src='./IMG/체크.png' alt='이미지' />
      </CheckImgContainer>
      <CheckImgContainer>
        <CheckImgStyle src='./IMG/체크바탕.png' alt='이미지' color={color} />
        <CheckImgStyle1 src='./IMG/체크.png' alt='이미지' />
      </CheckImgContainer>
      <CheckImgContainer>
        <CheckImgStyle src='./IMG/체크바탕.png' alt='이미지' color={color} />
        <CheckImgStyle1 src='./IMG/체크.png' alt='이미지' />
      </CheckImgContainer>
    </CheckImgBOX>
  );
}

export default Check;
