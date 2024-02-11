import { AiOutlineUnorderedList } from 'react-icons/ai';

import ButtonRounded from '@UI/Buttons/ButtonRounded';

import { useAppContext } from '@Providers/AppProvider';

export default function MenuButton() {
  const { handleMenuVisibility } = useAppContext();
  return (
    <ButtonRounded aria-label="menu-button" onClick={handleMenuVisibility}>
      <AiOutlineUnorderedList />
    </ButtonRounded>
  );
}
