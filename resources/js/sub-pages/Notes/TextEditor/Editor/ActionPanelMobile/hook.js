import { useState } from 'react';

const useActionPanelMobile = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isEditMode, setIsEditMode] = useState(true);

  return { isCollapsed, setIsCollapsed, isEditMode, setIsEditMode }
}

export default useActionPanelMobile;