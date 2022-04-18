import { useState, useEffect } from 'react';

const Toggler = ({ className, onEnable, onDisable }) => {
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => {
    setIsToggle(!isToggle);
    !isToggle === true ?
      onEnable() :
      onDisable();
  }

  return (
    <div
      className={`${className} flex ${isToggle ? 'justify-end' : 'justify-start'} items-center w-[45px] h-[25px] px-[2px] border-4 rounded-full outline-dark-gray cursor-pointer`}
      onClick={() => toggle()}
    >
      <div className={`${isToggle ? 'bg-green' : 'bg-dark-gray'} block w-[15px] h-[15px] rounded-full`}></div>
    </div>
  );
}

export default Toggler;