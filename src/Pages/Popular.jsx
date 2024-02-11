import { useState, useEffect } from 'react';

import Error from '@Components/Error/Error';
import Text from '@Components/UI/Text/Text';
import TitleMain from '@UI/Titles/TitleMain';
import Loading from '@Components/Loading/Loading';
import TracksList from '@Components/Tracks/TracksList';
import MoreButton from '@Components/Buttons/MoreButton';
import ArtistsList from '@Components/Artist/ArtistsList';
import PlaylistList from '@Components/Playlist/PlaylistList';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetPopularTracksQuery } from '@Redux/APIEndpoints/trackEndpoints';
import { useGetPopularArtistsQuery } from '@Redux/APIEndpoints/artistEndpoints';
import { useGetPopularPlaylistsQuery } from '@Redux/APIEndpoints/playlistEndpoints';

export default function Popular() {
  const [tracksPage, setTracksPage] = useState(1);
  const [playlistsPage, setPlaylistsPage] = useState(1);
  const [artistsPage, setArtistsPage] = useState(1);
  const [allTracks, setAllTracks] = useState([]);
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [allArtists, setAllArtists] = useState([]);

  const {
    data: tracks,
    isLoading: tracksIsLoading,
    isFetching: tracksIsFetching,
    error: tracksError,
  } = useGetPopularTracksQuery({ page: tracksPage, limit: 30 });

  const {
    data: playlists,
    isLoading: playlistsIsLoading,
    isFetching: playlistsIsFetching,
    error: playlistsError,
  } = useGetPopularPlaylistsQuery({ page: playlistsPage, limit: 10 });

  const {
    data: artists,
    isLoading: artistsIsLoading,
    isFetching: artistsIsFetching,
    error: artistsError,
  } = useGetPopularArtistsQuery({ page: artistsPage, limit: 15 });

  const handlePageUpdate = (setter) => setter((prevPage) => prevPage + 1);
  const handleTracksPage = () => handlePageUpdate(setTracksPage);
  const handleArtistsPage = () => handlePageUpdate(setArtistsPage);
  const handlePlaylistsPage = () => handlePageUpdate(setPlaylistsPage);

  const updateData = (data, setter) => {
    if (data) setter((prev) => prev.concat(data));
  };

  useEffect(() => updateData(tracks?.tracks, setAllTracks), [tracks?.tracks]);
  useEffect(() => updateData(playlists?.playlists, setAllPlaylists), [playlists?.playlists]);
  useEffect(() => updateData(artists?.artists, setAllArtists), [artists?.artists]);

  if (tracksIsLoading || artistsIsLoading || playlistsIsLoading) return <Loading />;
  if (tracksError || artistsError || playlistsError)
    return <Error error={tracksError || artistsError || playlistsError} />;

  return (
    <>
      <ContainerRounded>
        <TitleMain>Hold the Beat: All-Time Greatest Hits</TitleMain>
        <Text>
          From Killer Beats to Captivating Melodies, Collection of the Most Popular Tarcks. Explore
          the Atmosphere of Global Hits
        </Text>
        <TracksList tracks={allTracks} />
        <MoreButton disabled={tracksIsFetching || !tracks.hasMore} onClick={handleTracksPage} />
      </ContainerRounded>
      <ContainerRounded>
        <TitleMain>Hit Repeat: Explore the Hottest Tracks in Top Playlists!</TitleMain>
        <Text>
          Welcome to our exclusive collection of top playlists, where each one is a unique journey
          into the world of music
        </Text>
        <PlaylistList playlists={allPlaylists} />
        <MoreButton
          disabled={playlistsIsFetching || !playlists.hasMore}
          onClick={handlePlaylistsPage}
        />
      </ContainerRounded>
      <ContainerRounded>
        <TitleMain>Top Talents: Explore the Best Artists</TitleMain>
        <Text>
          Dive into the world of musical legends who have left an indelible mark on the industry
        </Text>
        <ArtistsList artists={allArtists} />
        <MoreButton disabled={artistsIsFetching || !artists.hasMore} onClick={handleArtistsPage} />
      </ContainerRounded>
    </>
  );
}
