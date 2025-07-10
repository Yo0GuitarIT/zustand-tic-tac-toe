import type { Squares } from "../types/game.type";
import {
  calculateStatus,
  calculateTurns,
  calculateWinner,
} from "../utils/game.utils";
import Square from "./Square";

interface BoardProps {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (nextSquares: Squares) => void;
}

const Board = ({ onPlay, squares, xIsNext }: BoardProps) => {
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? "X" : "O";
  const status = calculateStatus(winner, turns, player);

  const handleClick = (i: number) => {
    if (squares[i] || winner) return;
    const nextSquares = [...squares];
    nextSquares[i] = player;
    onPlay(nextSquares);
  };

  console.log("squares", squares);
  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>
      <div
        style={{
          border: "1px solid #999",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          height: "calc(3*2.5rem)",
          width: "calc(3*2.5rem)",
        }}
      >
        {squares?.map((square, squareIndex) => (
          <Square
            key={squareIndex}
            value={square}
            onSquareClick={() => handleClick(squareIndex)}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
