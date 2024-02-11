import {
  AiOutlineSetting,
  AiOutlineHeart,
  AiOutlineCustomerService,
  AiOutlineAppstore,
  AiOutlineTrophy,
} from 'react-icons/ai';

import MenuLink from '@Components/Sidebar/MenuLink';
import LogoutButton from '@Components/Buttons/LogoutButton';

export default function Menu() {
  return (
    <nav className="pb-10">
      <div className="grid gap-3 mb-6">
        <h3 className="text-lg uppercase pl-6">Menu</h3>
        <ul>
          <MenuLink to="/" Icon={AiOutlineAppstore} text="Home" />
          <MenuLink to="/music" Icon={AiOutlineCustomerService} text="Music" />
          <MenuLink to="/popular" Icon={AiOutlineTrophy} text="Most popular" />
          <MenuLink to="/favorites" Icon={AiOutlineHeart} text="Favorites" />
        </ul>
      </div>
      <div className="grid gap-3">
        <h3 className="text-lg uppercase pl-6">General</h3>
        <ul>
          <MenuLink to="/settings" Icon={AiOutlineSetting} text="Settings" />
          <LogoutButton />
        </ul>
      </div>
    </nav>
  );
}
