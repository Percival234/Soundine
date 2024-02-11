import { useParams } from 'react-router-dom';

import Text from '@UI/Text/Text';
import Error from '@Components/Error/Error';
import TitleMain from '@UI/Titles/TitleMain';
import Loading from '@Components/Loading/Loading';
import Similar from '@Components/Similar/Similar';
import TracksList from '@Components/Tracks/TracksList';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetTrackQuery } from '@Redux/APIEndpoints/trackEndpoints';

export default function Track() {
  const { id } = useParams();
  const { data: track, isLoading, error } = useGetTrackQuery(id);

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>
      <ContainerRounded className="md:pb-10">
        <TitleMain>Rhythmic Journey: Musical Discovery</TitleMain>
        <Text>
          Immerse yourself in the atmosphere of our new song, where the notes cascade over you in
          waves of emotion.
        </Text>
        <TracksList tracks={[track]} />
      </ContainerRounded>
      <Similar type="tracks" tags={track.tags} id={track._id} />
    </>
  );
}
