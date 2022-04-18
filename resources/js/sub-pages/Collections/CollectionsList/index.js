import { useSelector } from 'react-redux';
import useCollectionsList from './hook';
import Collection from '../Collection';
import AddButton from '../AddButton';
import FetchLoading from '@animations/FetchLoading';

const CollectionsList = () => {
  const collections = useSelector(state => state.collections.list);
  const { isLoading } = useCollectionsList();

  return (
    <>
      {isLoading ? (
        <FetchLoading />
      ) : collections.length > 0 ? (
        <div className="pt-4 flex flex-col flex-1">
          {collections.map(collection => (
            <Collection
              key={collection.id}
              data={collection}
            />
          ))}
          <AddButton />
        </div>
      ) : (
        <div className="pt-4 flex flex-col flex-1 justify-center items-center">
          <AddButton />
          <span>You don't have any collections.</span>
        </div>
      )}
    </>
  );
}

export default CollectionsList;