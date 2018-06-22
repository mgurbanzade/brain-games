import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import gameCore from '../core';

const numberLimit = 100;
const description = 'Is this number prime? Answer yes/no';

const isPrime = (num) => {
  if (num < 2) return 'no';

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }

  return 'yes';
};

const generateQuestionAndAnswer = () => {
  const question = generateNumber(numberLimit);
  const answer = isPrime(question);
  return cons(question, answer);
};

const askForPrime = () => gameCore(description, generateQuestionAndAnswer);

export default askForPrime;
