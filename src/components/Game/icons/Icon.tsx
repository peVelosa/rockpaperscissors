import lizardIcon from "@/assets/icon-lizard.svg";
import paperIcon from "@/assets/icon-paper.svg";
import rockIcon from "@/assets/icon-rock.svg";
import scissorsIcon from "@/assets/icon-scissors.svg";
import spockIcon from "@/assets/icon-spock.svg";

export function Lizard() {
  return <img src={lizardIcon} alt="lizard button" className="w-8 sm:w-12" />;
}

export function Paper() {
  return <img src={paperIcon} alt="paper button" className="w-8 sm:w-12" />;
}

export function Rock() {
  return <img src={rockIcon} alt="rock button" className="w-8 sm:w-12" />;
}

export function Scissors() {
  return (
    <img src={scissorsIcon} alt="scissors button" className="w-8 sm:w-12" />
  );
}

export function Spock() {
  return <img src={spockIcon} alt="spock button" className="w-8 sm:w-12" />;
}
