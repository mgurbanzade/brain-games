import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import gameCore from '../core';

const numberLimit = 1000;
const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (val1, val2) => {
  let num1 = val1;
  let num2 = val2;

  if (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }

    return findGcd(num1, num2);
  }

  return num1 + num2;
};

const generateQuestionAndAnswer = () => {
  const num1 = generateNumber(numberLimit);
  const num2 = generateNumber(numberLimit);

  return cons(`${num1} ${num2}`, String(findGcd(num1, num2)));
};

const askForGcd = () => gameCore(description, generateQuestionAndAnswer);

export default askForGcd;
