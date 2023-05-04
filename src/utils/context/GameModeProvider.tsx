import { createContext, useReducer, useState, useEffect } from "react";
import reducer from "../reducer";
import type { Dispatch } from "react";
import { IReducerType } from "../reducerTypes";

type gameContextType = {
  state: typeof initState;
  gameMode: "normal" | "bonus";
  selectGameMode: React.Dispatch<React.SetStateAction<"normal" | "bonus">>;
  playAgain: () => void;
  reset: () => void;
  playerPick: (choose: string) => void;
};
type initState = {
  player: string | null;
  house: string | null;
  winner: string | null;
};

export const initState: initState = {
  player: null,
  house: null,
  winner: null,
};

export const gameContext = createContext({} as gameContextType);

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameMode, selectGameMode] = useState<"normal" | "bonus">("normal");
  const [state, dispatch] = useReducer(reducer, initState);

  function housePick() {
    const min = Math.ceil(0);

    const max = Math.floor(gameMode === "normal" ? 3 : 5);
    const randomPick = Math.floor(Math.random() * (max - min + 1)) + min;
    const choose = () => {
      switch (randomPick) {
        case 1:
          return "ROCK";
        case 2:
          return "PAPER";
        case 3:
          return "SCISSORS";
        case 4:
          return "LIZARD";
        case 5:
          return "SPOCK";
        default:
          return "ROCK";
      }
    };
    dispatch({ type: IReducerType.HOUSE_PICK, payload: choose() });
  }
  function evaluateWinner() {
    if (state.player === state.house) {
      dispatch({ type: IReducerType.WINNER, payload: "draw" });
      return;
    }
    switch (state.house) {
      case "ROCK":
        if (state.player === "PAPER" || state.player === "SPOCK") {
          dispatch({ type: IReducerType.WINNER, payload: "you win" });
        } else {
          dispatch({ type: IReducerType.WINNER, payload: "you lose" });
        }
        break;
      case "PAPER":
        if (state.player === "SCISSORS" || state.player === "LIZARD") {
          dispatch({ type: IReducerType.WINNER, payload: "you win" });
        } else {
          dispatch({ type: IReducerType.WINNER, payload: "you lose" });
        }
        break;
      case "SCISSORS":
        if (state.player === "SPOCK" || state.player === "ROCK") {
          dispatch({ type: IReducerType.WINNER, payload: "you win" });
        } else {
          dispatch({ type: IReducerType.WINNER, payload: "you lose" });
        }
        break;
      case "LIZARD":
        if (state.player === "ROCK" || state.player === "SCISSORS") {
          dispatch({ type: IReducerType.WINNER, payload: "you win" });
        } else {
          dispatch({ type: IReducerType.WINNER, payload: "you lose" });
        }
        break;
      case "SPOCK":
        if (state.player === "LIZARD" || state.player === "PAPER") {
          dispatch({ type: IReducerType.WINNER, payload: "you win" });
        } else {
          dispatch({ type: IReducerType.WINNER, payload: "you lose" });
        }
        break;
      default:
        dispatch({ type: IReducerType.WINNER, payload: "you win" });
        break;
    }
  }
  function playAgain() {
    dispatch({ type: IReducerType.PLAY_AGAIN });
  }
  function reset() {
    dispatch({ type: IReducerType.RESET });
  }
  function playerPick(choose: string) {
    dispatch({ type: IReducerType.PLAYER_PICK, payload: choose });
  }

  useEffect(() => {
    if (state.player === null) return;
    const delay = 1 * 1000;
    let timeOut = setTimeout(() => {
      housePick();
    }, delay);
    return () => {
      clearTimeout(timeOut);
    };
  }, [state.player]);
  useEffect(() => {
    if (!state.house) return;
    evaluateWinner();
  }, [state.house]);

  return (
    <gameContext.Provider
      value={{
        state,
        reset,
        playAgain,
        playerPick,
        gameMode,
        selectGameMode,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameProvider;
