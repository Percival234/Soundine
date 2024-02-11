import PropTypes from 'prop-types';

import Text from '@UI/Text/Text';
import Error from '@Components/Error/Error';
import TitleMain from '@UI/Titles/TitleMain';
import Loading from '@Components/Loading/Loading';
import TracksList from '@Components/Tracks/TracksList';
import ArtistsList from '@Components/Artist/ArtistsList';
import PlaylistList from '@Components/Playlist/PlaylistList';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetTracksByTagsQuery } from '@Redux/APIEndpoints/trackEndpoints';
import { useGetArtistsByTagsQuery } from '@Redux/APIEndpoints/artistEndpoints';
import { useGetPlaylistsByTagsQuery } from '@Redux/APIEndpoints/playlistEndpoints';

function Similar({ type, tags, id }) {
  const types = {
    tracks: { Element: TracksList, query: useGetTracksByTagsQuery },
    artists: { Element: ArtistsList, query: useGetArtistsByTagsQuery },
    playlists: { Element: PlaylistList, query: useGetPlaylistsByTagsQuery },
  };

  const { Element, query } = types[type];

  const { data, isLoading, error } = query({
    tags: tags,
    limit: 5,
    exclude: id,
  });

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <ContainerRounded>
      <TitleMain>In the Same Genre</TitleMain>
      <Text>{`This selection of ${type} may also appeal to you`}</Text>
      <Element {...{ [type]: data[type] }} />
    </ContainerRounded>
  );
}

Similar.propTypes = {
  tags: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Similar;
