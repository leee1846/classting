import React from 'react';

function Score({ takenTime, corrects, inCorrects }) {
  return (
    <div>
      <h2>결과</h2>
      <p>소요시간 : {takenTime}</p>
      <p>정답 갯수 : {corrects.length}개</p>
      <p>오답 갯수 : {inCorrects.length}개</p>
      <br />
    </div>
  );
}

export default Score;
