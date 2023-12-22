import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const BackGroundColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background: #ffffff;
<<<<<<< HEAD
  gap: ${(props) => props.gap};
`;

=======
`;



>>>>>>> 81947495ba6b60f7b64fccd9e79ced27042580b0
const TextBox1 = styled.div`
  height: 166px;
  font-family: 'Gasoek One';
  font-weight: 900;
  font-size: 64px;
  line-height: 74px;
  text-align: center;
  letter-spacing: 2px;
  color: #254e3a;
`;

const TextBox2 = styled.div`
  height: 48px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0.41px;
  color: #000000;
  margin-top: 10px;
`;

const TextBox3 = styled.div`
  height: 68px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #6f6f70;
  margin-top: 20px; /* Adjusted margin-top */

  span {
    white-space: pre-line;
  }
`;

const Container = styled.div`
  width: 250px;
  height: 250px;
<<<<<<< HEAD
`;

const ImgBox = styled.img`
  position: fixed;
  margin-top: 190px;
=======
`

const ImgBox = styled.img`
position: fixed;
margin-top: 190px;
>>>>>>> 81947495ba6b60f7b64fccd9e79ced27042580b0
  z-index: 1;
`;

const InputStyle = styled.input`
  width: 499px;
  height: 78px;
  border-radius: 20px;
  border: black;
  background-color: #326a4f;
  color: white;
  font-weight: 900;
  font-size: x-large;
  z-index: 999;
  cursor: pointer;
`;

function Main() {
<<<<<<< HEAD
  const navigate = useNavigate();

  const nextPage = () => {
    navigate('step1');
  };
=======

  const navigate = useNavigate()

const nextPage = () => {
  navigate('step1')
}
>>>>>>> 81947495ba6b60f7b64fccd9e79ced27042580b0

  return (
    <BackGroundColor>
      <TextBox1>
        내가 좋아하는 책 <br /> 유형 TEST
      </TextBox1>
      <TextBox2>나의 책갈피는?</TextBox2>
      <TextBox3>
        성격 Test 기반으로 나에게 맞는
        <br /> 책을 찾고 어울리는 책갈피를 알아보자{' '}
      </TextBox3>
      <Container />
<<<<<<< HEAD
      <ImgBox src='./IMG/xx 1.png' alt='이미지' />
=======
      <ImgBox src='./IMG/그림1.png' alt='이미지' />
>>>>>>> 81947495ba6b60f7b64fccd9e79ced27042580b0
      <InputStyle type='button' value='START' onClick={nextPage} />
    </BackGroundColor>
  );
}

export default Main;