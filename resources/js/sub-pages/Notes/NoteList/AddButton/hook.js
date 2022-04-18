import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import useNotes from '@sub-pages/Notes/hook';

const useAddButton = () => {
  const notes = useSelector(state => state.notes);
  const collectionId = notes.collectionId || Cookies.get('collectionId');
  const { getNotes } = useNotes(collectionId);
  
  const addNote = async () => {
    const response = await fetch(`/api/notes/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      },
      body: JSON.stringify({ collectionId })
    });
    if (!response.ok) return;
    getNotes();
  }

  return { addNote };
}

export default useAddButton;