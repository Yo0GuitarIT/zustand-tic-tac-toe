import { create } from "zustand";
import { combine } from "zustand/middleware";

// 定義遊戲狀態的型別
type GameSquare = string | null;
type GameSquares = GameSquare[];

const useGameStore = create(
  combine(
    { squares: Array(9).fill(null) as GameSquares, xIsNext: true },
    (set) => {
      return {
        setSquares: (
          nextSquares: GameSquares | ((prev: GameSquares) => GameSquares)
        ) => {
          set((state) => ({
            squares:
              typeof nextSquares === "function"
                ? nextSquares(state.squares)
                : nextSquares,
          }));
        },
        setXIsNext: (nextXIsNext: boolean | ((prev: boolean) => boolean)) => {
          set((state) => ({
            xIsNext:
              typeof nextXIsNext === "function"
                ? nextXIsNext(state.xIsNext)
                : nextXIsNext,
          }));
        },
      };
    }
  )
);

export default useGameStore;
