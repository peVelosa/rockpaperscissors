import ButtonGameWrapper from "./ButtonGameWrapper";
import useGame from "src/utils/hooks/useGame";
import { Scissors, Paper, Rock, Lizard, Spock } from "./icons/Icon";

const Buttons = () => {
  const { gameMode } = useGame();

  return (
    <>
      <ButtonGameWrapper
        align={
          gameMode === "normal"
            ? "absolute top-[-5%] right-[-1rem]"
            : "absolute right-1/2 top-[-15%] translate-x-1/2"
        }
        payload={"SCISSORS"}
      >
        <Scissors />
      </ButtonGameWrapper>
      <ButtonGameWrapper
        align={
          gameMode === "normal"
            ? "absolute top-[-5%] left-[-1rem]"
            : "absolute right-[-1.5rem] top-[20%]"
        }
        payload={"PAPER"}
      >
        <Paper />
      </ButtonGameWrapper>
      <ButtonGameWrapper
        align={
          gameMode === "normal"
            ? "absolute right-1/2 translate-x-1/2 top-[75%]"
            : "absolute right-0 top-3/4"
        }
        payload={"ROCK"}
      >
        <Rock />
      </ButtonGameWrapper>
      {gameMode === "bonus" && (
        <>
          <ButtonGameWrapper
            align={"absolute left-0 top-3/4"}
            payload={"LIZARD"}
          >
            <Lizard />
          </ButtonGameWrapper>
          <ButtonGameWrapper
            align={"absolute left-[-1.5rem] top-[20%]"}
            payload={"SPOCK"}
          >
            <Spock />
          </ButtonGameWrapper>
        </>
      )}
    </>
  );
};

export default Buttons;
