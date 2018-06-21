import { cons } from 'hexlet-pairs';
import { generateRangeNumber } from '../utils';
import gameCore from '../core';

const minRange = 100;
const maxRange = 1000;
const description = 'Balance the given number.';

const sumDigits = (num) => {
  const result = String(num).split('').map(Number).reduce((a, b) => a + b, 0);
  return result;
};

const concat = (emptyString, num, count) => {
  let str = emptyString;

  if (count > 0) {
    str += num;
    return concat(str, num, count - 1);
  }

  return str;
};

const balanceNumber = (num) => {
  const numLength = String(num).length;
  const sum = sumDigits(num);

  if (sum % numLength === 0) return concat('', sum / numLength, numLength);

  const num1 = Math.floor(sum / numLength);
  const num2 = num1 + 1;
  let a;

  for (let i = 1; i < numLength; i += 1) {
    a = concat('', num1, numLength - i) + concat('', num2, i);
    if (sumDigits(parseInt(a, 10)) === sum) return a;
  }

  return a;
};

const generateQnA = () => {
  const question = generateRangeNumber(minRange, maxRange);
  const answer = parseInt(balanceNumber(question), 10);
  return cons(question, answer);
};

const askForBalance = () => gameCore(description, generateQnA);

export default askForBalance;
