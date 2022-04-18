import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification } from '@reducers/notificationSlice';

const useNotification = () => {
  const popupNotification = useSelector(state => state.notification);
  const dispatch = useDispatch();
  const notification = useRef(null);

  useEffect(() => {
    if (popupNotification.show) {
      show();
      setTimeout(() => {
        hide();
      }, 3000);
    }
  }, [popupNotification.show, popupNotification.label]);

  const show = () => {
    notification.current.classList.add('show');
  }

  const hide = () => {
    notification.current.classList.remove('show');
    setTimeout(() => {
      dispatch(hideNotification());
    }, 1000);
  }

  return { notification };
}

export default useNotification;