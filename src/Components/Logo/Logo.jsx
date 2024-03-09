import LinkScroll from '@UI/Links/LinkScroll';

import { useAppContext } from '@Providers/AppProvider';

export default function Logo() {
  const { handleMenuVisibility } = useAppContext();
  return (
    <LinkScroll onClick={handleMenuVisibility} to="/" className="text-4xl text-center font-bold">
      Soundine
    </LinkScroll>
  );
}
