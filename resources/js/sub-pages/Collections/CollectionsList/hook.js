import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import camelCaseKeys from 'camelcase-keys';
import { useDispatch } from 'react-redux';
import { setCollections } from '@reducers/collectionsSlice';

const useCollectionsList = () => {
  const abortController = new AbortController();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Cookies.get('tab') !== 'notes' || !Cookies.get('collectionId'))
      getCollections();
    return () => {
      abortController.abort();
    };
  }, []);

  const getCollections = async () => {
    const response = await fetch('/api/collections', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      },
      signal: abortController.signal
    });
    if (!response.ok) return;
    const collections = await response.json();
    dispatch(setCollections({ list: camelCaseKeys(collections) }));
    setIsLoading(false);
  }

  return { isLoading, getCollections };
}

export default useCollectionsList;