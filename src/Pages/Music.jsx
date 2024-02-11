import Text from '@UI/Text/Text';
import Error from '@Components/Error/Error';
import TitleMain from '@UI/Titles/TitleMain';
import Slider from '@Components/Slider/Slider';
import Loading from '@Components/Loading/Loading';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetCollectionQuery } from '@Redux/APIEndpoints/collectionEndpoints';
import { useGetPopularArtistsQuery } from '@Redux/APIEndpoints/artistEndpoints';

import { POP_COLLECTION_ID, ROCK_COLLECTION_ID, TAGS } from '@Constants/Constants';

export default function Music() {
  const {
    data: artists,
    isLoading: artistIsLoading,
    error: artistError,
  } = useGetPopularArtistsQuery({ limit: 10 });
  const {
    data: coll1,
    isLoading: coll1IsLoading,
    error: coll1Error,
  } = useGetCollectionQuery(ROCK_COLLECTION_ID);
  const {
    data: coll2,
    isLoading: coll2IsLoading,
    error: coll2Error,
  } = useGetCollectionQuery(POP_COLLECTION_ID);

  if (artistIsLoading || coll1IsLoading || coll2IsLoading) return <Loading />;
  if (artistError || coll1Error || coll2Error)
    return <Error error={artistError || coll1Error || coll2Error} />;

  return (
    <ContainerRounded>
      <TitleMain>Music that Makes the World Brighter!</TitleMain>
      <Text>
        Explore a vast selection of musical tracks across different genres. Enjoy listening to your
        favorite songs and discover new musical experiences.
      </Text>
      <Slider
        to={`/music/collections/${coll1._id}`}
        type="playlist"
        data={coll1.playlists}
        title={coll1.name}
      />
      <Slider to="/music/tags" type="tag" data={TAGS.slice(0, 10)} title="Tags" />
      <Slider to="/music/artists" type="artist" data={artists.artists} title="Artists" />
      <Slider
        to={`/music/collections/${coll2._id}`}
        type="playlist"
        data={coll2.playlists}
        title={coll2.name}
      />
    </ContainerRounded>
  );
}
