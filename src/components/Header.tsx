import useGame from "../utils/hooks/useGame";

const Header = ({ score }: { score: number }) => {
  const { gameMode } = useGame();

  return (
    <header className="w-full p-4 font-semibold uppercase text-white">
      <div className="flex max-w-6xl justify-between rounded-md p-4 outline outline-4 outline-gray-600 sm:my-4 lg:mt-4 xl:mx-auto">
        <div>
          <ul className=" flex h-full flex-col items-stretch justify-center text-sm sm:text-3xl">
            <li className="leading-3 sm:leading-7">rock</li>
            <li className="leading-3 sm:leading-7">paper</li>
            <li className="leading-3 sm:leading-7">scissors</li>
            {gameMode === "bonus" ? (
              <>
                <li className="leading-3 sm:leading-7">lizard</li>
                <li className="leading-3 sm:leading-7">spock</li>
              </>
            ) : null}
          </ul>
        </div>
        <div className="flex aspect-square flex-col items-center justify-between rounded-md bg-white px-6 py-4 text-gray-800">
          <p className="text-xs sm:text-lg">score</p>
          <h1 className="text-5xl sm:text-7xl">{score}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
