import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { showNotification } from '@reducers/notificationSlice';
import useApp from '@App/hook';
import useProfilePicture from '@sub-pages/Profile/ProfilePicture/hook';

const useProfileInfo = () => {
  const { getCurrentLoggedUser } = useApp();
  const { getProfilePicture } = useProfilePicture();
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    password: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [saveButtonText, setSaveButtonText] = useState('Save');

  useEffect(() => {
    setInputs(inputs => ({ ...inputs, firstName: user.firstName }));
    setInputs(inputs => ({ ...inputs, lastName: user.lastName }));
  }, []);
  
  const updateProfileInfo = async () => {
    setSaveButtonText('Saving...');
    const body = {
      firstName: inputs.firstName,
      lastName: inputs.lastName
    };
    if (inputs.password !== '' ||
      inputs.newPassword !== '' ||
      inputs.confirmNewPassword !== ''
    ) {
      body.password = inputs.password;
      body.newPassword = inputs.newPassword;
      body.confirmNewPassword = inputs.confirmNewPassword;
    }
    const response = await fetch('/api/user/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      },
      body: JSON.stringify(body)
    });
    if (response.status === 401) {
      setErrors(errors => ({
        ...errors,
        newPassword: '',
        confirmNewPassword: '',
        password: 'Password is incorrect'
      }));
      return;
    };
    if (response.status === 422) {
      setErrors(errors => ({ ...errors, newPassword: "New Password doesn't match" }));
      setErrors(errors => ({ ...errors, confirmNewPassword: "New Password doesn't match" }));
      return;
    }
    dispatch(showNotification({ label: 'Profile update' }));
    clearPasswordInputs();
    setErrors({});
    getCurrentLoggedUser(Cookies.get('token'));
    getProfilePicture();
    setSaveButtonText('Saved!');
  }

  const clearPasswordInputs = () => {
    setInputs(inputs => ({
      ...inputs,
      password: '',
      newPassword: '',
      confirmNewPassword: ''
    }));
  }

  return { inputs, setInputs, errors, updateProfileInfo, saveButtonText, setSaveButtonText };
}

export default useProfileInfo;