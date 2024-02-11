import { useState } from 'react';

import Modal from '@Components/Modals/Modal';
import SearchForm from '@Components/Search/SearchForm';
import SearchResults from '@Components/Search/SearchResults';

import { useAppContext } from '@Providers/AppProvider';

export default function Search() {
  const { searchVisibility, handleSearchVisibility } = useAppContext();
  const [searchValue, setSearchValue] = useState('');
  return (
    <Modal
      visibility={searchVisibility}
      handler={handleSearchVisibility}
      title="Search Result"
      className="w-full">
      <SearchForm setSearchValue={setSearchValue} />
      <SearchResults searchValue={searchValue} />
    </Modal>
  );
}
