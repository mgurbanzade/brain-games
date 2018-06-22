import readlineSync from 'readline-sync';
import askForEven from './askForEven';
import askForCalc from './askForCalc';
import askForGcd from './askForGcd';
import askForBalance from './askForBalance';
import askForProgression from './askForProgression';
import askForPrime from './askForPrime';

const gameNames = ['Even', 'Calc', 'Gcd', 'Balance', 'Progression', 'Prime'];
const games = [askForEven, askForCalc, askForGcd, askForBalance, askForProgression, askForPrime];


const gamesInterface = () => {
  console.log('Welcome to the Brain Games!');

  for (let i = 0; i < games.length; i += 1) {
    console.log(`${i} -- Brain ${gameNames[i]}`);
  }

  console.log('\n');
  let playerChoice = readlineSync.question('Please type the number of the game you want to play: ');

  while (!playerChoice.match(/[0-9]/) || playerChoice > games.length - 1) {
    playerChoice = readlineSync.question('Incorrect input! Try again: ');
  }

  games[playerChoice]();
};

export default gamesInterface;
