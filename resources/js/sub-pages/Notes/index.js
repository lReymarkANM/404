import './style.css';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import useNotes from './hook';
import NoteList from './NoteList';
import TextEditor from './TextEditor';

const Notes = () => {
  const notes = useSelector(state => state.notes);
  const { isLoading, isShowNotes, setIsShowNotes } = useNotes(notes.collectionId || Cookies.get('collectionId'));

  return (
    <div className="notes-page bg-light-gray-1 relative flex flex-col lg:flex-row flex-1">
      {isShowNotes && (
        <NoteList
          isLoading={isLoading}
          notes={notes.list}
          onOpenNote={() => setIsShowNotes(!isShowNotes)}
        />
      )}
      <TextEditor
        isShowNotes={isShowNotes}
        onClickShowNotesToggler={() => {
          setIsShowNotes(!isShowNotes);
          Cookies.set('showNotesList', !isShowNotes, { expires: 3 });
        }}
      />
    </div>
  );
}

export default Notes;