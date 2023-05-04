import { useState, useEffect } from "react";
import Header from "./components/Header";
import useGame from "./utils/hooks/useGame";
import Game from "./components/Game/Game";
import Footer from "./components/footer/Footer";

const App = () => {
  const { state, gameMode } = useGame();
  const [score, setScore] = useState<number>(0);

  function updateScore(): void {
    if (state.winner === "you win") return setScore((prev) => prev + 1);
  }

  useEffect(() => {
    setScore(0);
  }, [gameMode]);
  useEffect(() => {
    updateScore();
  }, [state.winner]);

  return (
    <div className="h-screen w-screen overflow-auto bg-gradient-to-r from-[#1f3756] to-[#141539]">
      <div className="mx-auto h-full w-full max-w-7xl">
        <main className="relative grid h-full w-full grid-rows-[auto_5fr_1fr]">
          <Header score={score} />
          <Game />
          <Footer />
        </main>
      </div>
    </div>
  );
};
export default App;
