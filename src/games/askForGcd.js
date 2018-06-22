import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import gameCore from '../core';

const numberLimit = 1000;
const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (val1, val2) => {
  if (!val2) return val1;
  return findGcd(val2, val1 % val2);
};

const generateQuestionAndAnswer = () => {
  const num1 = generateNumber(numberLimit);
  const num2 = generateNumber(numberLimit);

  return cons(`${num1} ${num2}`, String(findGcd(num1, num2)));
};

const askForGcd = () => gameCore(description, generateQuestionAndAnswer);

export default askForGcd;
