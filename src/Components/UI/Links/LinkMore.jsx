import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

import LinkScroll from '@UI/Links/LinkScroll';

function LinkMore({ to, className }) {
  const classes = twMerge(
    'flex justify-center h-full items-center bg-gray-opacity rounded-lg py-3 duration-200 hover:text-main hover:opacity-80 active:text-main',
    className
  );
  return (
    <LinkScroll to={to} className={classes}>
      Show all
    </LinkScroll>
  );
}

LinkMore.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkMore;
