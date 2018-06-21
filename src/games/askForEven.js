import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import gameCore from '../core';

const isEven = n => n % 2 === 0;
const numberLimit = 1000;

const generateQnA = () => {
  const getAnswer = (q) => {
    if (isEven(q)) {
      return 'yes';
    }

    return 'no';
  };

  const question = generateNumber(numberLimit);
  const answer = getAnswer(question);

  return cons(question, answer);
};

const askForEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  gameCore(description, generateQnA);
};

export default askForEven;
