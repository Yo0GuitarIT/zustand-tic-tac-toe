import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { Square } from "../types/game.type";

// 定義更新函數的型別 - 可以是直接值或基於前一個狀態的函數
type StateUpdater<T> = T | ((prev: T) => T);

interface GameState {
  currentMove: number;
  history: Square[][];
}

const initialState: GameState = {
  currentMove: 0,
  history: [Array(9).fill(null)],
};

const useGameStore = create(
  combine(initialState, (set) => {
    return {
      setCurrentMove: (nextCurrentMove: StateUpdater<number>) => {
        set((state) => ({
          currentMove:
            typeof nextCurrentMove === "function"
              ? nextCurrentMove(state.currentMove)
              : nextCurrentMove,
        }));
      },
      setHistory: (nextHistory: StateUpdater<Square[][]>) => {
        set((state) => ({
          history:
            typeof nextHistory === "function"
              ? nextHistory(state.history)
              : nextHistory,
        }));
      },
    };
  }),
);

export default useGameStore;
