import { useState, useEffect } from 'react';

import Text from '@UI/Text/Text';
import Error from '@Components/Error/Error';
import Loading from '@Components/Loading/Loading';
import TitleMain from '@Components/UI/Titles/TitleMain';
import MoreButton from '@Components/Buttons/MoreButton';
import ArtistsList from '@Components/Artist/ArtistsList';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetPopularArtistsQuery } from '@Redux/APIEndpoints/artistEndpoints';

export default function Artists() {
  const [page, setPage] = useState(1);
  const [allArtists, setAllArtists] = useState([]);

  const { data, isLoading, isFetching, error } = useGetPopularArtistsQuery({
    page,
    limit: 30,
  });

  const handlePage = () => setPage((prevPage) => prevPage + 1);

  useEffect(() => {
    if (data) setAllArtists((prev) => prev.concat(data?.artists));
  }, [data?.artists, data]);

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <ContainerRounded>
      <TitleMain>Listen to the Best: List for Music Lovers</TitleMain>
      <Text>They bring us new hits, a good mood, and unforgettable emotions</Text>
      <ArtistsList artists={allArtists} />
      <MoreButton disabled={isFetching || !data.hasMore} onClick={handlePage} />
    </ContainerRounded>
  );
}
