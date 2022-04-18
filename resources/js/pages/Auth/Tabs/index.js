import { useState } from 'react';

const Tabs = ({ onSwitchLogin, onSwitchRegister }) => {
  const [tab, setTab] = useState('login');

  return (
    <div>
      <button
        className={`w-1/2 h-[50px] shadow-sm ${tab === 'login' && 'border-b-4 border-pink'}`}
        onClick={() => {
          onSwitchLogin();
          setTab('login');
        }}
      >Login</button>
      <button
        className={`w-1/2 h-[50px] shadow-sm ${tab === 'register' && 'border-b-4 border-pink'}`}
        onClick={() => {
          onSwitchRegister();
          setTab('register');
        }}
      >Register</button>
    </div>
  );
}

export default Tabs;