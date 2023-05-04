import ChangeGameMode from "./ChangeGameMode";
import Rules from "./Rules/Rules";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-2xl text-xs font-bold text-white sm:relative sm:text-base">
      <ChangeGameMode />
      <Rules />
    </footer>
  );
};

export default Footer;
