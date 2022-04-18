import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import useEditor from './hook';
import Button from '@common/Button';
import EditModeToggler from './EditModeToggler';
import ProgressBar from './ProgressBar';
import ActionPanelMobile from './ActionPanelMobile';

const Editor = () => {
  const note = useSelector(state => state.note.data);
  const {
    handleContentChange,
    updateNoteContent,
    saveButtonText,
    isEditMode, setIsEditMode
  } = useEditor(note.id);

  return (
    <div className="flex flex-col flex-1">
      <div className="border border-dark-gray mt-4 rounded-md flex flex-col flex-1">
        {note.id || Cookies.get('noteId') ? (
          <textarea
            className="block w-full h-full resize-none p-2 text-[15px] lg:text-[20px] rounded-md outline-pink"
            placeholder="What's on your mind?"
            spellCheck={false}
            onChange={handleContentChange}
            value={note.content || ''}
            disabled={!isEditMode}
          >
          </textarea>
        ) : (
          <div
            className="flex justify-center items-center w-full h-full rounded-md outline-pink bg-white"
          >
            <span className="text-[25px]">
              Please select note first
            </span>
          </div>
        )}
      </div>
      
      <div className="relative lg:flex lg:justify-between lg:items-center lg:py-2">
        <EditModeToggler
          className="hidden lg:flex"
          isEditMode={isEditMode}
          onToggle={() => setIsEditMode(!isEditMode)}
        />
        <ProgressBar />
        <Button
          className="w-[100px] h-10 text-[15px] hidden lg:block"
          label={saveButtonText}
          onClick={updateNoteContent}
        />

        <ActionPanelMobile
          saveButtonText={saveButtonText}
          onSave={updateNoteContent}
          onEditModeEnable={() => setIsEditMode(true)}
          onEditModeDisable={() => setIsEditMode(false)}
        />
      </div>
    </div>
  );
}

export default Editor;