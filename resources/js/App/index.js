import React, { Suspense } from 'react';
import useApp from './hook';
import PopupNotification from '@common/PopupNotification';
import PageLoading from '@animations/PageLoading';
const Auth = React.lazy(() => import('@pages/Auth'));
const Home = React.lazy(() => import('@pages/Home'));

const App = () => {
  const { isAuthenticated } = useApp();

  return (
    <div className="flex flex-col flex-1 h-screen">
      <PopupNotification />

      {isAuthenticated ? (
        <Suspense fallback={<PageLoading />}>
          <Home />
        </Suspense>
      ) : (
        <Suspense fallback={<PageLoading />}>
          <Auth />
        </Suspense>
      )} 
    </div>
  );
}

export default App;