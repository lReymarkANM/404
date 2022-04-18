import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setUser, setProfilePicture } from '@reducers/userSlice';

const useProfilePicture = () => {
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getProfilePicture();
  }, []);

  const getProfilePicture = async () => {
    const response = await fetch('/api/profile-picture', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    if (!response.ok) return;
    const profilePicture = await response.json();
    dispatch(setProfilePicture({ profilePicture: profilePicture.source }));
  }

  const processImage = e => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      updateProfilePicture(imageData);
    }
    reader.readAsDataURL(imageFile);
  }

  const updateProfilePicture = async (imageData) => {
    const response = await fetch('/api/profile-picture/update', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      },
      body: JSON.stringify({ imageData })
    });
    if (!response.ok) return;
    dispatch(setUser({
      data: { ...user, profilePicture: imageData }
    }));
  }

  return { getProfilePicture, processImage };
}

export default useProfilePicture;