import { useContext } from "react";
import { gameContext } from "../context/GameModeProvider";

const useGame = () => {
  const { state, playerPick, reset, playAgain, gameMode, selectGameMode } =
    useContext(gameContext);
  return {
    state,
    playerPick,
    reset,
    playAgain,
    gameMode,
    selectGameMode,
  };
};

export default useGame;
