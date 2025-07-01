import { create } from "zustand";
import { combine } from "zustand/middleware";

// 定義遊戲狀態的型別
type Square = "X" | "O" | null;
type Squares = Square[];

// 定義更新函數的型別 - 可以是直接值或基於前一個狀態的函數
type StateUpdater<T> = T | ((prev: T) => T);

const useGameStore = create(
  combine(
    {
      squares: Array(9).fill(null),
      xIsNext: true,
    },
    (set) => {
      return {
        setSquares: (nextSquares: StateUpdater<Squares>) => {
          set((state) => ({
            squares:
              typeof nextSquares === "function"
                ? nextSquares(state.squares)
                : nextSquares,
          }));
        },
        setXIsNext: (nextXIsNext: StateUpdater<boolean>) => {
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
