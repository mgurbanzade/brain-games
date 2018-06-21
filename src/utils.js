const generateNumber = limit => Math.floor(Math.random() * limit);

const generateRangeNumber = (min, max) =>
  Math.floor(Math.random() * max) + min;

export { generateNumber, generateRangeNumber };
