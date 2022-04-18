import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import camelCaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setCollections } from '@reducers/collectionsSlice';

const useCollections = () => {
  const abortController = new AbortController();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, []);

  const searchCollection = async (value) => {
    if (value === '') return;
    setIsLoading(true);
    const response = await fetch(`/api/collections/search?collection=${value}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    if (!response.ok) return;
    const collections = await response.json();
    dispatch(setCollections({ list: camelCaseKeys(collections) }));
    setIsLoading(false);
  }

  return { isLoading, searchCollection };
}

export default useCollections;