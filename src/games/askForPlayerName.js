import { askForAnything } from '..';

const askForPlayerName = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = askForAnything('May I have your name? ');
  return console.log(`Hello, ${playerName}!`);
};

export default askForPlayerName;
