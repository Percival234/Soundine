import { useParams } from 'react-router-dom';

import Error from '@Components/Error/Error';
import TitleMain from '@UI/Titles/TitleMain';
import Loading from '@Components/Loading/Loading';
import Similar from '@Components/Similar/Similar';
import TracksList from '@Components/Tracks/TracksList';
import PlaylistInfo from '@Components/Playlist/PlaylistInfo';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetPlaylistQuery } from '@Redux/APIEndpoints/playlistEndpoints';

export default function Playlist() {
  const { id } = useParams();
  const { data: playlist, isLoading, error } = useGetPlaylistQuery(id);

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>
      <ContainerRounded>
        <TitleMain>A Playlist That Will Conquer Your Emotions</TitleMain>
        <PlaylistInfo playlist={playlist} />
        <TracksList tracks={playlist.tracks} sort />
      </ContainerRounded>
      <Similar type="playlists" tags={playlist.tags} id={playlist._id} />
    </>
  );
}
