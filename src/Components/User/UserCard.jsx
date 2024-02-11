import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { AiOutlineTeam, AiOutlinePlaySquare } from 'react-icons/ai';

import Text from '@UI/Text/Text';
import SubTitle from '@UI/Titles/SubTitle';
import LinkRounded from '@UI/Links/LinkRounded';
import TagsList from '@Components/Tags/TagsList';
import Loading from '@Components/Loading/Loading';
import TotalContainer from '@Components/Total/TotalContainer';
import ContainerRounded from '@UI/Containers/ContainerRounded';

export default function UserCard() {
  const user = useSelector((state) => state.user?.user);

  const mostFavorite = useMemo(() => {
    const tracks = user?.favorites?.tracks;

    if (!tracks) return;
    const tagsCounts = {};

    tracks.forEach((track) => {
      if (track.tags && Array.isArray(track.tags)) {
        track.tags.forEach((tag) => {
          tagsCounts[tag] = (tagsCounts[tag] || 0) + 1;
        });
      }
    });

    const topTags = Object.keys(tagsCounts)
      .map((tag) => ({
        tag,
        count: tagsCounts[tag],
      }))
      .sort((a, b) => b.count - a.count)
      .map((tag) => tag.tag)
      .slice(0, 3);

    return topTags;
  }, [user?.favorites?.tracks]);

  if (!user) return <Loading />;

  return (
    <ContainerRounded className="flex-1 flex-row justify-between gap-0 md:gap-0 p-2 md:p-1.5">
      <div className="flex flex-col justify-between gap-3 p-2.5">
        <div className="flex flex-col">
          <SubTitle>{user?.name}</SubTitle>
          <Text className="text-left">{user?.email}</Text>
        </div>
        <div className="flex flex-col gap-2">
          <TagsList tags={mostFavorite} />
          <TotalContainer
            tracks={user?.favorites?.tracks}
            playlists={user?.favorites?.playlists}
            artists={user?.favorites?.artists}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <LinkRounded aria-label="navigate to favorite tracks" to="/favorites">
          <BsMusicNoteBeamed />
        </LinkRounded>
        <LinkRounded aria-label="navigate to favorite playlists" to="/favorites/playlists">
          <AiOutlinePlaySquare />
        </LinkRounded>
        <LinkRounded aria-label="navigate to favorite artists" to="/favorites/artists">
          <AiOutlineTeam />
        </LinkRounded>
      </div>
    </ContainerRounded>
  );
}
