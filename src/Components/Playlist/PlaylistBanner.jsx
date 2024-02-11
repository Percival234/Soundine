import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Text from '@UI/Text/Text';
import SubTitle from '@UI/Titles/SubTitle';
import Error from '@Components/Error/Error';
import ImageCover from '@UI/Images/ImageCover';
import Loading from '@Components/Loading/Loading';
import LikeButton from '@Components/Buttons/LikeButton';
import TotalContainer from '@Components/Total/TotalContainer';

import { useGetPlaylistQuery } from '@Redux/APIEndpoints/playlistEndpoints';

import { BANNER, SOUNDINE_MAIN_PLAYLIST_ID } from '@Constants/Constants';

export default function PlaylistBanner() {
  const navigate = useNavigate();
  const bannerRef = useRef(null);

  const { data: playlist, isLoading, error } = useGetPlaylistQuery(SOUNDINE_MAIN_PLAYLIST_ID);

  const navigateTo = (event) => {
    if (event.target === bannerRef.current) navigate(`/music/playlists/${playlist?._id}`);
  };

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div
      onClick={navigateTo}
      className="flex flex-col justify-between min-h-[13rem] @xl:min-h-[20rem] @5xl:min-h-[25rem] p-2 @xl:p-5 group flex-1 relative rounded-md overflow-hidden text-white cursor-pointer"
      ref={bannerRef}>
      <ImageCover src={BANNER} alt={playlist?.name} />
      <div>
        <div className="flex items-start justify-between gap-1 @5xl:mb-3">
          <SubTitle className="max-w-lg">
            Melodic Mastery: Collection of the Greatest Tracks
          </SubTitle>
          <LikeButton
            id={playlist?._id}
            type="playlists"
            className="rounded-full bg-white opacity-80 hover:bg-white hover:opacity-60"
          />
        </div>
        <Text className="text-left max-w-sm hidden @md:block">
          We have gathered the best songs of all time, in our opinion, to share them with you!
        </Text>
      </div>
      <TotalContainer followers={playlist?.followers} tracks={playlist?.tracks} />
    </div>
  );
}
