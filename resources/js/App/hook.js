import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import camelCaseKeys from 'camelcase-keys';
import { setUser, setIsAuthenticated } from '@reducers/userSlice';

const useApp = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const token = Cookies.get('token');

  useEffect(() => {
    if (token) getCurrentLoggedUser(token);
  }, []);

  const getCurrentLoggedUser = async (token) => {
    const response = await fetch('/api/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      }
    });
    if (!response.ok) return;
    const data = await response.json();
    dispatch(setIsAuthenticated({ authenticate: true }));
    dispatch(setUser({
      data: camelCaseKeys({
        ...data,
        profile_picture: null
      })
    }));
  }

  return { isAuthenticated, getCurrentLoggedUser };
}

export default useApp;