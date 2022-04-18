import ProfilePicture from './ProfilePicture';
import ProfileInfos from './ProfileInfos';

const Profile = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="wrapper w-full lg:w-[800px] bg-light-gray-1 flex flex-col flex-1">
        <div className="flex flex-col flex-1 px-4 w-full md:w-[540px] mx-auto">
          <p className="text-[30px] font-medium text-center py-4 border-b border-dark-gray">
            Profile
          </p>

          <div className="py-4">
            <ProfilePicture />
            <ProfileInfos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;