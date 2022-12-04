import { describe, it, expect } from "vitest";
import { getResult } from "./moves.js";

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
});
