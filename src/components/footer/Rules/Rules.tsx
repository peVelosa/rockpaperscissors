import { useState } from "react";
import RulesModal from "./RulesModal";
import ButtonWrapper from "@/components/ButtonWrapper";

const Rules = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <>
      <ButtonWrapper
        handleClick={handleClick}
        align={"right-4 sm:top-10 bottom-8"}
        customClass={"w-full px-8 py-2 uppercase h-fit"}
        id="modal-button"
        aria-label={`modal ${isOpen ? "is open" : "is closed"}`}
        aria-modal={isOpen}
      >
        Rules
      </ButtonWrapper>
      {isOpen ? <RulesModal setIsOpen={setIsOpen} /> : null}
    </>
  );
};

export default Rules;
