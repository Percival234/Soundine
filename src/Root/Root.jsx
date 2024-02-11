import { Outlet } from 'react-router-dom';

import Topbar from '@Components/Topbar/Topbar';
import Player from '@Components/Player/Player';
import Search from '@Components/Search/Search';
import ShareModal from '@Components/Modals/ShareModal';
import LogoutModal from '@Components/Modals/LogoutModal';
import DeleteModal from '@Components/Modals/DeleteModal';
import SidebarMobile from '@Components/Sidebar/SidebarDesktop';
import SidebarDesktop from '@Components/Sidebar/SidebarMobile';

export default function Root() {
  return (
    <main className="flex flex-1">
      <SidebarMobile />
      <SidebarDesktop />
      <div className="flex flex-col gap-10 flex-1 relative">
        <Topbar />
        <div className="@container h-full">
          <div className="flex flex-col gap-2 @xl:gap-5 pt-16 pb-5 @5xl:pt-20 max-w-7xl mx-auto px-1.5 h-full">
            <Outlet />
          </div>
        </div>
        <Player />
      </div>
      <DeleteModal />
      <LogoutModal />
      <ShareModal />
      <Search />
    </main>
  );
}
