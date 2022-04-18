import { useState } from 'react';

const useActionPanel = () => {
  const [isTargetWordCountInputCollapse, setIsTargetWordCountInputCollapse] = useState(false);

  return { isTargetWordCountInputCollapse, setIsTargetWordCountInputCollapse };
}

export default useActionPanel;