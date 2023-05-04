import useGame from "@/utils/hooks/useGame";
import ButtonWrapper from "@/components/ButtonWrapper";

const ChangeGameMode = ({}) => {
  const { gameMode, selectGameMode, reset } = useGame();

  const handleClick = (): void => {
    selectGameMode((old) => (old === "normal" ? "bonus" : "normal"));
    reset();
  };

  return (
    <>
      <ButtonWrapper
        handleClick={handleClick}
        align={"sm:top-0 left-4 bottom-4"}
        customClass={
          "aspect-square w-16 rounded-full uppercase sm:w-fit rounded-full p-2"
        }
      >
        {gameMode === "normal" ? "bonus" : "normal"}
      </ButtonWrapper>
    </>
  );
};

export default ChangeGameMode;
