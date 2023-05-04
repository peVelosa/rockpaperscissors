import useGame from "src/utils/hooks/useGame";
import PlayerSelect from "./PlayerSelect";
import WinnerRevelation from "./WinnerRevelation";

const Game = () => {
  const { state } = useGame();

  return (
    <section className="grid h-full px-8">
      {!state.player ? (
        <div className="relative mx-auto mt-12 mb-12 h-fit w-full max-w-[28rem] sm:mt-16 sm:mb-8">
          <PlayerSelect />
        </div>
      ) : (
        <div className="mx-auto w-full py-16">
          <WinnerRevelation />
        </div>
      )}
    </section>
  );
};

export default Game;
