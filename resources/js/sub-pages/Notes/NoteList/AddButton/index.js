import { FaPlus } from 'react-icons/fa';
import useAddButton from './hook';

const AddButton = () => {
  const { addNote } = useAddButton();

  return (
    <div className="mr-2">
      <button
        className="w-[40px] h-[40px] flex justify-center items-center border border-dark-gray text-[25px] text-dark-gray rounded-md"
        onClick={addNote}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default AddButton;