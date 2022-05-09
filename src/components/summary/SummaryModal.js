import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalFrame from '../common/ModalFrame';
import palette from '../../styles/palette.js';

const Textbox = styled.div`
  background: ${palette.pink[0]};
  border-radius: 16px;
  height: 85%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  text-align: center;
  height: 520px;
  width: 90%;
  overflow: auto;
`;

const SummaryModal = ({ _handleModal }) => {
  const [summary, setSummary] = useState('hello');

  return (
    <ModalFrame _handleModal={_handleModal}>
      <h1>Summary</h1>
      <Textbox>
        <Text>
          The fundamental building block of deep learning is just a single,
          neuron also known as a perceptron. We want to find the weights of the
          neural network that will minimize the loss of our data set. If we
          compute the gradient of our laws, with respect to our weights, that's
          the derivative our gradient for loss with respect to the weights. Now,
          let's take a look at what's called a single layered neural network. We
          want to find the weights of the neural network that will minimize the
          loss of our data set. We compute the gradient of our loss with respect
          to each of the weights in our neural network. We want to learn a model
          that accurately describes our test data, not the training data, even
          though we're optimizing this model based on the training data. This is
          a very simple neural network that only has one input, one hidden
          neuron, and one output. The fundamental building block of deep
          learning is just a single, neuron also known as a perceptron. We want
          to find the weights of the neural network that will minimize the loss
          of our data set. If we compute the gradient of our laws, with respect
          to our weights, that's the derivative our gradient for loss with
          respect to the weights. Now, let's take a look at what's called a
          single layered neural network. We want to find the weights of the
          neural network that will minimize the loss of our data set. We compute
          the gradient of our loss with respect to each of the weights in our
          neural network. We want to learn a model that accurately describes our
          test data, not the training data, even though we're optimizing this
          model based on the training data. This is a very simple neural network
          that only has one input, one hidden neuron, and one output. The
          fundamental building block of deep learning is just a single, neuron
          also known as a perceptron. We want to find the weights of the neural
          network that will minimize the loss of our data set. If we compute the
          gradient of our laws, with respect to our weights, that's the
          derivative our gradient for loss with respect to the weights. Now,
          let's take a look at what's called a single layered neural network. We
          want to find the weights of the neural network that will minimize the
          loss of our data set. We compute the gradient of our loss with respect
          to each of the weights in our neural network. We want to learn a model
          that accurately describes our test data, not the training data, even
          though we're optimizing this model based on the training data. This is
          a very simple neural network that only has one input, one hidden
          neuron, and one output. The fundamental building block of deep
          learning is just a single, neuron also known as a perceptron. We want
          to find the weights of the neural network that will minimize the loss
          of our data set. If we compute the gradient of our laws, with respect
          to our weights, that's the derivative our gradient for loss with
          respect to the weights. Now, let's take a look at what's called a
          single layered neural network. We want to find the weights of the
          neural network that will minimize the loss of our data set. We compute
          the gradient of our loss with respect to each of the weights in our
          neural network. We want to learn a model that accurately describes our
          test data, not the training data, even though we're optimizing this
          model based on the training data. This is a very simple neural network
          that only has one input, one hidden neuron, and one output.
        </Text>
      </Textbox>
    </ModalFrame>
  );
};

export default SummaryModal;
