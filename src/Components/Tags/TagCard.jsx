import PropTypes from 'prop-types';

import LinkScroll from '@UI/Links/LinkScroll';
import ImageCover from '@UI/Images/ImageCover';

function TagCard({ data: { tag, image } }) {
  return (
    <LinkScroll to={`/music/tags/${tag}`}>
      <div className="isolate group relative flex justify-center items-center p-7 lg:p-10 text-white shadow-lg rounded-lg overflow-hidden duration-300 hover:brightness-75 active:scale-90">
        <ImageCover src={image} alt={`tag-${tag}`} />
        <div className="font-bold text-xl capitalize whitespace-nowrap z-10">{tag}</div>
      </div>
    </LinkScroll>
  );
}

TagCard.propTypes = {
  data: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default TagCard;
