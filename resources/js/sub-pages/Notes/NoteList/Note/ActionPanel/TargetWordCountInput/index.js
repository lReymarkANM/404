import useTargetWordCountInput from './hook';

const TargetWordCountInput = ({ noteId }) => {
  const {
    targetWordCount, setTargetWordCount,
    saveButtonText, setSaveButtonText,
    updateWordCount
  } = useTargetWordCountInput(noteId);

  return (
    <div
      className="absolute top-[110%] left-0 w-[80px] shadow-md p-[5px] rounded-sm bg-white"
      onClick={e => e.stopPropagation()}
    >
      <input
        className="block w-full bg-light-gray-2 rounded-sm px-1 outline-pink"
        type="number"
        placeholder="ex. 1000"
        value={targetWordCount}
        onChange={e => {
          setTargetWordCount(e.target.value);
          setSaveButtonText('Save');
        }}
      />
      <button
        className="w-full bg-pink rounded-md mt-1 text-white text-[12px] py-1 active:scale-90"
        onClick={updateWordCount}
      >
        {saveButtonText}
      </button>
    </div>
  );
}

export default TargetWordCountInput;