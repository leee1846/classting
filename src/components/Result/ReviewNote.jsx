import React from 'react';

function ReviewNote({ inCorrects }) {
  return (
    <div>
      <h2>오답노트</h2>
      {inCorrects.map((inCorrect) => (
        <div key={inCorrect.seq}>
          <div>
            <p>문제 {inCorrect.seq}번</p>
            <p>{inCorrect.question}</p>
          </div>
          <p>정답 : {inCorrect.correct_answer}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default ReviewNote;
