import useCollections from './hook';
import SearchField from '@common/SearchField';
import CollectionsList from './CollectionsList';

const Collections = () => {
  const { isLoading, searchCollection } = useCollections();
  
  return (
    <div className="flex flex-col flex-1">
      <div className="wrapper w-full lg:w-[800px] bg-light-gray-1 flex flex-col flex-1">
        <div className="flex flex-col flex-1 px-4 w-full md:w-[540px] mx-auto">
          <p className="text-[30px] font-medium text-center py-4 mb-4 border-b border-dark-gray">
            Collections
          </p>

          <SearchField
            placeholder="Search a collection"
            onSearch={searchCollection}
          />
          
          <CollectionsList />

        </div>
      </div>
    </div>
  );
}

export default Collections;