// import "./App.css";
import Game from "./components/Game";

import { create } from "zustand";

interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

const useStore = create<BearState>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

const BearCounter = () => {
  const bears = useStore((state) => state.bears);

  return <h1>{bears} bears around here...</h1>;
};

const Controls = () => {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
};

function App() {
  return <Game />;
}

export default App;
