import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import useNotes from '@sub-pages/Notes/hook';
import useEditor from '@sub-pages/Notes/TextEditor/Editor/hook';
import { showNotification } from '@reducers/notificationSlice';
import { setNote } from '@reducers/noteSlice';

const useNote = note => {
  const collectionId = useSelector(state => state.notes.collectionId);
  const dispatch = useDispatch();
  const { getNotes } = useNotes(collectionId || Cookies.get('collectionId'));
  const { getNote } = useEditor();
  const [title, setTitle] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [targetWordCount, setTargetWordCount] = useState('');
  const [editModeDisable, setEditModeDisable] = useState(true);
  const [buttonText, setButtonText] = useState('Save');

  useEffect(() => {
    setTitle(note.title);
    setWordCount(getContentWordCount(note.content));
    setTargetWordCount(note.targetWordCount);
  }, []);

  const handleTitleChange = e => {
    setTitle(e.target.value);
    setButtonText('Save');
  }

  const save = async () => {
    setButtonText('Saving...');
    const response = await fetch(`/api/note/${note.id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      },
      body: JSON.stringify({ title, content: note.content })
    });
    if (!response.ok) return;
    getNotes();
    getNote();
    setEditModeDisable(true);
    setButtonText('Saved!');
    dispatch(showNotification({ label: 'Saved!' }));
  }

  const remove = async () => {
    setButtonText('Saving...');
    const response = await fetch(`/api/note/${note.id}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      }
    });
    if (!response.ok) return;
    getNotes();
    dispatch(showNotification({ label: 'Note deleted' }));
  }

  const selectNote = () => {
    dispatch(setNote({ note }));
    Cookies.set('noteId', note.id, { expires: 3 });
    Cookies.set('showNotesList', true, { expires: 3 });
  }

  const getContentWordCount = content => {
    const wordCount = content ? content.split(' ').length : 0;
    return wordCount;
  }

  return { title, wordCount, targetWordCount, editModeDisable, setEditModeDisable, buttonText, handleTitleChange, save, remove, selectNote };
}

export default useNote;