import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Error from '@Components/Error/Error';
import TitleMain from '@UI/Titles/TitleMain';
import Loading from '@Components/Loading/Loading';
import TracksList from '@Components/Tracks/TracksList';
import MoreButton from '@Components/Buttons/MoreButton';
import ArtistsList from '@Components/Artist/ArtistsList';
import PlaylistList from '@Components/Playlist/PlaylistList';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetTracksByTagsQuery } from '@Redux/APIEndpoints/trackEndpoints';
import { useGetArtistsByTagsQuery } from '@Redux/APIEndpoints/artistEndpoints';
import { useGetPlaylistsByTagsQuery } from '@Redux/APIEndpoints/playlistEndpoints';

export default function Tag() {
  const { tag } = useParams();
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
  } = useGetTracksByTagsQuery({ tags: [tag], limit: 10, page: tracksPage });

  const {
    data: playlists,
    isLoading: playlistsIsLoading,
    isFetching: playlistsIsFetching,
    error: playlistsError,
  } = useGetPlaylistsByTagsQuery({ tags: [tag], limit: 5, page: playlistsPage });

  const {
    data: artists,
    isLoading: artistsIsLoading,
    isFetching: artistsIsFetching,
    error: artistsError,
  } = useGetArtistsByTagsQuery({ tags: [tag], limit: 5, page: artistsPage });

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
      {allTracks.length > 0 && (
        <ContainerRounded>
          <TitleMain>{tag.toUpperCase()} - Tracks</TitleMain>
          <TracksList tracks={allTracks} />
          <MoreButton disabled={tracksIsFetching || !tracks.hasMore} onClick={handleTracksPage} />
        </ContainerRounded>
      )}
      {allPlaylists.length > 0 && (
        <ContainerRounded>
          <TitleMain>{tag.toUpperCase()} - Playlists</TitleMain>
          <PlaylistList playlists={allPlaylists} />
          <MoreButton
            disabled={playlistsIsFetching || !playlists.hasMore}
            onClick={handlePlaylistsPage}
          />
        </ContainerRounded>
      )}
      {allArtists.length > 0 && (
        <ContainerRounded>
          <TitleMain>{tag.toUpperCase()} - Artists</TitleMain>
          <ArtistsList artists={allArtists} />
          <MoreButton
            disabled={artistsIsFetching || !artists.hasMore}
            onClick={handleArtistsPage}
          />
        </ContainerRounded>
      )}
    </>
  );
}
