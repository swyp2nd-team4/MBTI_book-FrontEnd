import React from 'react';
import { ShadowBoxDiv } from '../styled/StepStyle';

function Result() {
  return (
    <ShadowBoxDiv>
      <div>
        큰박스
        <div></div>
        <div>
          <div>당신의 책갈피는박스</div>
          <div>긴 글 박스</div>
        </div>
      </div>
      <div>큰박스</div>
    </ShadowBoxDiv>
  );
}

export default Result;
