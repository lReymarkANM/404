import { FaPlus } from 'react-icons/fa';
import useAddButton from './hook';

const AddButton = () => {
  const { addCollection } = useAddButton();

  return (
    <div className="flex justify-center pb-2">
      <button
        className="flex justify-center items-center text-[25px] h-[40px] w-[40px] text-dark-gray rounded-md border border-dark-gray"
        onClick={() => addCollection()}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default AddButton;