import useNote from './hook';
import Title from '@sub-pages/Collections/Collection/Title';
import ActionPanel from './ActionPanel';

const Note = ({ data, onOpen }) => {
  const {
    title, handleTitleChange,
    wordCount, targetWordCount,
    editModeDisable, setEditModeDisable,
    buttonText,
    save, remove, selectNote
  } = useNote(data);
  
  return (
    <div className="border border-dark-gray rounded-md px-4 mb-2">
      <Title
        title={title}
        onTitleChange={handleTitleChange}
        onSave={save}
        isEditModeDisable={editModeDisable}
        saveButtonLabel={buttonText}
      />
      <ActionPanel
        noteId={data.id}
        wordCount={wordCount}
        onOpen={() => {
          const DESKTOP_WIDTH = 1280;
          if (window.innerWidth < DESKTOP_WIDTH) {
            onOpen();
            selectNote();
            return;
          };
          selectNote();
        }}
        onEdit={() => setEditModeDisable(!editModeDisable)}
        onDelete={remove}
      />
    </div>
  );
}

export default Note;