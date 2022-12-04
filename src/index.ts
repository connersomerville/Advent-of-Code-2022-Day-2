import {
  getResult,
  OpponentMoveIdentifier,
  opponentMoves,
  PlayerMoveIdentifier,
  playerMoves,
} from "./moves.js";
import { getLineReader } from "./reader.js";

const args = process.argv.slice(2);
const filePath = args[0] || "test/fixtures/input.txt";

const lineReader = getLineReader({
  filePath,
});

const WIN = 6;
const DRAW = 3;

let totalScore = 0;

lineReader.on("line", (line) => {
  const [oMove, pMove] = line.split(" ");

  const playerMove = playerMoves.get(pMove as PlayerMoveIdentifier);
  const opponentMove = opponentMoves.get(oMove as OpponentMoveIdentifier);

  if (!playerMove || !opponentMove) {
    throw new Error("Invalid move was used");
  }

  const result = getResult({
    playerMove: playerMove.index,
    opponentMove: opponentMove.index,
  });
  let resultLabel = "";
  let resultScore = playerMove.value;

  if (result > 0) {
    resultLabel = "player wins";
    resultScore += WIN;
  }
  if (result === 0) {
    resultLabel = "draw";
    resultScore += DRAW;
  }
  if (result < 0) {
    resultLabel = "player loses";
  }

  totalScore += resultScore;

  console.log(
    `Player played ${playerMove.label} and opponent played ${opponentMove.label}: ${resultLabel}`
  );
});

lineReader.on("close", () => {
  console.log(`Players total score is ${totalScore}`);
});
