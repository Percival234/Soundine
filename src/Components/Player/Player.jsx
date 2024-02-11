import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import PlayerTrack from '@Components/Player/PlayerTrack';
import PlayerActions from '@Components/Player/PlayerActions';
import PlayerControlls from '@Components/Player/PlayerControlls';
import PlayerProgressBar from '@Components/Player/PlayerProgressBar';

import { useActions } from '@Hooks/useActions';
import { SERVER_URL } from '@Constants/Constants';

export default function Player() {
  const { isPlaying, track } = useSelector((state) => state.player);
  const { play, stop, next, prev } = useActions();
  const [currentProgress, setCurrentProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const audioRef = useRef(null);

  const onEnded = () => {
    next();
    play();
  };

  const onDurationChange = (event) => setDuration(event.currentTarget.duration);

  const onProgress = (event) => {
    const audio = event.currentTarget;
    const { duration, buffered, currentTime } = audio;
    if (duration) {
      for (let i = 0; i < buffered.length; i++) {
        if (buffered.start(buffered.length - 1 - i) < currentTime) {
          const bufferedLength = buffered.end(buffered.length - 1 - i);
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  const onTimeUpdate = (event) => {
    setCurrentProgress(event.currentTarget.currentTime);
    onProgress(event);
  };

  const handleDuration = (event) => {
    const value = event.currentTarget.valueAsNumber;
    audioRef.current.currentTime = value;
    setCurrentProgress(value);
  };

  useEffect(() => {
    if (navigator?.mediaSession) {
      navigator.mediaSession.setActionHandler('pause', stop);
      navigator.mediaSession.setActionHandler('previoustrack', prev);
      navigator.mediaSession.setActionHandler('nexttrack', next);
      return () => {
        navigator.mediaSession.setActionHandler('pause', null);
        navigator.mediaSession.setActionHandler('previoustrack', null);
        navigator.mediaSession.setActionHandler('nexttrack', null);
      };
    }
  }, []);

  useEffect(() => {
    isPlaying ? audioRef?.current?.play() : audioRef?.current?.pause();
  }, [isPlaying, track]);

  return (
    track && (
      <div className="animate-bounceIn translate-y-full opacity-0 sticky bottom-0 right-0 flex flex-col w-full z-[100] h-[4.5em] ms:h-[5em] bg-zinc-100 dark:bg-zinc-900">
        <PlayerProgressBar
          duration={duration}
          currentProgress={currentProgress}
          buffered={buffered}
          onChange={handleDuration}
        />
        <div className="flex items-center justify-between flex-row-reverse sm:flex-row flex-1 px-5 md:px-12 pt-2">
          <PlayerControlls />
          <audio
            onPause={() => stop()}
            onPlay={() => play()}
            onEnded={onEnded}
            preload="metadata"
            src={`${SERVER_URL}/static/music/${track.src}`}
            ref={audioRef}
            className="hidden"
            onDurationChange={onDurationChange}
            onTimeUpdate={onTimeUpdate}
            onProgress={onProgress}
          />
          <PlayerTrack track={track} />
          <PlayerActions id={track._id} name={track.name} audioRef={audioRef} />
        </div>
      </div>
    )
  );
}
