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

export type MoveIdentifier = "A" | "B" | "C";
export const moves = new Map<MoveIdentifier, Move>([
  ["A", ROCK],
  ["B", PAPER],
  ["C", SCISSORS],
]);

export type PlayerResultCode = "X" | "Y" | "Z";
type GetMoveByCode = {
  opponentMove: number;
  desiredResult: PlayerResultCode;
};
const MOVE_MATRIX = [
  // WIN DRAW LOSE
  ["B", "A", "C"], // OPPONENT IS ROCK
  ["C", "B", "A"], // OPPONENT IS PAPER
  ["A", "C", "B"], // OPPONENT IS SCISSORS
];
export const getMoveByCode = ({
  opponentMove,
  desiredResult,
}: GetMoveByCode) => {
  let desiredResultIdx = 0;

  if (desiredResult === "X") {
    desiredResultIdx = 2;
  }
  if (desiredResult === "Y") {
    desiredResultIdx = 1;
  }
  if (desiredResult === "Z") {
    desiredResultIdx = 0;
  }

  return MOVE_MATRIX[opponentMove][desiredResultIdx];
};

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
