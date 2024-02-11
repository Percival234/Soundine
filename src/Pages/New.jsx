import { useState, useEffect } from 'react';

import Text from '@UI/Text/Text';
import Error from '@Components/Error/Error';
import TitleMain from '@UI/Titles/TitleMain';
import Loading from '@Components/Loading/Loading';
import TracksList from '@Components/Tracks/TracksList';
import MoreButton from '@Components/Buttons/MoreButton';
import PlaylistList from '@Components/Playlist/PlaylistList';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetNewTracksQuery } from '@Redux/APIEndpoints/trackEndpoints';
import { useGetNewPlaylistsQuery } from '@Redux/APIEndpoints/playlistEndpoints';

export default function New() {
  const [tracksPage, setTracksPage] = useState(1);
  const [playlistsPage, setPlaylistsPage] = useState(1);
  const [allTracks, setAllTracks] = useState([]);
  const [allPlaylists, setAllPlaylists] = useState([]);

  const {
    data: tracks,
    isLoading: tracksIsLoading,
    isFetching: tracksIsFetching,
    error: tracksError,
  } = useGetNewTracksQuery({ page: tracksPage, limit: 20 });

  const {
    data: playlists,
    isLoading: playlistsIsLoading,
    isFetching: playlistsIsFetching,
    error: playlistsError,
  } = useGetNewPlaylistsQuery({ page: playlistsPage, limit: 10 });

  const handlePageUpdate = (setter) => setter((prevPage) => prevPage + 1);
  const handleTracksPage = () => handlePageUpdate(setTracksPage);
  const handlePlaylistsPage = () => handlePageUpdate(setPlaylistsPage);

  const updateData = (data, setter) => {
    if (data) setter((prev) => prev.concat(data));
  };

  useEffect(() => updateData(tracks?.tracks, setAllTracks), [tracks?.tracks]);
  useEffect(() => updateData(playlists?.playlists, setAllPlaylists), [playlists?.playlists]);

  if (tracksIsLoading || playlistsIsLoading) return <Loading />;
  if (tracksError || playlistsError) return <Error error={tracksError || playlistsError} />;

  return (
    <>
      <ContainerRounded>
        <TitleMain>Add Rhythm to Your Life: New Tracks Every Week</TitleMain>
        <Text>A selection of new tracks that will set the mood for the entire day</Text>
        <TracksList tracks={allTracks} />
        <MoreButton disabled={tracksIsFetching || !tracks.hasMore} onClick={handleTracksPage} />
      </ContainerRounded>
      <ContainerRounded>
        <TitleMain>Music Trends: Latest Playlists</TitleMain>
        <Text>
          Stay in trend with the latest hits and emerging artists. We continuously update our
          playlists to keep you always engaged and entertained
        </Text>
        <PlaylistList playlists={allPlaylists} />
        <MoreButton
          disabled={playlistsIsFetching || !playlists.hasMore}
          onClick={handlePlaylistsPage}
        />
      </ContainerRounded>
    </>
  );
}
