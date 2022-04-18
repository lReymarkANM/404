import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import useNoteList from './hook';
import AddButton from './AddButton';
import Note from './Note';
import FetchLoading from '@animations/FetchLoading';
import SearchField from '@common/SearchField';

const NoteList = ({ isLoading, notes, onOpenNote }) => {
  const collectionId = useSelector(state => state.notes.collectionId);
  const { searchNote } = useNoteList(collectionId || Cookies.get('collectionId'));

  return (
    <div className="flex flex-col flex-1 lg:grow-0 lg:basis-[350px]
      overflow-y-auto bg-white absolute lg:relative top-0 left-0 z-10
      h-full w-full lg:shadow-xl lg:border-r lg:border-dark-gray"
    >
      <div className="flex flex-col flex-1">
        <div className="px-4 flex flex-col flex-1">
          <div className="flex justify-center items-center py-4 mb-4 border-b border-dark-gray">
            <AddButton />
            <SearchField
              placeholder="Search a note"
              onSearch={searchNote}
            />
          </div>

          {isLoading ? (
            <FetchLoading />
          ) : notes.length > 0 ? (
            <div>
              {notes.map(note => (
                <Note
                  key={note.id}
                  data={note}
                  onOpen={onOpenNote}
                />
              ))}
            </div>
          ) : (
            <div className="pt-4 flex flex-col flex-1 justify-center items-center">
              <span>You don't have any notes.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  ); 
}

export default NoteList;