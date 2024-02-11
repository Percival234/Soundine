import { useParams } from 'react-router-dom';

import Text from '@UI/Text/Text';
import Error from '@Components/Error/Error';
import TitleMain from '@UI/Titles/TitleMain';
import Loading from '@Components/Loading/Loading';
import PlaylistList from '@Components/Playlist/PlaylistList';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetCollectionQuery } from '@Redux/APIEndpoints/collectionEndpoints';

export default function Collection() {
  const { id } = useParams();
  const { data: collection, isLoading, error } = useGetCollectionQuery(id);

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  const { name, playlists } = collection;

  return (
    <ContainerRounded>
      <TitleMain>{name}</TitleMain>
      <Text>Listen and Enjoy</Text>
      <PlaylistList playlists={playlists} />
    </ContainerRounded>
  );
}
