import Menu from '@Components/Sidebar/Menu';
import Advertising from '@Components/Sidebar/Advertising';

import { useAppContext } from '@Providers/AppProvider';

export default function SidebarMobile() {
  const { menuVisibility, handleMenuVisibility } = useAppContext();
  return (
    <div
      onClick={handleMenuVisibility}
      className={`${
        menuVisibility ? 'bg-[#00000000] pointer-events-none' : 'bg-[#00000080]'
      }  lg:hidden z-[200] top-0 right-0 left-0 -bottom-20 duration-200`}>
      <div
        className={`${
          menuVisibility ? '-translate-x-full' : 'translate-x-0'
        } fixed top-0 overflow-scroll overflow-x-hidden h-screen pt-10 z-50 bg-zinc-50 duration-500 dark:bg-zinc-900`}>
        <Advertising />
        <Menu />
      </div>
    </div>
  );
}
