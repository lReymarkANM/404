import { FaFileWord, FaPen, FaTrashAlt } from 'react-icons/fa';
import useActionPanel from './hook';
import TargetWordCountInput from './TargetWordCountInput';

const ActionPanel = ({ noteId, wordCount, onOpen, onEdit, onDelete }) => {
  const { isTargetWordCountInputCollapse, setIsTargetWordCountInputCollapse } = useActionPanel();

  return (
    <div className="flex justify-between items-center border-t border-dark-gray h-[40px]">
      <div className="flex items-center">
        <div
          className="text-dark-gray flex items-center cursor-pointer relative"
          onClick={() => setIsTargetWordCountInputCollapse(!isTargetWordCountInputCollapse)}
        >
          <FaFileWord />
          <span className="ml-1 text-[13px] underline decoration-1 active:opacity-50">
            {wordCount}
          </span>
          
          {isTargetWordCountInputCollapse && (
            <TargetWordCountInput
              noteId={noteId}
            />
          )}
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={onOpen}
          className="bg-pink text-white flex justify-center items-center w-[50px] h-[25px] rounded-md"
        >
          <span className="text-[10px]">Open</span>
        </button>
        <button
          onClick={onEdit}
          className="text-dark-gray flex items-center ml-4"
        >
          <FaPen />
          <span className="ml-1 text-[10px]">Edit</span>
        </button>
        <button
          onClick={onDelete}
          className="text-dark-gray flex items-center ml-4"
        >
          <FaTrashAlt />
          <span className="ml-1 text-[10px]">Delete</span>
        </button>
      </div>
    </div>
  );
}

export default ActionPanel;