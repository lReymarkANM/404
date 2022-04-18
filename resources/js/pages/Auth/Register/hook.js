import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showNotification } from '@reducers/notificationSlice';

const useRegister = () => {
  const dispatch = useDispatch();
  const [buttonText ,setButtonText] = useState('Submit');
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const register = () => {
    validate(errors => {
      if (errors) return;
      setButtonText('Submitting...');
      (async () => {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
          },
          body: JSON.stringify({
            firstname: input.firstname,
            lastname: input.lastname,
            username: input.username,
            password: input.password,
            password_confirmation: input.confirmPassword
          })
        });
        if (!response.ok) {
          dispatch(showNotification({ label: 'Some of your information may already exists' }));
          setButtonText('Submit');
          return;
        }
        setInput({
          firstname: '',
          lastname: '',
          username: '',
          password: '',
          confirmPassword: ''
        });
        dispatch(showNotification({ label: 'Registered Successfully' }));
        setButtonText('Submit');
      })();
    });
  }

  const validate = callback => {
    const errors = {};
    const SUFFIX_MESSAGE = 'field is required';
    if (input.firstname === '') errors.firstname = `Firstname ${SUFFIX_MESSAGE}`;
    if (input.lastname === '') errors.lastname = `Lastname ${SUFFIX_MESSAGE}`;
    if (input.username === '') errors.username = `Username ${SUFFIX_MESSAGE}`;
    if (input.password === '') errors.password = `Password ${SUFFIX_MESSAGE}`;
    if (input.password !== '' && input.password.length < 8) errors.password = `Password is too short`;
    if (input.confirmPassword !== input.password) errors.password = `Password doesn't match`;
    setFormErrors(errors);
    return callback(Object.keys(errors).length > 0);
  }

  return { buttonText ,setButtonText, input, setInput, formErrors, setFormErrors, register, validate };
}

export default useRegister;