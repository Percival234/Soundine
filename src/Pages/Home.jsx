import New from '@Components/New/New';
import Social from '@Components/Social/Social';
import UserCard from '@Components/User/UserCard';
import TopCard from '@Components/TopCard/TopCard';
import RandomTrack from '@Components/Tracks/RandomTrack';
import PlaylistBanner from '@Components/Playlist/PlaylistBanner';

export default function Home() {
  return (
    <>
      <PlaylistBanner />
      <div className="flex gap-2 @xl:gap-3 flex-col @5xl:flex-row">
        <div className="flex flex-col flex-1 gap-2 @xl:gap-3">
          <RandomTrack />
          <div className="flex flex-1 gap-2 @xl:gap-3">
            <UserCard />
            <Social />
          </div>
        </div>
        <TopCard />
      </div>
      <New />
    </>
  );
}
