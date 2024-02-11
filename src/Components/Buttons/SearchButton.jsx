import { AiOutlineSearch } from 'react-icons/ai';

import ButtonRounded from '@UI/Buttons/ButtonRounded';

import { useAppContext } from '@Providers/AppProvider';

export default function SearchButton() {
  const { handleSearchVisibility } = useAppContext();
  return (
    <ButtonRounded aria-label="open search" onClick={handleSearchVisibility}>
      <AiOutlineSearch />
    </ButtonRounded>
  );
}
