import React from 'react';
import QuizModalFrame from './QuizModalFrame';

const SummaryModal = ({ _handleModal }) => {
  return (
    <QuizModalFrame _handleModal={_handleModal}>
      <h1>Quiz</h1>
    </QuizModalFrame>
  );
};

export default SummaryModal;
