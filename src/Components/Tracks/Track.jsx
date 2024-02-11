import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { useSelector } from 'react-redux';

import LinkUnderline from '@UI/Links/LinkUnderline';
import LikeButton from '@Components/Buttons/LikeButton';
import PlayButton from '@Components/Buttons/PlayButton';
import ArtistsList from '@Components/Artist/ArtistsRow';

import formatTime from '@Helpers/formaters/formatTime';
import formatDate from '@Helpers/formaters/formatDate';
import ShareButton from '@Components/Buttons/ShareButton';

function Track({ data: { _id, name, artists, duration, releaseDate }, index, tracks }) {
  const track = useSelector((state) => state.player.track);

  const classes = twMerge(
    'relative flex items-center gap-1 @2xl:gap-5 p-1 @2xl:p-1.5 rounded-lg duration-200 dark:hover:bg-gray-opacity hover:bg-zinc-50',
    _id === track?._id ? 'bg-zinc-50 dark:bg-gray-opacity' : ''
  );

  return (
    <div className={classes}>
      <PlayButton tracks={tracks} index={index} />
      <div className="flex-1 text-sm @2xl:text-base truncate w-[150px] @2xl:w-auto">
        <LinkUnderline to={`/music/tracks/${_id}`} className="font-medium @2xl:font-normal">
          {name}
        </LinkUnderline>
        <div className="@2xl:hidden">
          <ArtistsList artists={artists} />
        </div>
      </div>
      <div className="text-base flex-1 truncate hidden @2xl:block">
        <ArtistsList artists={artists} />
      </div>
      <div className="opacity-80 text-sm text-center hidden @4xl:flex">
        <div className="w-32">{formatDate(releaseDate)}</div>
        <div className="w-16">{formatTime(duration)}</div>
      </div>
      <div className="flex">
        <LikeButton id={_id} type="tracks" />
        <ShareButton link={`/music/tracks/${_id}`} />
      </div>
    </div>
  );
}

Track.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artists: PropTypes.array.isRequired,
    duration: PropTypes.number.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
  tracks: PropTypes.array.isRequired,
};

export default Track;
