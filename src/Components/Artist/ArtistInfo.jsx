import PropTypes from 'prop-types';

import SubTitle from '@UI/Titles/SubTitle';
import ImageCover from '@UI/Images/ImageCover';
import TagsList from '@Components/Tags/TagsList';
import LikeButton from '@Components/Buttons/LikeButton';
import ShareButton from '@Components/Buttons/ShareButton';
import ImageContainer from '@UI/Containers/ImageContainer';
import TotalContainer from '@Components/Total/TotalContainer';

import { SERVER_URL } from '@Constants/Constants';

function ArtistInfo({ artist: { _id, name, image, tags, followers, tracks } }) {
  return (
    <div className="flex gap-5 flex-col @lg:flex-row self-center items-center">
      <ImageContainer className="rounded-full">
        <ImageCover src={`${SERVER_URL}/static/images/artists/${image}`} alt={name} />
      </ImageContainer>
      <div className="flex flex-col gap-2 justify-center items-center @lg:items-baseline">
        <SubTitle>{name}</SubTitle>
        <TagsList tags={tags} />
        <TotalContainer tracks={tracks} followers={followers} />
        <div className="flex gap-2">
          <LikeButton id={_id} type="artists" />
          <ShareButton />
        </div>
      </div>
    </div>
  );
}

ArtistInfo.propTypes = {
  artist: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    followers: PropTypes.number.isRequired,
    tracks: PropTypes.array.isRequired,
  }),
};

export default ArtistInfo;
