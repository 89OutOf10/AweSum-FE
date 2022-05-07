import React from 'react';
import styled from 'styled-components';
import QuizModalFrame from './QuizModalFrame';
import palette from '../../styles/palette';
import RadioButton from '../common/RadioButton';
import Button from '../common/Button';

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
`;

const SubHeader = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  margin-top: 1.25rem;
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
            <RadioButton />
            <RadioButton />
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
            <RadioButton />
            <RadioButton />
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
            <RadioButton />
            <RadioButton />
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
            <RadioButton />
            <RadioButton />
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
            <RadioButton />
            <RadioButton />
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
            <RadioButton />
            <RadioButton />
          </RadioBlock>
        </Row>
        <Row style={{ justifyContent: 'flex-end', height: '65px' }}>
          <Button style={{ marginRight: '20px' }}>VIEW RESULTS</Button>
        </Row>
      </Col>
    </QuizModalFrame>
  );
};

export default SummaryModal;
