import useGameStore from "../stores/game.store";
import type { Squares } from "../types/game.type";
import Board from "./Board";

const Game = () => {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares: Squares) => {
    const newHistory = [...history, nextSquares];
    setHistory(newHistory);
    setXIsNext(!xIsNext);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Game;
