import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import camelCaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { showNotification } from '@reducers/notificationSlice';
import useEditor from '@sub-pages/Notes/TextEditor/Editor/hook';

const useTargetWordCountInput = noteId => {
  const abortController = new AbortController();
  const dispatch = useDispatch();
  const { getNote } = useEditor(Cookies.get('noteId'));
  const [targetWordCount, setTargetWordCount] = useState('');
  const [saveButtonText, setSaveButtonText] = useState('Save');

  useEffect(() => {
    getTargetWordCount();
    return () => {
      abortController.abort();
    }
  }, []);

  const getTargetWordCount = async () => {
    const response = await fetch(`/api/note/${noteId || Cookies.get('noteId')}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      },
      signal: abortController.signal
    });
    if (!response.ok) return;
    const note = camelCaseKeys(await response.json());
    setTargetWordCount(String(note.targetWordCount));
  }

  const updateWordCount = async () => {
    setSaveButtonText('Saving...');
    const response = await fetch(`/api/note/${noteId}/update-target-word-count`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      },
      body: JSON.stringify({ targetWordCount })
    });
    if (!response.ok) return;
    getNote();
    dispatch(showNotification({ label: 'Target word count updated' }));
    setSaveButtonText('Saved!');
  }

  return { targetWordCount, setTargetWordCount, updateWordCount, saveButtonText, setSaveButtonText };
}

export default useTargetWordCountInput;