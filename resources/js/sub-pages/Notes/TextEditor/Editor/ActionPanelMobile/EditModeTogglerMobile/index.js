const EditModeTogglerMobile = ({ isEditMode, onToggle }) => {
  return (
    <div className="flex">
      <span className="text-[15px] mr-2 mb-2">Edit Mode</span>
      <div
        className={`flex ${isEditMode ? 'justify-end' : 'justify-start'} items-center w-[45px] h-[25px] px-[2px] border-4 rounded-full outline-dark-gray cursor-pointer`}
        onClick={() => onToggle()}
      >
        <div className={`${isEditMode ? 'bg-green' : 'bg-dark-gray'} block w-[15px] h-[15px] rounded-full`}></div>
      </div>
    </div>
  );
}

export default EditModeTogglerMobile;