import { useSelector } from 'react-redux';

import TracksList from '@Components/Tracks/TracksList';

export default function UserTracks() {
  const { tracks } = useSelector((state) => state.user?.user?.favorites);
  return <TracksList sort tracks={tracks} />;
}
