import { AiOutlineLogout } from 'react-icons/ai';

import { useAppContext } from '@Providers/AppProvider';

export default function LogoutButton() {
  const { handleLogOutVisibility } = useAppContext();
  return (
    <li>
      <button
        aria-label="log out"
        onClick={handleLogOutVisibility}
        className="min-w-full flex gap-4 items-center py-2 pl-6 opacity-60 border-r-4 border-solid border-transparent text-lg whitespace-nowrap duration-200 hover:opacity-100 active:text-main active:opacity-100 focus:opacity-100">
        <AiOutlineLogout size={24} />
        Log out
      </button>
    </li>
  );
}
