import { useSelector } from 'react-redux';
import defaultUserProfilePicture from '@images/default-user-profile.png';
import useHeader from './hook';
import HamburgerMenuIcon from '@common/HamburgerMenuIcon';
import Navigation from '@layouts/Navigation';

const Header = () => {
  const user = useSelector(state => state.user.data);
  const { showNav, logout, goToProfileTab, goToCollectionsTab, setShowNav } = useHeader();
  
  return (
    <div className="px-4 shadow-sm sticky top-0 left-0 bg-white z-20">
      <div className="wrapper h-[60px] flex items-center justify-between">
        <div
          className="w-fit flex items-center rounded-full cursor-pointer"
          onClick={goToProfileTab}
        >
          <img
            className="w-[40px] h-[40px] object-cover rounded-full"
            src={user.profilePicture ?? defaultUserProfilePicture}
            alt="Profile picture"
          />
          <span className="text-[15px] ml-2 font-medium">{user.firstName} {user.lastName}</span>
        </div>

        <HamburgerMenuIcon
          showNav={showNav}
          onToggle={() => setShowNav(!showNav)}
        />

        <Navigation
          className={showNav ? 'flex' : 'hidden'}
          onSwitchToCollections={() => {
            goToCollectionsTab();
            setShowNav(!showNav);
          }}
          onLogout={logout}
        />
      </div>
    </div>
  );
}

export default Header;