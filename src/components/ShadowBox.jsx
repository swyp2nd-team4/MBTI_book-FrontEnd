import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ShadowBoxStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 592px;
  height: 130px;
  background: #fdfffc;
  border: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
`;

const BoxTextStyle = styled.h5`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;

  text-align: center;
  letter-spacing: -0.41px;
  color: #6f6f70;
`;

function ShadowBox({ title, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <>
      <ShadowBoxStyle onClick={handleClick}>
        <BoxTextStyle>{title}</BoxTextStyle>
      </ShadowBoxStyle>
    </>
  );
}

export default ShadowBox;
