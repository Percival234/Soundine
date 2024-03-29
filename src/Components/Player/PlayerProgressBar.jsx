import PropTypes from 'prop-types';

import formatTime from '@Helpers/formaters/formatTime';

function PlayerProgressBar({ duration, currentProgress, buffered, onChange }) {
  return (
    <div className="relative">
      <div className="absolute -top-4 h-10 w-full overflow-hidden py-4">
        <input
          style={{
            '--max': duration,
            '--value': currentProgress,
          }}
          className="slider-progress absolute z-20 cursor-pointer"
          type="range"
          min={0}
          max={duration}
          value={currentProgress}
          onChange={onChange}
        />
      </div>
      <div
        style={{ width: `${(buffered / duration) * 100}%` }}
        className="block absolute top-0 h-2 z-10 left-0 right-0 bg-gray-opacity"></div>
      <div className="absolute top-2 left-2 text-xs sm:text-sm">{formatTime(currentProgress)}</div>
      <div className="absolute top-2 right-2 text-xs sm:text-sm">{formatTime(duration)}</div>
    </div>
  );
}

PlayerProgressBar.propTypes = {
  duration: PropTypes.number.isRequired,
  currentProgress: PropTypes.number.isRequired,
  buffered: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PlayerProgressBar;
