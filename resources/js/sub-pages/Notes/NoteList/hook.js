import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import camelCaseKeys from 'camelcase-keys';
import { setNotes } from '@reducers/notesSlice';

const useNoteList = collectionId => {
  const dispatch = useDispatch();

  const searchNote = async (value) => {
    const response = await fetch(`/api/notes/${collectionId}/search?note=${value}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    if (!response.ok) return;
    const notes = await response.json();
    dispatch(setNotes({ notes: camelCaseKeys(notes) }));
  }

  return { searchNote };
}

export default useNoteList;