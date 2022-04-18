import { FaPen } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import defaultUserProfilePicture from '@images/default-user-profile.png';
import useProfilePicture from './hook';

const ProfilePicture = () => {
  const user = useSelector(state => state.user.data);
  const { processImage } = useProfilePicture();

  return (
    <div className="relative w-[100px] h-[100px] mx-auto mb-4">
      <img
        className="block absolute top-0 left-0 w-full h-full object-cover rounded-full"
        src={user.profilePicture ?? defaultUserProfilePicture}
        alt={`${user.firstName}'s profile picture`}
      />
      <input
        className="hidden" type="file" id="profile-picture-file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={processImage}
      />
      <label
        className="absolute bottom-[5px] right-[5px] w-[25px] h-[25px] bg-pink
        rounded-full flex justify-center items-center text-[15px] text-white
        cursor-pointer"
        htmlFor="profile-picture-file"
      >
        <FaPen />
      </label>
    </div>
  );
}

export default ProfilePicture;