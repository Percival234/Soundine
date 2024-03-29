import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { useSelector } from 'react-redux';

import LinkUnderline from '@UI/Links/LinkUnderline';
import PlayButton from '@Components/Buttons/PlayButton';
import ArtistsList from '@Components/Artist/ArtistsRow';
import LikeButton from '@Components/Buttons/LikeButton';

function LittleTrack({ data: { _id, name, artists }, index, tracks }) {
  const track = useSelector((state) => state.player.track);

  const classes = twMerge(
    'relative flex items-center gap-1.5 p-1 rounded-md duration-200 dark:hover:bg-gray-opacity hover:bg-zinc-50 hover:shadow-md',
    _id === track?._id ? 'bg-zinc-50 dark:bg-gray-opacity' : ''
  );

  return (
    <div className={classes}>
      <PlayButton tracks={tracks} index={index} />
      <div className="flex flex-col flex-1 whitespace-nowrap">
        <div className="inline">
          <LinkUnderline className="inline-block" to={`/music/tracks/${_id}`}>
            {name}
          </LinkUnderline>
        </div>
        <div className="text-xs truncate w-[100px] @sm:w-[180px]">
          By <ArtistsList artists={artists} />
        </div>
      </div>
      <div className="flex">
        <LikeButton id={_id} type="tracks" />
      </div>
    </div>
  );
}

LittleTrack.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artists: PropTypes.array.isRequired,
    src: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
  tracks: PropTypes.array.isRequired,
};

export default LittleTrack;
