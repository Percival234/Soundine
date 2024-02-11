import LinkMore from '@UI/Links/LinkMore';
import SubTitle from '@UI/Titles/SubTitle';
import Error from '@Components/Error/Error';
import LinkScroll from '@UI/Links/LinkScroll';
import Loading from '@Components/Loading/Loading';
import LittleTrack from '@Components/Tracks/LittleTrack';
import PlaylistCard from '@Components/Playlist/PlaylistCard';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useGetNewTracksQuery } from '@Redux/APIEndpoints/trackEndpoints';
import { useGetNewPlaylistsQuery } from '@Redux/APIEndpoints/playlistEndpoints';

export default function New() {
  const {
    data: playlists,
    isLoading: playlistsIsLoading,
    error: playlistsError,
  } = useGetNewPlaylistsQuery({ limit: 5 });

  const {
    data: tracks,
    isLoading: tracksIsLoading,
    error: tracksError,
  } = useGetNewTracksQuery({ limit: 15 });

  if (playlistsIsLoading || tracksIsLoading) return <Loading />;
  if (playlistsError || tracksError) return <Error error={playlistsError || tracksError} />;

  return (
    <div className="flex flex-col @5xl:flex-row gap-2 @xl:gap-5">
      <ContainerRounded>
        <LinkScroll to="/music/new">
          <SubTitle hash>New Playlists</SubTitle>
        </LinkScroll>
        <div className="grid grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-2 @7xl:grid-cols-3 gap-2 @lg:gap-4">
          {playlists.playlists.map((playlist) => (
            <PlaylistCard key={playlist._id} data={playlist} />
          ))}
          <LinkMore to="/music/new" />
        </div>
      </ContainerRounded>
      <ContainerRounded className="flex-1">
        <LinkScroll to="/music/new">
          <SubTitle hash>New Tracks</SubTitle>
        </LinkScroll>
        <div className="relative flex-1 rounded-lg overflow-y-auto overflow-x-hidden min-h-[250px]">
          <div className="absolute flex flex-col gap-1 w-full">
            {tracks.tracks.map((track, index) => (
              <LittleTrack tracks={tracks.tracks} index={index} key={track._id} data={track} />
            ))}
            <div className="sticky bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-zinc-100 dark:from-zinc-900 to-transparent z-40"></div>
          </div>
        </div>
        <LinkMore className="h-auto" to="/music/new" />
      </ContainerRounded>
    </div>
  );
}
