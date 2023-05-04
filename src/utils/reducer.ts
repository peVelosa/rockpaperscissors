import { initState } from "./context/GameModeProvider";
import { IReducerType } from "./reducerTypes";

const reducer = (
  state: typeof initState,
  { type, payload = null }: { type: IReducerType; payload?: string | null }
): typeof initState => {
  switch (type) {
    case IReducerType.PLAYER_PICK:
      return { ...state, player: payload };
    case IReducerType.HOUSE_PICK:
      return { ...state, house: payload };
    case IReducerType.WINNER:
      return { ...state, winner: payload };
    case IReducerType.PLAY_AGAIN:
      return { house: null, player: null, winner: null };
    case IReducerType.RESET:
      return { house: null, player: null, winner: null };
    default:
      return state;
  }
};

export default reducer;
