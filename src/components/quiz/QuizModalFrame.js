import React from 'react';
import styled from 'styled-components';
import close from '../../assets/common/close-icon.png';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 110rem;
  border-radius: 10px;
  border: 2px solid #8b8b8b;
  padding: 1.5rem;
  background-color: white;
  width: 80%;
  @media (max-width: 1120px) {
    width: 50rem;
  }
  @media (max-width: 50rem) {
    width: 80%;
  }
  min-height: 45rem;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Close = styled.img.attrs({
  src: close,
})`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuizModalFrame = ({ _handleModal, children, ...rest }) => {
  return (
    <Container>
      <Background onClick={_handleModal} />
      <ModalBlock {...rest}>
        <Close onClick={_handleModal} />
        <Contents>{children}</Contents>
      </ModalBlock>
    </Container>
  );
};

export default QuizModalFrame;
