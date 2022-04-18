import './style.css';
import { useSelector } from 'react-redux';
import useNotification from './hook';

const PopupNotification = () => {
  const label = useSelector(state => state.notification.label);
  const { notification } = useNotification();

  return (
    <div
      ref={notification}
      className="popup-notification h-[50px] px-4 w-fit min-w-[300px] text-[15px] border-l-4 border-pink bg-white shadow-md"
    >
      <span>{label}</span>
    </div>
  );
}

export default PopupNotification;