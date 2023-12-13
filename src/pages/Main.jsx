import React from 'react';
import styled from 'styled-components';

const BackGroundColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #d4d0d0;
`;

function Main() {
  return (
    <BackGroundColor>
      <div>내가 좋아하는 책 유형 TEST</div>
      <div>나의 책갈피는?</div>
      <div>
        성격 Test기반으로 나에게 맞는 책을 찾고 어울리는 책갈피를 알아보자
      </div>
      <div>빈 박스</div>
      <div>지금까지 ㅇㅇ명이 참여하였습니다</div>
      <input type='button' value='START' />
    </BackGroundColor>
  );
}

export default Main;
