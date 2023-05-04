const ButtonWrapper = ({
  handleClick,
  align,
  customClass,
  children,
  id,
}: {
  customClass: React.ComponentProps<"button">["className"];
  align: React.ComponentProps<"button">["className"];
  handleClick: () => void;
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <button
      className={`absolute outline outline-2 outline-gray-600 ${align} w-fit ${customClass} focus:outline-4 focus:outline-purple-700`}
      onClick={handleClick}
      id={id}
    >
      {children}
    </button>
  );
};

export default ButtonWrapper;
