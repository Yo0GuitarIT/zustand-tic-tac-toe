interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square = ({ onSquareClick, value }: SquareProps) => {
  return (
    <button
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid #999",
        borderRadius: 0,
        color: "#000",
        display: "inline-flex",
        fontSize: "1rem",
        fontWeight: "bold",
        justifyContent: "center",
        outline: 0,
        padding: 0,
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
