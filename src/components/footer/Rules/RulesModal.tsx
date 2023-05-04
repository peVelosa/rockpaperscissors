import rulesNormal from "@/assets/image-rules.svg";
import rulesBonus from "@/assets/image-rules-bonus.svg";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import useGame from "@/utils/hooks/useGame";

const RulesModal = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { gameMode } = useGame();

  const closeModalClick = (e: MouseEvent) => {
    if (!e.target) return;
    const event = e.target as unknown as { id: string };
    if (event.id === "modal-button") return;
    setIsOpen(false);
  };
  const closeModalKeydown = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeModalClick);
    document.body.addEventListener("keydown", closeModalKeydown);
    return () => {
      document.body.removeEventListener("click", closeModalClick);
      document.body.removeEventListener("keydown", closeModalKeydown);
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-20 h-full bg-white px-6 py-2 text-slate-600 sm:bottom-1/2 sm:left-1/2 sm:right-0 sm:h-fit sm:max-w-[500px] sm:-translate-x-1/2 sm:translate-y-1/2 sm:rounded-xl sm:py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full">
          <h1 className="mx-auto my-20 w-fit text-2xl font-bold uppercase sm:my-2 sm:ml-0">
            Rules
          </h1>
          <img
            src={gameMode === "normal" ? rulesNormal : rulesBonus}
            alt="game rules"
            className="mx-auto"
            draggable={false}
          />
          <button
            className="absolute bottom-20 left-1/2 h-fit translate-x-[-50%] p-2 text-3xl hover:text-slate-800 sm:-top-2 sm:bottom-0 sm:left-full"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen((old) => !old);
            }}
          >
            <FaTimes />
          </button>
        </div>
      </div>
      <div
        id="backdrop"
        className="fixed inset-0 z-10 bg-black bg-opacity-50"
      ></div>
    </>
  );
};

export default RulesModal;
