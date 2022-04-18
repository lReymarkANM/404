import { useState } from 'react';

const useSearchField = () => {
  const [searchValue, setSearchValue] = useState('');

  return { searchValue, setSearchValue };
}

export default useSearchField;