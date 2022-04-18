import EditModeTogglerMobile from '../ActionPanelMobile/EditModeTogglerMobile';

const EditModeToggler = ({ className, isEditMode, onToggle }) => {
  return (
    <div className={`${className}`}>
      <EditModeTogglerMobile
        isEditMode={isEditMode}
        onToggle={onToggle}
      />
    </div>
  );
}

export default EditModeToggler;