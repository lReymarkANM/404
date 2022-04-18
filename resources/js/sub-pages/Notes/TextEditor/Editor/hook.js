import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import camelCaseKeys from 'camelcase-keys';
import { setNote, setContent } from '@reducers/noteSlice';
import { showNotification } from '@reducers/notificationSlice';

const useEditor = noteId => {
  const note = useSelector(state => state.note.data);
  const dispatch = useDispatch();
  const [saveButtonText, setSaveButtonText] = useState('Save');
  const [isEditMode, setIsEditMode] = useState(true);

  useEffect(() => {
    getNote();
  }, []);

  const handleContentChange = e => {
    dispatch(setContent({ content: e.target.value }));
    setSaveButtonText('Save');
  }

  const getNote = async () => {
    const response = await fetch(`/api/note/${noteId || Cookies.get('noteId')}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    if (!response.ok) return;
    const note = await response.json();
    dispatch(setNote({ note: camelCaseKeys(note) }));
  }

  const updateNoteContent = async () => {
    setSaveButtonText('Saving...');
    const response = await fetch(`/api/note/${noteId || Cookies.get('noteId')}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      },
      body: JSON.stringify({ title: note.title, content: note.content })
    });
    if (!response.ok) return;
    dispatch(showNotification({ label: 'Content saved!' }));
    setSaveButtonText('Saved!');
  }

  return { getNote, handleContentChange, updateNoteContent, saveButtonText, setSaveButtonText, isEditMode, setIsEditMode };
}

export default useEditor;