import { FaSearch } from 'react-icons/fa';
import useSearchField from './hook';
import Input from '@common/Input';

const SearchField = ({ placeholder, onSearch }) => {
  const { searchValue, setSearchValue } = useSearchField();

  return (
    <div
      className="flex bg-white p-2 border border-dark-gray rounded-md"
    >
      <Input
        placeholder={placeholder}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <button
        className="flex justify-center items-center bg-pink text-white ml-2
        rounded-md w-[70px] active:scale-95"
        onClick={() => onSearch(searchValue)}
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchField;