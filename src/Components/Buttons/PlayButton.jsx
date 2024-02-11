import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { IoMdPause } from 'react-icons/io';
import { AiFillCaretRight } from 'react-icons/ai';

import ButtonRounded from '@UI/Buttons/ButtonRounded';

import { useActions } from '@Hooks/useActions';

function PlayButton({ tracks, index }) {
  const playerTrack = useSelector((state) => state.player?.track);
  const isPlaying = useSelector((state) => state.player?.isPlaying);
  const { play, stop, setTracks } = useActions();

  const handlePlay = useCallback(() => {
    if (playerTrack?._id === tracks[index]?._id && isPlaying) {
      stop();
    } else {
      setTracks({ tracks, index });
      play();
    }
  }, [playerTrack, tracks, isPlaying, play, stop, index, setTracks]);

  return (
    <ButtonRounded aria-label="play track" onClick={handlePlay}>
      {playerTrack?._id === tracks[index]?._id && isPlaying ? <IoMdPause /> : <AiFillCaretRight />}
    </ButtonRounded>
  );
}

PlayButton.propTypes = {
  tracks: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default PlayButton;
