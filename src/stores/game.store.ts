import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { Squares } from "../types/game.type";

// 定義更新函數的型別 - 可以是直接值或基於前一個狀態的函數
type StateUpdater<T> = T | ((prev: T) => T);

interface GameState {
  history: Squares[];
  xIsNext: boolean;
}

const initialState: GameState = {
  history: [Array(9).fill(null)],
  xIsNext: true,
};

const useGameStore = create(
  combine(initialState, (set) => {
    return {
      setHistory: (nextHistory: StateUpdater<Squares[]>) => {
        set((state) => ({
          history:
            typeof nextHistory === "function"
              ? nextHistory(state.history)
              : nextHistory,
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
  }),
);

export default useGameStore;
