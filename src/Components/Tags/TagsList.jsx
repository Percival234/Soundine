import PropTypes from 'prop-types';

import LinkScroll from '@UI/Links/LinkScroll';

function TagsList({ tags, onClick }) {
  return (
    tags.length > 0 && (
      <div className="flex gap-2 flex-wrap text-sm opacity-80">
        Tags:
        {tags.map((tag) => (
          <LinkScroll
            key={tag}
            to={`/music/tags/${tag}`}
            onClick={onClick}
            className="px-1 bg-gray-opacity rounded text-sx duration-200 hover:text-main active:text-main">
            #{tag}
          </LinkScroll>
        ))}
      </div>
    )
  );
}

TagsList.propTypes = {
  tags: PropTypes.array,
  onClick: PropTypes.func,
};

export default TagsList;
