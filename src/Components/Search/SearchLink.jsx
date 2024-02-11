import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

import LinkScroll from '@UI/Links/LinkScroll';

import { useAppContext } from '@Providers/AppProvider';

function SearchLink({ className, children, to }) {
  const { handleSearchVisibility } = useAppContext();
  const classes = twMerge(
    'flex bg-gray-opacity rounded-lg overflow-hidden duration-200 hover:text-main active:text-main',
    className
  );

  return (
    <LinkScroll onClick={handleSearchVisibility} to={to} className={classes}>
      {children}
    </LinkScroll>
  );
}

SearchLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default SearchLink;
