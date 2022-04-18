import useCollection from './hook';
import Title from './Title';
import ActionPanel from './ActionPanel';

const Collection = ({ data }) => {
  const {
    title, handleTitleChange,
    editModeDisable, setEditModeDisable,
    save, remove,
    buttonText
  } = useCollection(data);

  return (
    <div className="border border-dark-gray bg-white rounded-md px-4 mb-2">
      <Title
        title={title}
        onTitleChange={handleTitleChange}
        onSave={save}
        isEditModeDisable={editModeDisable}
        saveButtonLabel={buttonText}
      />
      <ActionPanel
        collectionId={data.id}
        notesCount={data.notesCount}
        onEdit={() => setEditModeDisable(!editModeDisable)}
        onDelete={() => remove()}
      />
    </div>
  );
}

export default Collection;