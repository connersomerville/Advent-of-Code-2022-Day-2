import { describe, it, expect } from "vitest";
import { getMoveByCode, getResult } from "./moves.js";

describe("Moves", () => {
  describe("Get Result", () => {
    describe("Wins", () => {
      it.concurrent(
        "returns 1 when player plays rock, and opponent plays scissors",
        () => {
          expect(
            getResult({
              playerMove: 0,
              opponentMove: 2,
            })
          ).toEqual(1);
        }
      );

      it.concurrent(
        "returns 1 when player plays paper, and opponent plays rock",
        () => {
          expect(
            getResult({
              playerMove: 1,
              opponentMove: 0,
            })
          ).toEqual(1);
        }
      );

      it.concurrent(
        "returns 1 when player plays scissors, and opponent plays paper",
        () => {
          expect(
            getResult({
              playerMove: 2,
              opponentMove: 1,
            })
          ).toEqual(1);
        }
      );
    });

    describe("Draws", () => {
      it.concurrent(
        "returns 0 when player plays rock, and opponent plays rock",
        () => {
          expect(
            getResult({
              playerMove: 0,
              opponentMove: 0,
            })
          ).toEqual(0);
        }
      );

      it.concurrent(
        "returns 0 when player plays paper, and opponent plays paper",
        () => {
          expect(
            getResult({
              playerMove: 1,
              opponentMove: 1,
            })
          ).toEqual(0);
        }
      );

      it.concurrent(
        "returns 0 when player plays scissors, and opponent plays scissors",
        () => {
          expect(
            getResult({
              playerMove: 2,
              opponentMove: 2,
            })
          ).toEqual(0);
        }
      );
    });

    describe("Losses", () => {
      it.concurrent(
        "returns -1 when player plays rock, and opponent plays paper",
        () => {
          expect(
            getResult({
              playerMove: 0,
              opponentMove: 1,
            })
          ).toEqual(-1);
        }
      );

      it.concurrent(
        "returns -1 when player plays paper, and opponent plays scissors",
        () => {
          expect(
            getResult({
              playerMove: 1,
              opponentMove: 2,
            })
          ).toEqual(-1);
        }
      );

      it.concurrent(
        "returns -1 when player plays scissors, and opponent plays rock",
        () => {
          expect(
            getResult({
              playerMove: 2,
              opponentMove: 0,
            })
          ).toEqual(-1);
        }
      );
    });
  });

  describe("Get Coded Move", () => {
    describe("X (Lose)", () => {
      it.concurrent("returns paper when opponent plays scissors", () => {
        expect(
          getMoveByCode({
            desiredResult: "X",
            opponentMove: 2,
          })
        ).toEqual("B");
      });

      it.concurrent("returns scissors when opponent plays rock", () => {
        expect(
          getMoveByCode({
            desiredResult: "X",
            opponentMove: 0,
          })
        ).toEqual("C");
      });

      it.concurrent("returns rock when opponent plays paper", () => {
        expect(
          getMoveByCode({
            desiredResult: "X",
            opponentMove: 1,
          })
        ).toEqual("A");
      });
    });

    describe("Y (Draw)", () => {
      it.concurrent("returns rock when opponent plays rock", () => {
        expect(
          getMoveByCode({
            desiredResult: "Y",
            opponentMove: 0,
          })
        ).toEqual("A");
      });

      it.concurrent("returns paper when opponent plays paper", () => {
        expect(
          getMoveByCode({
            desiredResult: "Y",
            opponentMove: 1,
          })
        ).toEqual("B");
      });

      it.concurrent("returns scissors when opponent plays scissors", () => {
        expect(
          getMoveByCode({
            desiredResult: "Y",
            opponentMove: 2,
          })
        ).toEqual("C");
      });
    });

    describe("Z (Win)", () => {
      it.concurrent("returns scissors when opponent plays paper", () => {
        expect(
          getMoveByCode({
            desiredResult: "Z",
            opponentMove: 1,
          })
        ).toEqual("C");
      });

      it.concurrent("returns rock when opponent plays scissors", () => {
        expect(
          getMoveByCode({
            desiredResult: "Z",
            opponentMove: 2,
          })
        ).toEqual("A");
      });

      it.concurrent("returns paper opponent plays rock", () => {
        expect(
          getMoveByCode({
            desiredResult: "Z",
            opponentMove: 0,
          })
        ).toEqual("B");
      });
    });
  });
});
