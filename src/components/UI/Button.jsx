const Button = ({ children, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md border ${
        active
          ? "bg-primary text-white border-primary"
          : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
      } transition-colors duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;
