import PropTypes from 'prop-types';

import Text from '@UI/Text/Text';
import SubTitle from '@UI/Titles/SubTitle';
import ImageCover from '@UI/Images/ImageCover';
import TagsList from '@Components/Tags/TagsList';
import LikeButton from '@Components/Buttons/LikeButton';
import ShareButton from '@Components/Buttons/ShareButton';
import TotalContainer from '@Components/Total/TotalContainer';
import ImageContainer from '@UI/Containers/ImageContainer';

import { SERVER_URL } from '@Constants/Constants';

function PlaylistInfo({ playlist: { _id, name, image, tags, description, tracks, followers } }) {
  return (
    <div className="flex gap-5 flex-col @lg:flex-row self-center items-center">
      <ImageContainer>
        <ImageCover src={`${SERVER_URL}/static/images/playlists/${image}`} alt={name} />
      </ImageContainer>
      <div className="flex flex-col gap-2 justify-center items-center @lg:items-baseline">
        <SubTitle>{name}</SubTitle>
        <Text className="text-center @lg:text-left">{description}</Text>
        <div className="flex flex-col gap-1 items-center @2xl:items-start">
          <TagsList tags={tags} />
        </div>
        <TotalContainer tracks={tracks} followers={followers} />
        <div className="flex gap-2">
          <LikeButton id={_id} type="playlists" />
          <ShareButton />
        </div>
      </div>
    </div>
  );
}

PlaylistInfo.propTypes = {
  playlist: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tracks: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
    followers: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default PlaylistInfo;
