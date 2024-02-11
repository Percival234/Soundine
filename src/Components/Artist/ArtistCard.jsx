import PropTypes from 'prop-types';

import LinkScroll from '@UI/Links/LinkScroll';
import ImageCover from '@UI/Images/ImageCover';
import LinkUnderline from '@UI/Links/LinkUnderline';
import ImageContainer from '@UI/Containers/ImageContainer';
import TotalContainer from '@Components/Total/TotalContainer';

import { SERVER_URL } from '@Constants/Constants';

function ArtistCard({ data: { name, image, followers, tracks } }) {
  return (
    <div className="group duration-300 hover:brightness-75 active:brightness-75">
      <LinkScroll to={`/music/artists/${name}`}>
        <ImageContainer className="w-auto @5xl:w-auto rounded-full">
          <ImageCover src={`${SERVER_URL}/static/images/artists/${image}`} alt={name} />
        </ImageContainer>
      </LinkScroll>
      <div className="flex flex-col items-center px-1 py-2 truncate">
        <LinkUnderline to={`/music/artists/${name}`} className="font-bold">
          {name}
        </LinkUnderline>
        <TotalContainer tracks={tracks} followers={followers} />
      </div>
    </div>
  );
}

ArtistCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    tracks: PropTypes.array.isRequired,
  }),
};

export default ArtistCard;
