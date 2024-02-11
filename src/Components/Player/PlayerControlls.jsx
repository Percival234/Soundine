import { memo } from 'react';
import { useSelector } from 'react-redux';
import { IoMdPause } from 'react-icons/io';
import { AiFillCaretRight, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';

import ButtonRounded from '@UI/Buttons/ButtonRounded';

import { useActions } from '@Hooks/useActions';

const PlayerControlls = memo(() => {
  const { isPlaying, track, index, tracks } = useSelector((state) => state.player);
  const { play, stop, next, prev } = useActions();

  const handlePlay = () => (isPlaying ? stop() : play());

  return (
    <div className="flex gap-1 items-center">
      <ButtonRounded onClick={() => prev()} disabled={!index || !track}>
        <AiOutlineStepBackward />
      </ButtonRounded>
      <ButtonRounded disabled={!track} onClick={handlePlay}>
        {isPlaying ? <IoMdPause size={25} /> : <AiFillCaretRight size={25} />}
      </ButtonRounded>
      <ButtonRounded onClick={() => next()} disabled={index >= tracks.length - 1 || !track}>
        <AiOutlineStepForward />
      </ButtonRounded>
    </div>
  );
});

PlayerControlls.displayName = 'PlayerControlls';

export default PlayerControlls;
