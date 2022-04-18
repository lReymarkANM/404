import useAuth from './hook';
import Tabs from './Tabs';

const Auth = () => {
  const { currentTab, setCurrentTab, renderPage } = useAuth();

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full md:w-[400px] mx-2 shadow-md">
        <Tabs
          onSwitchLogin={() => setCurrentTab('login')}
          onSwitchRegister={() => setCurrentTab('register')}
        />
        <div className="p-4">
          {renderPage(currentTab)}
        </div>
      </div>
    </div>
  );
}

export default Auth;