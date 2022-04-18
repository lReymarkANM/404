import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import camelCaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { showNotification } from '@reducers/notificationSlice';
import { setUser, setIsAuthenticated } from '@reducers/userSlice';

const useLogin = () => {
  const dispatch = useDispatch();
  const abortController = new AbortController();
  const [buttonText, setButtonText] = useState('Login');
  const [input, setInput] = useState({
    username: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    return () => {
      abortController.abort();
    }
  }, []);

  const login = () => {
    validate(errors => {
      if (errors) return;
      setButtonText('Logging in...');
      (async () => {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
          },
          body: JSON.stringify({ username: input.username, password: input.password }),
          signal: abortController.signal
        });
        const data = await response.json();
        if (data === 401) {
          dispatch(showNotification({ label: 'Invalid username or password' }));
          setButtonText('Login');
          return;
        }
        Cookies.set('token', data.token, { expires: 15 });
        dispatch(setUser({ data: camelCaseKeys(data.user) }));
        dispatch(showNotification({ label: 'Login Successfully' }));
        dispatch(setIsAuthenticated({ authenticate: true }));
        setButtonText('Login');
      })();
    });
  }

  const validate = callback => {
    const errors = {};
    const SUFFIX_MESSAGE = 'field is required';
    if (input.username === '') errors.username = `Username ${SUFFIX_MESSAGE}`;
    if (input.password === '') errors.password = `Password ${SUFFIX_MESSAGE}`;
    if (input.password !== '' && input.password.length < 8) errors.password = `Password is too short`;
    setFormErrors(errors);
    return callback(Object.keys(errors).length > 0);
  }

  return { buttonText, setButtonText, input, setInput, formErrors, setFormErrors, login, validate };
}

export default useLogin;