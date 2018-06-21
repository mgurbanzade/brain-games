import { cons } from 'hexlet-pairs';
import { generateNumber, gameCore } from '..';

const getSumOfNumbers = (num) => {
  const numStr = String(num);
  let res = 0;
  let i = 0;

  const iterateOver = (str) => {
    if (i < str.length) {
      res += parseInt(str[i], 10);
      i += 1;
      return iterateOver(str);
    }

    return res;
  };

  return iterateOver(numStr);
};

const concat = (str, num, count) => {
  if (count > 0) {
    str += num;
    return concat(str, num, count - 1);
  }

  return str;
};

const balanceNumber = (num) => {
  const sum = getSumOfNumbers(num);
  const numLength = String(num).length;

  if (sum % numLength === 0) return concat('', sum / numLength, numLength);

  const floor = Math.floor(sum / numLength);
  const remainder = sum % numLength;
  const result = concat('', floor, numLength - 1) + (floor + remainder);
  const lastDigit = result[result.length - 1];
  const preLastDigit = result[result.length - 2];

  // if (lastDigit - preLastDigit > 1) {
  //   result
  // }
};

const askForBalance = () => {
  const question = 355;
  const answer = balanceNumber(question);

  console.log(question);
  console.log(answer);
};

export default askForBalance;
