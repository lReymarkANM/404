import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const useAuth = () => {
  const [currentTab, setCurrentTab] = useState('login');

  const renderPage = tab => {
    switch (tab) {
      case 'register':
        return (<Register />);
      default:
        return (<Login />);
    }
  }

  return { currentTab, setCurrentTab, renderPage };
}

export default useAuth;