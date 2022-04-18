import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useProgressBar = progressBarElement => {
  const progressBar = progressBarElement.current;
  const note = useSelector(state => state.note.data);
  const targetWordCount = note.targetWordCount;
  const [wordCount, setWordCount] = useState(0);
  
  useEffect(() => {
    getContentWordCount(note.content);
    renderProgress(note);
  }, [note]);

  const getContentWordCount = content => {
    const wordCount = content ? content.split(' ').length : 0;
    setWordCount(wordCount);
    return wordCount;
  }

  const renderProgress = async (note) => {
    if (!progressBar) return;

    if (note.targetWordCount <= getContentWordCount(note.content)) {
      progressBar.style.width = `100%`;
    } else {
      const percent = getPercentOf(getContentWordCount(note.content), note.targetWordCount);
      progressBar.style.width = `${percent}%`;
    }
  }

  const getPercentOf = (initial, max) => {
    const x = initial * 100;
    return x / max;
  }

  return { targetWordCount, wordCount, setWordCount };
}

export default useProgressBar;