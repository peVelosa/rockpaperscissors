import { useEffect } from "react";
import ButtonGameWrapper from "./ButtonGameWrapper";
import useGame from "src/utils/hooks/useGame";

import SelectIcon from "./icons/SelectIcon";

const WinnerRevelation = () => {
  const { state, playAgain } = useGame();

  return (
    <>
      <div className="mx-auto flex w-full max-w-3xl flex-wrap justify-between px-4">
        <div className="order-1 grid basis-1/2 place-items-center sm:basis-auto">
          <ButtonGameWrapper disabled={true} payload={state.player!}>
            <SelectIcon icon={state.player!} />
          </ButtonGameWrapper>
          <p className="mt-4 text-sm font-semibold uppercase text-white">
            you picked
          </p>
        </div>
        <div className="order-3 mx-auto grid w-fit place-items-center gap-4 uppercase sm:order-2">
          <p className=" mt-8 text-4xl font-semibold text-white">
            {state.winner}
          </p>
          <button
            className="w-full rounded-md bg-white px-6 py-2 text-sm font-semibold disabled:bg-slate-300"
            onClick={() => playAgain()}
            disabled={!!!state.house}
          >
            PLAY AGAIN
          </button>
        </div>
        <div className="order-2 grid basis-1/2 place-items-center sm:order-3 sm:basis-auto">
          <ButtonGameWrapper disabled={true} payload={state.house!}>
            <SelectIcon icon={state.house!} />
          </ButtonGameWrapper>
          <p className="mt-4 text-sm font-semibold uppercase text-white">
            the house picked
          </p>
        </div>
      </div>
    </>
  );
};

export default WinnerRevelation;
