import { useSelector } from 'react-redux';
import useHome from './hook';
import Header from '@layouts/Header';

const Home = () => {
  const tab = useSelector(state => state.tabs.tab);
  const { renderPage } = useHome();

  return (
    <div className="flex flex-col flex-1">
      <Header />

      <div className="wrapper flex flex-col flex-1 w-full">
        {renderPage(tab)}
      </div>
    </div>
  );
}

export default Home;