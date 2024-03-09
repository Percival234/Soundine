import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import LinkScroll from '@UI/Links/LinkScroll';
import ImageCover from '@UI/Images/ImageCover';
import LikeButton from '@Components/Buttons/LikeButton';
import TotalContainer from '@Components/Total/TotalContainer';

import { scrollToTop } from '@Helpers/scrollToTop';

import { SERVER_URL } from '@Constants/Constants';

function PlaylistCard({ data: { _id, name, image, tracks, followers } }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  function navigateTo(event) {
    if (event.target === cardRef.current) {
      navigate(`/music/playlists/${_id}`);
      scrollToTop();
    }
  }

  return (
    <div
      onClick={navigateTo}
      className="group text-white cursor-pointer aspect-square overflow-hidden relative rounded-lg min-w-[130px] bg-gray-opacity isolate duration-300">
      <ImageCover
        src={`${SERVER_URL}/static/images/playlists/${image}`}
        alt={name}
        className="brightness-[0.90]"
      />
      <div ref={cardRef} className="flex flex-col justify-between h-full p-1.5">
        <div className="flex justify-between items-start gap-1">
          <LinkScroll
            to={`/music/playlists/${_id}`}
            className="font-medium md:font-bold text-sm md:text-lg inline-block">
            {name}
          </LinkScroll>
          <LikeButton
            id={_id}
            type="playlists"
            className="p-1.5 rounded-full bg-white opacity-80 hover:bg-white hover:opacity-60"
          />
        </div>
        <TotalContainer tracks={tracks} followers={followers} />
      </div>
    </div>
  );
}

PlaylistCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tracks: PropTypes.array.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};

export default PlaylistCard;
