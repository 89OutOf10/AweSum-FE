import React from 'react';
import radiobuttonRight from '../../assets/main/button_checked.png';
import radiobuttonWrong from '../../assets/main/radio_wrong.png';

const ResultButton = ({ correct }) => {
  return (
    <>
      {correct ? (
        <img src={radiobuttonRight} alt="radiobuttonRight" />
      ) : (
        <img src={radiobuttonWrong} alt="radiobuttonWrong" />
      )}
    </>
  );
};

export default ResultButton;
