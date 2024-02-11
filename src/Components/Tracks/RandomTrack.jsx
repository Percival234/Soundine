import { LiaRandomSolid } from 'react-icons/lia';

import Error from '@Components/Error/Error';
import Loading from '@Components/Loading/Loading';
import ButtonRounded from '@UI/Buttons/ButtonRounded';
import LittleTrack from '@Components/Tracks/LittleTrack';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetRandomTrackQuery } from '@Redux/APIEndpoints/trackEndpoints';

export default function RandomTrack() {
  const { data: track, isLoading, error, refetch } = useGetRandomTrackQuery();

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <ContainerRounded className="p-1.5 md:p-1.5 gap-0 md:gap-0">
      <div className="flex justify-between">
        <h4 className="px-2 pt-2">Random track</h4>
        <ButtonRounded aria-label="change random track" onClick={refetch}>
          <LiaRandomSolid />
        </ButtonRounded>
      </div>
      <LittleTrack data={track} tracks={[track]} index={0} />
    </ContainerRounded>
  );
}
