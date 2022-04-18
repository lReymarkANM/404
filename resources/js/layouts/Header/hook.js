import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { showNotification } from '@reducers/notificationSlice';
import { setIsAuthenticated } from '@reducers/userSlice';
import { setTab, TABS } from '@reducers/tabsSlice';

const useHeader = () => {
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(false);

  const goToProfileTab = () => {
    dispatch(setTab({ tab: TABS[2] }));
    Cookies.set('tab', TABS[2], { expires: 3 });
    Cookies.remove('collectionId');
  }

  const goToCollectionsTab = () => {
    dispatch(setTab({ tab: TABS[0] }));
    Cookies.remove('noteId');
    Cookies.set('tab', TABS[0], { expires: 3 });
    Cookies.remove('collectionId');
  }

  const logout = async () => {
    const confirmed = confirm('Are you sure you want to logout?');
    if (!confirmed) return;

    const response = await fetch('/api/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      }
    });
    if (!response.ok) return;
    dispatch(setIsAuthenticated({ authenticate: false }));
    dispatch(showNotification({ label: 'Logged Out' }));
    resetUserData();
  }

  const resetUserData = () => {
    dispatch(setTab({ tab: TABS[0] }));
    clearCookies();
  }

  const clearCookies = () => {
    const allCookies = Object.keys(Cookies.get());
    allCookies.forEach(cookieName => {
      Cookies.remove(cookieName);
    });
  }

  return { showNav, setShowNav, goToProfileTab, goToCollectionsTab, logout };
}

export default useHeader;