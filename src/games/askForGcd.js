import { cons, car, cdr } from 'hexlet-pairs';
import generateNumber from '../utils';
import gameCore from '../core';

const numberLimit = 1000;
const generatePair = () => `${generateNumber(numberLimit)} ${generateNumber(numberLimit)}`;

const getNumbersFromString = (str) => {
  const num1 = parseInt(str.split(' ')[0], 10);
  const num2 = parseInt(str.split(' ')[1], 10);

  return cons(num1, num2);
};

const findGcd = (pair) => {
  let num1 = car(pair);
  let num2 = cdr(pair);

  if (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }

    return findGcd(cons(num1, num2));
  }

  return num1 + num2;
};

const generateQnA = () => {
  const question = generatePair();
  const answer = findGcd(getNumbersFromString(question));
  return cons(question, answer);
};

const askForGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  gameCore(description, generateQnA);
};

export default askForGcd;
