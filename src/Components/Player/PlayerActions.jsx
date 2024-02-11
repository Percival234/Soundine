import { memo } from 'react';
import PropTypes from 'prop-types';

import LikeButton from '@Components/Buttons/LikeButton';
import ShareButton from '@Components/Buttons/ShareButton';
import PlayerVolume from '@Components/Player/PlayerVolume';

const PlayerActions = memo(({ audioRef, id }) => {
  return (
    <div className="hidden sm:flex gap-2 md:gap-5">
      <PlayerVolume audioRef={audioRef} />
      <div className="flex gap-2">
        <LikeButton type="tracks" id={id} />
        <ShareButton link={`/music/tracks/${id}`} />
      </div>
    </div>
  );
});

PlayerActions.displayName = 'PlayerActions';

PlayerActions.propTypes = {
  audioRef: PropTypes.shape().isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PlayerActions;
