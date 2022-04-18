const Title = ({ title, onTitleChange, onSave, isEditModeDisable, saveButtonLabel }) => {
  return (
    <div className="min-h-[100px] py-2 flex flex-wrap justify-center items-center cursor-pointer">
      {isEditModeDisable ? (
        <span className="text-[20px] text-center">
          {title}
        </span>
      ) : (
        <>
          <input
            className="block bg-light-gray-1 text-[20px] text-center border border-pink rounded-md outline-none"
            value={title}
            onChange={onTitleChange}
            disabled={isEditModeDisable}
          />
          <button
            className="bg-pink text-white rounded-md h-[30px] w-[100px]"
            onClick={onSave}
          >
            {saveButtonLabel}
          </button>
        </>
      )}
    </div>
  );
}

export default Title;