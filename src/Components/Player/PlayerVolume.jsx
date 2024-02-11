import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
import { IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io';

import ButtonRounded from '@UI/Buttons/ButtonRounded';

const PlayerVolume = memo(({ audioRef }) => {
  const [volume, setVolume] = useState(localStorage.getItem('volume') || 0.5);

  const handleVolume = (event) => setVolume(event.currentTarget.valueAsNumber);
  const mute = () => setVolume(+volume ? 0 : localStorage.getItem('volume'));

  useEffect(() => {
    audioRef.current.volume = volume;
    if (volume) localStorage.setItem('volume', volume);
  }, [volume, audioRef]);

  return (
    <div className="hidden md:flex gap-1 items-center">
      <ButtonRounded className="p-1.5" onClick={mute}>
        {volume ? <IoMdVolumeHigh size={20} /> : <IoMdVolumeOff size={20} />}
      </ButtonRounded>
      <input
        style={{ '--value': volume, '--min': 0, '--max': 1 }}
        min={0}
        step={0.1}
        max={1}
        type="range"
        onChange={handleVolume}
        value={volume}
        className="volume-slider slider-progress accent-main w-24"
      />
    </div>
  );
});

PlayerVolume.displayName = 'PlayerVolume';

PlayerVolume.propTypes = {
  audioRef: PropTypes.shape(),
};

export default PlayerVolume;
