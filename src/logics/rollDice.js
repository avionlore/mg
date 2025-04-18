export function rollDice(sides) {
  return Math.floor(Math.random() * parseInt(sides, 10)) + 1;
}

export function rollDiceRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
