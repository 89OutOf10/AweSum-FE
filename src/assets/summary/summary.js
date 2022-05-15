export const long_summary =
  'A training data consists of samples. X and y I from one to n. We learn a ‘line’ that classifies called the \
linear decision boundary by using the soft-max classifier. Take row of W weight vector for each class and multiply \
that row with x and takes the numbers to a probability distribution. We use logistic regression. Conducting training \
with soft-max and cross-entropy loss to maximize the correct probability of the correct class and minimize the negative \
log probability of that class. Negative Log Likelihood indicates Cross Entropy Loss. Cross Entropy Error is the True Probability distribution be p,\
Computed model probability be q. We assume the ground truth by probability distribution using one-hot vector. By this the only term left is the \
negative log probability of the true class. Matrix Notation is f W multiplied by x. Traditional ML optimization is done by basic classifiers, which is sort of a fairly simple classifiers \
linear classifier. Unhelpful when problem is complex- We need for a new powerful classifier. \
Done by Neural Networks that deal with complex data for complex functions. We need for nonlinear \
decision boundaries. Word Vectors are used to build better representation space. \
Simultaneously change representations of words and weights. \
Think of word representations as having an extra layer in the neural net that is taking out a column of L. \
It is not practical, but in theory makes sense. An artificial neuron has axons from neuron an input, \
synapse is multiplication with weight, cell body is summing excitations and threshold. \
The signal is the output axon. A Neural Network is running several logistic regressions at the same time. \
We get a vector of outputs. Given, a task sentiment and minimize cross entropy loss. Having more layers means to change the \
input space around which performs better for non-linearities. If we could have a deeper network, we can learn to solve difficult, sophisticated questions. \
How to train such a network? Named Entity Recognition NER is for finding and Classifying names in text. \
It predicts Entities by classifying words in context have surrounding words around it and extracting entities as word subsequences. \
It is hard to work out boundaries of an entity. If something is an entity? Future School? or future school? and ambiguous. Binary True verses Corrupted word window classification. \
We build classifier for language that works inside a context. However, Ambiguity occurs. For example, to seed take out seed, plant seed. \
Window Classification is to classify a word in its context window of neighboring words. The first solution is to average the word vectors in a \
window and classify the average. This lose position information. Another solution is to make a big Vector of a word vector concatenate of word. \
And put through soft-max classifier then compute score w/ a sub-layer neuron network (learn non-linear interactions). \
Calculate the score the larger the better.';

export const medium_summary =
  "This week's class is a little preview of what's coming up in the class. \
  we're going to go through the words one at a time and get out relations between them. \
  Training a neural network with soft max and cross entropy loss. \
  The relations are obtained through word vectors. We perform tasks of Named Entity Recognition \
  and classification through this. Training steps can be done by matrix multiplication. ";
