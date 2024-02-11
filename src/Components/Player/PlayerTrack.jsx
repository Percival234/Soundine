import { memo } from 'react';
import PropTypes from 'prop-types';

import ArtistsRow from '@Components/Artist/ArtistsRow';
import LinkUnderline from '@UI/Links/LinkUnderline';

const PlayerTrack = memo(({ track }) => {
  const { _id, name, artists } = track;
  return (
    <div className="flex flex-col justify-center">
      <LinkUnderline
        className="font-bold text-sm sm:text-base leading-none"
        to={`/music/tracks/${_id}`}>
        {name}
      </LinkUnderline>
      <div className="text-xs md:text-sm max-w-[15em] truncate whitespace-nowrap">
        <ArtistsRow artists={artists} />
      </div>
    </div>
  );
});

PlayerTrack.displayName = 'PlayerTrack';

PlayerTrack.propTypes = {
  track: PropTypes.shape().isRequired,
};

export default PlayerTrack;
