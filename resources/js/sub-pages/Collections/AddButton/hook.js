import Cookies from 'js-cookie';
import useCollectionsList from '../CollectionsList/hook';

const useAddButton = () => {
  const { getCollections } = useCollectionsList();

  const addCollection = async () => {
    const response = await fetch('/api/collections/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf_token]').content
      },
      body: JSON.stringify({ title: 'Untitled' })
    });
    if (!response.ok) return;
    getCollections();
  }

  return { addCollection };
}

export default useAddButton;