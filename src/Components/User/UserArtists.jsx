import { useSelector } from 'react-redux';

import ArtistsList from '@Components/Artist/ArtistsList';

export default function UserArtists() {
  const { artists } = useSelector((state) => state.user?.user?.favorites);
  return <ArtistsList artists={artists} />;
}
