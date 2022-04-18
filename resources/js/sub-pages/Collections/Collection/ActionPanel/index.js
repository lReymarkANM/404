import { FaBook, FaPen, FaTrashAlt } from 'react-icons/fa';
import useActionPanel from './hook';

const ActionPanel = ({ collectionId, notesCount, onEdit, onDelete }) => {
  const { goToNotes } = useActionPanel(collectionId);
  
  return (
    <div className="flex justify-between items-center border-t border-dark-gray h-[40px]">
      <div className="flex items-center">
        <div
          className="text-dark-gray flex items-center"
        >
          <FaBook />
          <span className="ml-1 text-[13px]">{notesCount}</span>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={goToNotes}
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