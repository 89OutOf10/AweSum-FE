import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import QuizModalFrame from './QuizModalFrame';
import palette from '../../styles/palette';
import RadioButton from '../common/RadioButton';
import ResultButton from '../common/ResultButton';
import Button from '../common/Button';
import axios from 'axios';
import { USER_SERVER } from '../../config.js';
import { MutatingDots } from 'react-loader-spinner';
import { quizForm } from '../../assets/quiz/quizForm.js';

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
  text-align: flex-start;
  width: 90%;
  margin-left: 20px;
  margin-top: 10px;
  line-height: 20px;
`;

const Box = styled.div`
  background: ${palette.pink[1]};
  width: 75%;
  height: 60px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
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

// Answer - response.data[0].answer 로 접근
const QuizModal = ({ videoID, _handleModal }) => {
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState();

  useEffect(() => {
    console.log('im requesting quiz');
    axios
      .get(`${USER_SERVER}/quizzes/?id=${videoID}`)
      .then(function (response) {
        setQuestion(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {
      console.log('quiz ended');
    };
  }, []);

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

  // after clicking
  const [result, viewResult] = useState(false);

  const _handleClick = () => {
    viewResult(true);
    console.log('viewing result');
  };

  if (loading)
    return (
      <QuizModalFrame _handleModal={_handleModal}>
        <Col>
          <Header>OX Quiz</Header>
        </Col>
        <div style={{ marginTop: '30%' }}>
          <MutatingDots color="purple" />
        </div>
      </QuizModalFrame>
    );
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
            <Questions>{question[0].question}</Questions>
          </Box>
          <RadioBlock>
            {result === true ? (
              question[0].answer === quiz.q1 ? (
                <>
                  <RadioButton checked={quiz.q1 === 1} />
                  <RadioButton checked={quiz.q1 === 0} />
                </>
              ) : (
                <>
                  <ResultButton correct={question[0].answer === 1} />
                  <ResultButton correct={question[0].answer === 0} />
                </>
              )
            ) : (
              <>
                <RadioButton
                  checked={quiz.q1 === 1}
                  onClick={() => {
                    _onClickQ1(1);
                  }}
                />
                <RadioButton
                  checked={quiz.q1 === 0}
                  onClick={() => {
                    _onClickQ1(0);
                  }}
                />
              </>
            )}
          </RadioBlock>
        </Row>
        <Row>
          <Header>02</Header>
          <Box>
            <Questions>{question[1].question}</Questions>
          </Box>
          <RadioBlock>
            {result === true ? (
              question[1].answer === quiz.q2 ? (
                <>
                  <RadioButton checked={quiz.q2 === 1} />
                  <RadioButton checked={quiz.q2 === 0} />
                </>
              ) : (
                <>
                  <ResultButton correct={question[1].answer === 1} />
                  <ResultButton correct={question[1].answer === 0} />
                </>
              )
            ) : (
              <>
                <RadioButton
                  checked={quiz.q2 === 1}
                  onClick={() => {
                    _onClickQ2(1);
                  }}
                />
                <RadioButton
                  checked={quiz.q2 === 0}
                  onClick={() => {
                    _onClickQ2(0);
                  }}
                />
              </>
            )}
          </RadioBlock>
        </Row>
        <Row>
          <Header>03</Header>
          <Box>
            <Questions>{question[2].question}</Questions>
          </Box>
          <RadioBlock>
            {result === true ? (
              question[2].answer === quiz.q3 ? (
                <>
                  <RadioButton checked={quiz.q3 === 1} />
                  <RadioButton checked={quiz.q3 === 0} />
                </>
              ) : (
                <>
                  <ResultButton correct={question[2].answer === 1} />
                  <ResultButton correct={question[2].answer === 0} />
                </>
              )
            ) : (
              <>
                <RadioButton
                  checked={quiz.q3 === 1}
                  onClick={() => {
                    _onClickQ3(1);
                  }}
                />
                <RadioButton
                  checked={quiz.q3 === 0}
                  onClick={() => {
                    _onClickQ3(0);
                  }}
                />
              </>
            )}
          </RadioBlock>
        </Row>
        <Row>
          <Header>04</Header>
          <Box>
            <Questions>{question[3].question}</Questions>
          </Box>
          <RadioBlock>
            {result === true ? (
              question[3].answer === quiz.q4 ? (
                <>
                  <RadioButton checked={quiz.q4 === 1} />
                  <RadioButton checked={quiz.q4 === 0} />
                </>
              ) : (
                <>
                  <ResultButton correct={question[3].answer === 1} />
                  <ResultButton correct={question[3].answer === 0} />
                </>
              )
            ) : (
              <>
                <RadioButton
                  checked={quiz.q4 === 1}
                  onClick={() => {
                    _onClickQ4(1);
                  }}
                />
                <RadioButton
                  checked={quiz.q4 === 0}
                  onClick={() => {
                    _onClickQ4(0);
                  }}
                />
              </>
            )}
          </RadioBlock>
        </Row>
        <Row>
          <Header>05</Header>
          <Box>
            <Questions>{question[4].question}</Questions>
          </Box>
          <RadioBlock>
            {result === true ? (
              question[4].answer === quiz.q5 ? (
                <>
                  <RadioButton checked={quiz.q5 === 1} />
                  <RadioButton checked={quiz.q5 === 0} />
                </>
              ) : (
                <>
                  <ResultButton correct={question[4].answer === 1} />
                  <ResultButton correct={question[4].answer === 0} />
                </>
              )
            ) : (
              <>
                <RadioButton
                  checked={quiz.q5 === 1}
                  onClick={() => {
                    _onClickQ5(1);
                  }}
                />
                <RadioButton
                  checked={quiz.q5 === 0}
                  onClick={() => {
                    _onClickQ5(0);
                  }}
                />
              </>
            )}
          </RadioBlock>
        </Row>
        <Row>
          <Header>06</Header>
          <Box>
            <Questions>{question[5].question}</Questions>
          </Box>
          <RadioBlock>
            {result === true ? (
              question[5].answer === quiz.q6 ? (
                <>
                  <RadioButton checked={quiz.q6 === 1} />
                  <RadioButton checked={quiz.q6 === 0} />
                </>
              ) : (
                <>
                  <ResultButton correct={question[5].answer === 1} />
                  <ResultButton correct={question[5].answer === 0} />
                </>
              )
            ) : (
              <>
                <RadioButton
                  checked={quiz.q6 === 1}
                  onClick={() => {
                    _onClickQ6(1);
                  }}
                />
                <RadioButton
                  checked={quiz.q6 === 0}
                  onClick={() => {
                    _onClickQ6(0);
                  }}
                />
              </>
            )}
          </RadioBlock>
        </Row>
        <Row style={{ justifyContent: 'flex-end', height: '65px' }}>
          <Button
            style={{ marginRight: '20px', marginTop: '10px' }}
            onClick={_handleClick}
          >
            VIEW RESULTS
          </Button>
        </Row>
      </Col>
    </QuizModalFrame>
  );
};

export default QuizModal;
