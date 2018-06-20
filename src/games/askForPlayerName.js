import { askForAnything } from '..';

const askForPlayerName = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = askForAnything('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

export default askForPlayerName;
