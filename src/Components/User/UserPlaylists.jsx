import { useSelector } from 'react-redux';

import PlaylistList from '@Components/Playlist/PlaylistList';

export default function UserPlaylists() {
  const { playlists } = useSelector((state) => state.user?.user?.favorites);
  return <PlaylistList playlists={playlists} />;
}
