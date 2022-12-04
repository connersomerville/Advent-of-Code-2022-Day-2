const ROCK = {
  index: 0,
  label: "Rock",
  value: 1,
};
const PAPER = {
  index: 1,
  label: "Paper",
  value: 2,
};
const SCISSORS = {
  index: 2,
  label: "Scissors",
  value: 3,
};

type Move = {
  index: number;
  label: string;
  value: number;
};

export type OpponentMoveIdentifier = "A" | "B" | "C";
export const opponentMoves = new Map<OpponentMoveIdentifier, Move>([
  ["A", ROCK],
  ["B", PAPER],
  ["C", SCISSORS],
]);

export type PlayerMoveIdentifier = "X" | "Y" | "Z";
export const playerMoves = new Map<PlayerMoveIdentifier, Move>([
  ["X", ROCK],
  ["Y", PAPER],
  ["Z", SCISSORS],
]);

type GetResult = {
  playerMove: number;
  opponentMove: number;
};
const RESULT_MATRIX = [
  // ROCK PAPER SCISSORS
  [0, -1, 1], // ROCK
  [1, 0, -1], // PAPER
  [-1, 1, 0], // SCISSORS
];

/**
 * Calculates the result of a rock, paper, scissors game
 *
 * @param playerMove the player move
 * @param opponentMove the opponent move
 * @returns -1 if player loses, 0 if draw, and 1 if player wins
 */
export const getResult = ({ playerMove, opponentMove }: GetResult) => {
  return RESULT_MATRIX[playerMove][opponentMove];
};
