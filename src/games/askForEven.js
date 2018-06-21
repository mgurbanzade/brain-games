import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import gameCore from '../core';

const numberLimit = 1000;
const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = n => n % 2 === 0;

const getAnswer = (q) => {
  if (isEven(q)) {
    return 'yes';
  }

  return 'no';
};

const generateQnA = () => {
  const question = generateNumber(numberLimit);
  const answer = getAnswer(question);

  return cons(question, answer);
};

const askForEven = () => gameCore(description, generateQnA);

export default askForEven;
