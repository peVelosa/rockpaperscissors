import { Paper, Rock, Scissors, Lizard, Spock } from "./Icon";

const SelectIcon = ({ icon }: { icon: string }) => {
  return (
    <>
      {icon === "PAPER" ? (
        <Paper />
      ) : icon === "ROCK" ? (
        <Rock />
      ) : icon === "SCISSORS" ? (
        <Scissors />
      ) : icon === "LIZARD" ? (
        <Lizard />
      ) : icon === "SPOCK" ? (
        <Spock />
      ) : null}
    </>
  );
};

export default SelectIcon;
