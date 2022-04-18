import './style.css';

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      className="custom-input h-[40px] w-full bg-light-gray-2 outline-none rounded-md text-[15px] px-4"
      type={type || 'text'}
      placeholder={placeholder || ''}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;