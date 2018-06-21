import { cons } from 'hexlet-pairs';
import { generateNumber, generateRangeNumber } from '../utils';
import gameCore from '../core';

const description = 'What number is missing in this progression?';
const numberLimit = 100;
const stepLimit = 10;
const progressionLength = 10;

const generateQnA = () => {
  const progression = [];
  const startPoint = generateNumber(numberLimit);
  const step = generateNumber(stepLimit);

  for (let i = startPoint; progression.length < progressionLength; i += step) {
    progression.push(i);
  }

  const randomIndex = generateRangeNumber(1, progression.length - 2);

  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return cons(question, answer);
};

const askForProgression = () => gameCore(description, generateQnA);

export default askForProgression;
