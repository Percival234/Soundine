import { useSelector } from 'react-redux';

import SubTitle from '@UI/Titles/SubTitle';
import TotalContainer from '@Components/Total/TotalContainer';

export default function UserInfo() {
  const user = useSelector((state) => state.user?.user);
  return (
    <div className="flex gap-5 flex-col items-center">
      <SubTitle>{user?.name}</SubTitle>
      <TotalContainer
        tracks={user?.favorites?.tracks}
        playlists={user?.favorites?.playlists}
        artists={user?.favorites?.artists}
      />
    </div>
  );
}
