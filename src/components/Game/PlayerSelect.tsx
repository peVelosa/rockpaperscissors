import bgBonus from "@/assets/bg-pentagon.svg";
import bgNormal from "@/assets/bg-triangle.svg";
import Buttons from "./Buttons";
import useGame from "src/utils/hooks/useGame";

const PlayerSelect = () => {
  const { gameMode } = useGame();

  return (
    <>
      <Buttons />
      <img
        src={gameMode === "normal" ? bgNormal : bgBonus}
        alt=""
        className="w-full"
      />
    </>
  );
};

export default PlayerSelect;
