import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import gameCore from '../core';

const numberLimit = 100;
const description = 'Is this number prime? Answer yes/no';

const isPrime = (num) => {
  if (num < 2) return false;
  const sqrt = Math.sqrt(num);

  for (let i = 2; i < sqrt; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const generateQuestionAndAnswer = () => {
  const question = generateNumber(numberLimit);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const askForPrime = () => gameCore(description, generateQuestionAndAnswer);

export default askForPrime;
