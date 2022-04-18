import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setCollectionId } from '@reducers/notesSlice';
import { setTab, TABS } from '@reducers/tabsSlice';

const useActionPanel = collectionId => {
  const dispatch = useDispatch();

  const goToNotes = () => {
    dispatch(setCollectionId({ collectionId }));
    dispatch(setTab({ tab: TABS[1] }));
    Cookies.set('collectionId', collectionId, { expires: 7 });
    Cookies.set('tab', TABS[1], { expires: 7 });
  }

  return { goToNotes };
}

export default useActionPanel;