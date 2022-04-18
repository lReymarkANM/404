import useProfileInfo from './hook';
import Input from '@common/Input';
import Button from '@common/Button';

const ProfileInfos = () => {
  const {
    inputs, setInputs,
    errors,
    updateProfileInfo,
    saveButtonText, setSaveButtonText
  } = useProfileInfo();

  return (
    <div className="mx-auto lg:max-w-[300px]">
      <div className="mb-2">
        <span className="text-[12px] mb-2 ml-1">Firstname</span>
        <Input
          onChange={e => {
            setInputs(inputs => ({ ...inputs, firstName: e.target.value }));
            setSaveButtonText('Save');
          }}
          value={inputs.firstName}
        />
      </div>
      <div className="mb-2">
        <span className="text-[12px] mb-2 ml-1">Lastname</span>
        <Input
          onChange={e => {
            setInputs(inputs => ({ ...inputs, lastName: e.target.value }));
            setSaveButtonText('Save');
          }}
          value={inputs.lastName}
        />
      </div>
      <div className="mb-2">
        <span className="text-[12px] mb-2 ml-1">Password</span>
        <Input
          type="password"
          onChange={e => {
            setInputs(inputs => ({ ...inputs, password: e.target.value }));
            setSaveButtonText('Save');
          }}
          value={inputs.password}
        />
        {errors.password && (
          <span className="text-red text-[15px] ml-1">{errors.password}</span>
        )}
      </div>
      <div className="mb-2">
        <span className="text-[12px] mb-2 ml-1">New Password</span>
        <Input
          type="password"
          onChange={e => {
            setInputs(inputs => ({ ...inputs, newPassword: e.target.value }));
            setSaveButtonText('Save');
          }}
          value={inputs.newPassword}
        />
        {errors.newPassword && (
          <span className="text-red text-[15px] ml-1">{errors.newPassword}</span>
        )}
      </div>
      <div className="mb-2">
        <span className="text-[12px] mb-2 ml-1">Confirm New Password</span>
        <Input
          type="password"
          onChange={e => {
            setInputs(inputs => ({ ...inputs, confirmNewPassword: e.target.value }));
            setSaveButtonText('Save');
          }}
          value={inputs.confirmNewPassword}
        />
        {errors.confirmNewPassword && (
          <span className="text-red text-[15px] ml-1">{errors.confirmNewPassword}</span>
        )}
      </div>
      <Button
        className="mt-8"
        label={saveButtonText}
        onClick={updateProfileInfo}
      />
    </div>
  );
}

export default ProfileInfos;