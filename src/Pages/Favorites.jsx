import { Outlet } from 'react-router-dom';

import TitleMain from '@UI/Titles/TitleMain';
import UserInfo from '@Components/User/UserInfo';
import UserTabs from '@Components/User/UserTabs';
import ContainerRounded from '@UI/Containers/ContainerRounded';

function Favorites() {
  return (
    <ContainerRounded>
      <TitleMain>Sounds of My Soul: Favorite Musical Discoveries</TitleMain>
      <UserInfo />
      <UserTabs />
      <Outlet />
    </ContainerRounded>
  );
}

export default Favorites;
