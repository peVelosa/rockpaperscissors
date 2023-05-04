import useGame from "@/utils/hooks/useGame";
import React from "react";

const ButtonGameWrapper = ({
  disabled,
  align,
  payload,
  children,
}: {
  disabled?: boolean;
  align?: string;
  payload: string;
  children: React.ReactNode;
}) => {
  const { playerPick } = useGame();
  let borderColor;
  switch (payload) {
    case "SCISSORS":
      borderColor = "#eca922";
      break;
    case "PAPER":
      borderColor = "#4865f4";
      break;
    case "ROCK":
      borderColor = "#dd405d";
      break;
    case "LIZARD":
      borderColor = "#8c5de5";
      break;
    case "SPOCK":
      borderColor = "#52bed1";
      break;
    default:
      borderColor = "transparent";
      break;
  }

  return (
    <button
      className={`grid aspect-square w-24 place-content-center rounded-full border-[10px] focus:outline focus:outline-[6px] focus:outline-fuchsia-500 sm:w-36 sm:border-[14px] ${
        !!payload ? "bg-white" : "bg-[#1f3756]"
      } p-4 ${align}`}
      onClick={() => playerPick(payload)}
      style={{ borderColor: borderColor }}
      disabled={!!disabled}
    >
      {children}
    </button>
  );
};

export default ButtonGameWrapper;
