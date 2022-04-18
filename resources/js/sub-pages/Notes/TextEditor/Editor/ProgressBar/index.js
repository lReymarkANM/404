import { useRef } from 'react';
import useProgressBar from './hook';

const ProgressBar = () => {
  const progressBar = useRef(null);
  const { targetWordCount, wordCount } = useProgressBar(progressBar);
  
  return (
    <div className="flex flex-col lg:flex-row items-center py-3">
      <span className="order-3 font-medium lg:order-1 hidden lg:inline">Words</span>

      <div className="order-2 w-full lg:w-[300px] h-[15px] rounded-full overflow-hidden shadow-inner lg:mx-4">
        <div ref={progressBar} className={`h-full bg-gradient-to-b from-light-pink to-pink`}></div>
      </div>

      <div className="order-1 lg:order-3 mb-3 lg:mb-0">
        <span className="font-bold text-[18px]">{wordCount} </span>
        <span className="text-dark-gray text-[15px]">/ {targetWordCount}</span>
      </div>
    </div>
  );
}

export default ProgressBar;