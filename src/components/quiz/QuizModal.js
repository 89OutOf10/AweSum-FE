import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import QuizModalFrame from './QuizModalFrame';
import palette from '../../styles/palette';
import RadioButton from '../common/RadioButton';
import Button from '../common/Button';
import {
  quizForm,
  quizQuestion,
  quizAnswer,
} from '../../assets/quiz/quizForm.js';

const Col = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.725rem;
  line-height: 50px;
  margin-left: 10px;
`;

const SubHeader = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  margin-top: 1.25rem;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
`;

const Questions = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  text-align: center;
`;

const Box = styled.div`
  background: ${palette.pink[1]};
  width: 75%;
  height: 60px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RadioBlock = styled.div`
  width: 85px;
  display: flex;
  margin-right: 3rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 40px;
`;

const SummaryModal = ({ _handleModal }) => {
  // user selection
  const [quiz, setQuiz] = useState(quizForm);
  const _onClickQ1 = (id) => {
    setQuiz({
      ...quiz,
      q1: id,
    });
  };
  const _onClickQ2 = (id) => {
    setQuiz({
      ...quiz,
      q2: id,
    });
  };
  const _onClickQ3 = (id) => {
    setQuiz({
      ...quiz,
      q3: id,
    });
  };
  const _onClickQ4 = (id) => {
    setQuiz({
      ...quiz,
      q4: id,
    });
  };
  const _onClickQ5 = (id) => {
    setQuiz({
      ...quiz,
      q5: id,
    });
  };
  const _onClickQ6 = (id) => {
    setQuiz({
      ...quiz,
      q6: id,
    });
  };

  // question generate
  const [question, setQuestion] = useState(quizQuestion);

  return (
    <QuizModalFrame _handleModal={_handleModal}>
      <Col>
        <Header>OX Quiz</Header>
        <Row>
          <SubHeader>QUESTIONS</SubHeader>
          <SubHeader style={{ marginRight: '3rem' }}>TRUE / FALSE</SubHeader>
        </Row>
        <Row>
          <Header>01</Header>
          <Box>
            <Questions>
              W is a collection of all of the weights in our neural network, not
              just from one layer, but from every layer
            </Questions>
          </Box>
          <RadioBlock>
            <RadioButton
              checked={quiz.q1 === 1}
              onClick={() => {
                _onClickQ1(1);
              }}
            />
            <RadioButton
              checked={quiz.q1 === 2}
              onClick={() => {
                _onClickQ1(2);
              }}
            />
          </RadioBlock>
        </Row>
        <Row>
          <Header>02</Header>
          <Box>
            <Questions>
              nonlinear functions allow us to actually deal with linear data.
            </Questions>
          </Box>
          <RadioBlock>
            <RadioButton
              checked={quiz.q2 === 1}
              onClick={() => {
                _onClickQ2(1);
              }}
            />
            <RadioButton
              checked={quiz.q2 === 2}
              onClick={() => {
                _onClickQ2(2);
              }}
            />
          </RadioBlock>
        </Row>
        <Row>
          <Header>03</Header>
          <Box>
            <Questions>
              Using nonlinear activation functions allows neural network to
              approximate arbitrarily complex functions
            </Questions>
          </Box>
          <RadioBlock>
            <RadioButton
              checked={quiz.q3 === 1}
              onClick={() => {
                _onClickQ3(1);
              }}
            />
            <RadioButton
              checked={quiz.q3 === 2}
              onClick={() => {
                _onClickQ3(2);
              }}
            />
          </RadioBlock>
        </Row>
        <Row>
          <Header>04</Header>
          <Box>
            <Questions>
              The sigmoid function divides the space into two parts of the river
              because it outputs between 0 and 1.
            </Questions>
          </Box>
          <RadioBlock>
            <RadioButton
              checked={quiz.q4 === 1}
              onClick={() => {
                _onClickQ4(1);
              }}
            />
            <RadioButton
              checked={quiz.q4 === 2}
              onClick={() => {
                _onClickQ4(2);
              }}
            />
          </RadioBlock>
        </Row>
        <Row>
          <Header>05</Header>
          <Box>
            <Questions>
              If a parameter starts in a potentially bad part of the landscape,
              it can easily get stuck in local maximum.
            </Questions>
          </Box>
          <RadioBlock>
            <RadioButton
              checked={quiz.q5 === 1}
              onClick={() => {
                _onClickQ5(1);
              }}
            />
            <RadioButton
              checked={quiz.q5 === 2}
              onClick={() => {
                _onClickQ5(2);
              }}
            />
          </RadioBlock>
        </Row>
        <Row>
          <Header>06</Header>
          <Box>
            <Questions>
              W is a collection of all of the weights in our neural network, not
              just from one layer, but from every layer
            </Questions>
          </Box>
          <RadioBlock>
            <RadioButton
              checked={quiz.q6 === 1}
              onClick={() => {
                _onClickQ6(1);
              }}
            />
            <RadioButton
              checked={quiz.q6 === 2}
              onClick={() => {
                _onClickQ6(2);
              }}
            />
          </RadioBlock>
        </Row>
        <Row style={{ justifyContent: 'flex-end', height: '65px' }}>
          <Button style={{ marginRight: '20px', marginTop: '10px' }}>
            VIEW RESULTS
          </Button>
        </Row>
      </Col>
    </QuizModalFrame>
  );
};

export default SummaryModal;