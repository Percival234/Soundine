import { useParams } from 'react-router-dom';

import Error from '@Components/Error/Error';
import TitleMain from '@UI/Titles/TitleMain';
import Similar from '@Components/Similar/Similar';
import Loading from '@Components/Loading/Loading';
import TracksList from '@Components/Tracks/TracksList';
import ArtistInfo from '@Components/Artist/ArtistInfo';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetArtistQuery } from '@Redux/APIEndpoints/artistEndpoints';

export default function Artist() {
  const { name } = useParams();
  const { data: artist, isLoading, error } = useGetArtistQuery(name);

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>
      <ContainerRounded>
        <TitleMain>Journey to Musical Infinity with {name}</TitleMain>
        <ArtistInfo artist={artist} />
        <TracksList sort tracks={artist.tracks} />
      </ContainerRounded>
      <Similar type="artists" tags={artist.tags} id={artist._id} />
    </>
  );
}
