const Button = ({ className, onClick, label }) => {
  return (
    <button
      className={`text-[20px] w-full h-[50px] block rounded-md bg-pink text-white ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;