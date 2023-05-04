export type dispatchType = React.Dispatch<{
  type: string;
  payload: string;
}>;

export enum IReducerType {
  PLAYER_PICK,
  HOUSE_PICK,
  WINNER,
  PLAY_AGAIN,
  RESET,
}
