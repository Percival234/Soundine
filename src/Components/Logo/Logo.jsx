import NavLinkScroll from '@UI/Links/NavLinkScroll';

import { useAppContext } from '@Providers/AppProvider';

export default function Logo() {
  const { handleMenuVisibility } = useAppContext();
  return (
    <NavLinkScroll onClick={handleMenuVisibility} to="/" className="text-4xl text-center font-bold">
      Soundine
    </NavLinkScroll>
  );
}
